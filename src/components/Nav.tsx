'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'

interface NavProps {
  locale: string
  messages: {
    about: string
    projects: string
    contact: string
    openMenu: string
    closeMenu: string
    language: string
  }
}

const LOCALES = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
] as const

export default function Nav({ locale, messages }: NavProps) {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 8))

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // English is default and has no prefix in the URL (handled by middleware)
  const getHref = (path: string) => {
    if (locale === 'en') return path
    return path === '/' ? `/${locale}` : `/${locale}${path}`
  }

  // Current path without the locale prefix, e.g. /fr/work → /work
  const basePath =
    locale === 'en' ? pathname : pathname.replace(/^\/fr(?=\/|$)/, '') || '/'

  const getLocaleHref = (code: string) => {
    if (code === 'en') return basePath
    return basePath === '/' ? `/${code}` : `/${code}${basePath}`
  }

  const links = [
    { key: 'about',    href: `${getHref('/')}#about`, label: messages.about,    active: false },
    { key: 'projects', href: getHref('/work'),        label: messages.projects, active: basePath.startsWith('/work') },
    { key: 'contact',  href: getHref('/contact'),     label: messages.contact,  active: basePath === '/contact' },
  ]

  return (
    <MotionConfig reducedMotion="user">
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 bg-white',
          'border-b-[0.5px] border-[#F8F8F8] transition-shadow duration-300',
          'motion-safe:animate-nav-in',
          scrolled ? 'shadow-[0_8px_30px_-12px_rgba(30,30,30,0.15)]' : '',
        ].join(' ')}
      >
        <nav
          className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]
            px-5 py-4 md:px-14 md:py-6 lg:px-[72px]"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <Link
            href={getHref('/')}
            className="font-heading font-extrabold text-[15px] md:text-[17px] tracking-[-0.01em] text-charcoal"
          >
            CHI SAMUEL
          </Link>

          {/* Centre links — desktop */}
          <ul
            className="hidden md:flex items-center gap-1 font-body text-[14px]"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map(({ key, href, label, active }) => (
              <li key={key} className="relative">
                {hovered === key && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-full bg-lilac"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    aria-hidden="true"
                  />
                )}
                <Link
                  href={href}
                  onMouseEnter={() => setHovered(key)}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'relative block px-4 py-1.5 transition-colors duration-200',
                    active ? 'text-brand font-medium' : 'text-charcoal hover:text-brand',
                  ].join(' ')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side — language toggle + mobile menu button */}
          <div className="flex items-center justify-end gap-3">
            <div
              role="group"
              aria-label={messages.language}
              className="flex items-center rounded-md border border-charcoal/10 bg-white p-0.5 font-body text-[12px] font-medium"
            >
              {LOCALES.map(({ code, label }) =>
                code === locale ? (
                  <span
                    key={code}
                    aria-current="true"
                    className="rounded px-2 py-0.5 bg-lilac text-brand"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    key={code}
                    href={getLocaleHref(code)}
                    scroll={false}
                    hrefLang={code}
                    className="rounded px-2 py-0.5 text-charcoal/50 hover:text-charcoal transition-colors duration-200"
                  >
                    {label}
                  </Link>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? messages.closeMenu : messages.openMenu}
              className="md:hidden relative w-9 h-9 -mr-1.5 flex items-center justify-center text-charcoal"
            >
              <motion.span
                className="absolute h-[1.5px] w-5 bg-current rounded-full"
                animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="absolute h-[1.5px] w-5 bg-current rounded-full"
                animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden overflow-hidden border-t border-charcoal/10"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="px-5 py-6 flex flex-col gap-1">
                {links.map(({ key, href, label, active }, i) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={[
                        'block py-2 font-heading font-bold text-[32px] tracking-[-0.02em]',
                        active ? 'text-brand' : 'text-charcoal',
                      ].join(' ')}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  )
}
