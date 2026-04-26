import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales } from './i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Skip if it's a system path, admin, or static asset
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') // common for favicon.ico, images, etc.
  ) {
    return
  }

  // 2. Check if the pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 3. If it has a locale, and it's 'en', we redirect to the clean URL (no /en prefix)
  if (pathname.startsWith('/en/') || pathname === '/en') {
    const newPath = pathname === '/en' ? '/' : pathname.replace('/en/', '/')
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  // 4. If it DOES NOT have a locale, it means we are on the default 'en' paths
  // We rewrite internally to /en/[path] so Next.js finds the files in src/app/[locale]
  if (!pathnameHasLocale) {
    return NextResponse.rewrite(new URL(`/en${pathname}`, request.url))
  }
}

export const config = {
  // Broad matcher, logic inside middleware handles exclusions
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
