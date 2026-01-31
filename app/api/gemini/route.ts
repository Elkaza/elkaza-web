import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

// Basic in-memory rate limiter (per instance)
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX = 20; // max requests per window per IP
const hits = new Map<string, { count: number; resetAt: number }>();

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
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
    }

    const ip = getClientIp(req);
    const rl = rateLimit(ip);
    if (!rl.allowed) {
      return new NextResponse(JSON.stringify({ error: "Rate limit exceeded" }), {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfter), "Content-Type": "application/json" },
      });
    }

    let body: unknown = null;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    function getStringField(obj: unknown, key: string): string | undefined {
      if (obj && typeof obj === "object" && key in obj) {
        const val = (obj as Record<string, unknown>)[key];
        if (typeof val === "string") return val;
      }
      return undefined;
    }

    const prompt = getStringField(body, "prompt")?.trim() ?? "";
    if (!prompt) {
      return NextResponse.json({ error: "Missing 'prompt'" }, { status: 400 });
    }
    if (prompt.length > 2000) {
      return NextResponse.json({ error: "Prompt too long" }, { status: 413 });
    }

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
        return NextResponse.json({ error: msg }, { status: 502 });
      }

      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.text ||
        "No response from Gemini.";

      return NextResponse.json({ reply: text });
    } finally {
      clearTimeout(timeout);
    }
  } catch (err) {
    console.error("Gemini API error:", err);
    return NextResponse.json({ error: "Failed to call Gemini API" }, { status: 500 });
  }
}

