import { NextResponse } from "next/server";
import { getEnv } from "@/lib/env";
import { z } from "zod";

// Basic in-memory rate limiter (per instance)
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 20; // max requests per window per IP
const hits = new Map<string, { count: number; resetAt: number }>();

// Request validation schema
const geminiRequestSchema = z.object({
  prompt: z.string().min(1, "Prompt required").max(2000, "Prompt too long"),
});

function getClientIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  const xr = req.headers.get("x-real-ip");
  if (xr) return xr;
  return "local";
}

function rateLimit(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now > rec.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  if (rec.count >= RATE_MAX) {
    return { allowed: false, retryAfter: Math.ceil((rec.resetAt - now) / 1000) };
  }
  rec.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export async function POST(req: Request) {
  const requestId = req.headers.get("x-request-id") || crypto.randomUUID();
  
  try {
    // Get validated environment
    const env = getEnv();
    const GEMINI_API_KEY = env.GEMINI_API_KEY;

    const ip = getClientIp(req);
    const rl = rateLimit(ip);
    if (!rl.allowed) {
      return new NextResponse(JSON.stringify({ error: "Rate limit exceeded" }), {
        status: 429,
        headers: { 
          "Retry-After": String(rl.retryAfter), 
          "Content-Type": "application/json",
          "x-request-id": requestId,
        },
      });
    }

    let body: unknown = null;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { 
        status: 400,
        headers: { "x-request-id": requestId },
      });
    }

    // Validate request with Zod
    const validationResult = geminiRequestSchema.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map(i => i.message).join(", ");
      return NextResponse.json({ error: errors }, { 
        status: 400,
        headers: { "x-request-id": requestId },
      });
    }

    const { prompt } = validationResult.data;

    const endpoint = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        signal: controller.signal,
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const msg = data?.error?.message || `Upstream error (${response.status})`;
        console.error(`[${requestId}] Gemini API error: ${msg}`);
        return NextResponse.json({ error: msg }, { 
          status: 502,
          headers: { "x-request-id": requestId },
        });
      }

      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.text ||
        "No response from Gemini.";

      return NextResponse.json({ reply: text }, {
        headers: { "x-request-id": requestId },
      });
    } finally {
      clearTimeout(timeout);
    }
  } catch (err) {
    // Env validation throws here on missing vars
    const isEnvError = err instanceof Error && err.message.includes("Invalid environment");
    const statusCode = isEnvError ? 500 : 500;
    
    console.error(`[${requestId}] API error:`, err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Failed to process request" }, { 
      status: statusCode,
      headers: { "x-request-id": requestId },
    });
  }
}

