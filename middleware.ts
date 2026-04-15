import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const response = NextResponse.next();
  
  const pathname = url.pathname;
  const isEnglish = pathname.startsWith("/en");

  // Set locale headers for downstream processing
  response.headers.set("x-locale", isEnglish ? "en" : "de");
  response.headers.set("x-pathname", pathname);

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  
  // Strict-Transport-Security (preload for production)
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  // Content-Security-Policy
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' cdn.plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' api.github.com cdn.plausible.io; frame-ancestors 'none';"
  );

  // Cache strategy based on content type
  if (pathname.startsWith("/api")) {
    // API routes: no cache
    response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
  } else if (pathname.match(/\.(js|css|woff2|png|jpg|jpeg|gif|svg|ico|webp)$/)) {
    // Static assets: long-term cache (1 year)
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (pathname.startsWith("_next")) {
    // Next.js internal assets: cache
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else {
    // HTML pages: moderate cache (1 hour) to allow for updates
    response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
  }

  // Add request ID for tracing
  const requestId = request.headers.get("x-request-id") || crypto.randomUUID();
  response.headers.set("x-request-id", requestId);

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except API, Next static/image assets and favicon
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
