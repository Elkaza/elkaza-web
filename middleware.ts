import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const headers = new Headers(request.headers);
  const isEnglish = url.pathname.startsWith("/en");
  headers.set("x-locale", isEnglish ? "en" : "de");
  headers.set("x-pathname", url.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: [
    // Apply to all routes except API, Next static/image assets and favicon
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
