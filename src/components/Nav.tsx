'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavProps {
  locale: string
  messages: {
    index: string
    work: string
    cv: string
    contact: string
  }
}

export default function Nav({ locale, messages }: NavProps) {
  const pathname = usePathname()

  // Helper to build links based on locale
  // English is default and has no prefix in the URL (handled by middleware)
  const getHref = (path: string) => {
    if (locale === 'en') return path
    return `/${locale}${path}`
  }

  const links = [
    { href: getHref('/'),        label: messages.index },
    { href: getHref('/work'),    label: messages.work, mobileHide: true },
    { href: getHref('/cv'),      label: messages.cv },
    { href: getHref('/contact'), label: messages.contact },
  ]

  // Language switcher logic
  const otherLocale = locale === 'en' ? 'fr' : 'en'
  const switchLabel = locale === 'en' ? 'FR' : 'EN'
  
  // To switch, we either add /fr or remove /fr
  const getSwitchHref = () => {
    if (locale === 'en') {
      return `/fr${pathname}`
    } else {
      // Remove /fr prefix
      const newPath = pathname.replace('/fr', '') || '/'
      return newPath
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-5 py-5 md:px-14 md:py-7
        bg-ink-deep/80 backdrop-blur-md border-b border-[oklch(0.2_0.005_80)]"
      aria-label="Main navigation"
    >
      {/* Wordmark */}
      <div
        className="flex items-center gap-2.5 font-mono text-[12px] text-paper"
        style={{ letterSpacing: '0.4px' }}
      >
        <span
          className="block w-2 h-2 rounded-full bg-copper shrink-0"
          style={{ boxShadow: '0 0 12px oklch(0.72 0.16 55)' }}
          aria-hidden="true"
        />
        <span className="hidden xs:inline">CHI_SAMUEL</span>
        <span className="xs:hidden">CHI</span>
      </div>

      {/* Links & Switcher */}
      <div className="flex items-center gap-5 md:gap-9">
        <div
          className="flex items-center gap-5 md:gap-9 font-mono text-[12px]"
          style={{ letterSpacing: '0.4px' }}
        >
          {links.map(({ href, label, mobileHide }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={[
                  mobileHide ? 'hidden md:block' : '',
                  isActive
                    ? 'text-paper'
                    : 'text-paper-dim hover:text-paper',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] h-4 bg-[oklch(0.2_0.005_80)] hidden sm:block" />

        {/* Language Switcher Button */}
        <Link
          href={getSwitchHref()}
          className="font-mono text-[11px] px-2.5 py-1 rounded border border-copper/30 text-copper"
          style={{ letterSpacing: '1px' }}
        >
          {switchLabel}
        </Link>
      </div>
    </nav>
  )
}
