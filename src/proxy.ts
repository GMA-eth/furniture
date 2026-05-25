import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Get locale from Accept-Language header
  const acceptLang = request.headers.get("accept-language") || "";
  const preferredLocale = acceptLang.includes("ar")
    ? "ar"
    : defaultLocale;

  // Redirect to locale path
  const newUrl = new URL(
    `/${preferredLocale}${pathname === "/" ? "" : pathname}`,
    request.url
  );
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|images|api|favicon.ico).*)"],
};
