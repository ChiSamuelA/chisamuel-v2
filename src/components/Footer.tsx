import React from 'react'
import Link from 'next/link'
import LocalClock from './footer/LocalClock'
import FooterSignature from './footer/FooterSignature'

interface FooterProps {
  locale: string
  nav: {
    about: string
    projects: string
    contact: string
  }
  messages: {
    cta: string
    navTitle: string
    socialTitle: string
    timezoneLabel: string
    location: string
  }
}

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://cm.linkedin.com/in/chi-samuel-apeng' },
  { label: 'Github',   href: 'https://github.com/ChiSamuelA' },
  { label: 'WhatsApp', href: 'https://wa.me/237659224784' },
]

const Footer = ({ locale, nav, messages }: FooterProps) => {
  // Helper to build local links
  const getHref = (path: string) => {
    if (locale === 'en') return path
    return path === '/' ? `/${locale}` : `/${locale}${path}`
  }

  const navLinks = [
    { label: nav.about,    href: `${getHref('/')}#about` },
    { label: nav.projects, href: getHref('/work') },
    { label: nav.contact,  href: getHref('/contact') },
  ]

  return (
    <footer className="relative overflow-hidden bg-brand text-white font-body">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-14 md:gap-10
        px-5 pt-16 md:px-14 md:pt-20 lg:px-[72px]"
      >
        {/* Left — CTA + direct contact */}
        <div className="flex flex-col gap-10 md:gap-16">
          <h2 className="font-heading font-bold text-[36px] md:text-[44px] leading-[1.05] tracking-[-0.02em]">
            {messages.cta.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>

          <div className="flex flex-col gap-2 text-[14px]">
            <a href="mailto:chisamuelapeng@gmail.com" className="w-fit hover:opacity-70 transition-opacity">
              chisamuelapeng@gmail.com
            </a>
            <a href="tel:+237659224784" className="w-fit hover:opacity-70 transition-opacity">
              +237 659 224 784
            </a>
          </div>
        </div>

        {/* Right — link columns + time zone */}
        <div className="flex flex-col gap-10 md:gap-14 md:min-w-[300px]">
          <div className="grid grid-cols-2 gap-10 md:gap-16 text-[13px]">
            <div>
              <p className="font-medium mb-3">{messages.navTitle}</p>
              <ul className="flex flex-col gap-1.5">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-white/70 hover:text-white transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium mb-3">{messages.socialTitle}</p>
              <ul className="flex flex-col gap-1.5">
                {SOCIALS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-1 rounded-md bg-white/10 px-4 py-3 text-[12px]">
            <p className="font-medium">{messages.timezoneLabel}</p>
            <p className="font-medium">{messages.location}</p>
            <p className="text-white/60">UTC+1</p>
            <p className="text-white/60"><LocalClock /></p>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="mt-16 md:mt-24">
        <FooterSignature />
      </div>
    </footer>
  )
}

export default Footer
