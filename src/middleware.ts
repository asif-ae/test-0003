import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user")?.value;
  const user = userCookie ? JSON.parse(userCookie) : null;

  if (!user && (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user && request.nextUrl.pathname === "/login") {
    const referer = request.headers.get("referer");
    const previousUrl = referer ? new URL(referer).pathname : "/";

    const redirectPath = previousUrl && previousUrl !== "/login" ? previousUrl : "/";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};
