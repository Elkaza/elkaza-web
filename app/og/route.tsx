import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Elkaza Consulting";
  const path = searchParams.get("path") || "";
  const lang = searchParams.get("lang") || "de";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#f8fafc",
          padding: 64,
          fontSize: 48,
          color: "#0f172a",
        }}
      >
        <div style={{ fontSize: 28, marginBottom: 12, color: "#1d4ed8" }}>Elkaza Consulting</div>
        <div style={{ fontWeight: 700, fontSize: 56, lineHeight: 1.2 }}>{title}</div>
        <div style={{ fontSize: 24, marginTop: 16, color: "#334155" }}>{lang.toUpperCase()} · {path}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

