'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SPHERE_BG =
  'radial-gradient(circle at center, oklch(0.72 0.16 55) 0%, oklch(0.5 0.15 40) 35%, oklch(0.25 0.08 30) 70%, transparent 100%)'

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`

export default function NotFound() {
  const pathname = usePathname()
  
  // Parse the current locale safely from pathname
  const locale = pathname?.split('/')[1] === 'fr' ? 'fr' : 'en'

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 })

  // Interactive mouse follow with smooth lag/damping
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY })
    };

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const updatePosition = () => {
      setMousePos((prev) => {
        const dx = targetPos.x - prev.x
        const dy = targetPos.y - prev.y
        // Damping factor of 0.08 for extremely premium, fluid inertia
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        }
      })
      animationFrameId = requestAnimationFrame(updatePosition)
    }

    animationFrameId = requestAnimationFrame(updatePosition)
    return () => cancelAnimationFrame(animationFrameId)
  }, [targetPos])

  // Localized dictionaries
  const content = {
    en: {
      tag: 'Error 404 — Dimension Lost',
      headline: 'Dimension\nNot Found',
      tagline: 'The coordinates you entered do not match any known pages on this portfolio, or the page has migrated to another cluster.',
      backHome: 'Return Home',
      explore: 'Explore direct pathways instead',
      links: [
        { label: 'Case Studies', path: '/work' },
        { label: 'Professional CV', path: '/cv' },
        { label: 'Direct Contact', path: '/contact' },
      ]
    },
    fr: {
      tag: 'Erreur 404 — Dimension Perdue',
      headline: 'Dimension\nIntrouvable',
      tagline: 'Les coordonnées que vous avez saisies ne correspondent à aucune page connue sur ce portfolio, ou la page a migré vers un autre cluster.',
      backHome: 'Retour à l\'accueil',
      explore: 'Explorez plutôt les voies directes',
      links: [
        { label: 'Études de cas', path: '/work' },
        { label: 'CV Professionnel', path: '/cv' },
        { label: 'Contact Direct', path: '/contact' },
      ]
    }
  }[locale]

  // Dynamic localization sub-path helper
  const getHref = (path: string) => {
    if (locale === 'en') return path
    return `/${locale}${path}`
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-ink-deep px-5 md:px-14 lg:px-[72px] pt-40 pb-28 flex flex-col justify-center">
      {/* Interactive Cursor Sphere */}
      <div
        className="absolute rounded-full pointer-events-none opacity-30 blur-[60px] md:opacity-40
          w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        style={{
          background: SPHERE_BG,
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.5s ease',
        }}
        aria-hidden="true"
      />

      {/* Subtle Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{ backgroundImage: GRAIN }}
        aria-hidden="true"
      />

      {/* Dark Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, oklch(0.08 0.01 30) 95%)' }}
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl">
        {/* Label */}
        <div className="font-mono text-[11px] text-copper uppercase tracking-[2px] mb-8 animate-pulse">
          <span>{content.tag}</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="font-serif font-normal text-paper leading-[0.92] tracking-[-0.03em] mb-8
          text-[56px] sm:text-[96px] lg:text-[144px] whitespace-pre-line">
          {content.headline}<span className="text-copper italic">?</span>
        </h1>

        {/* Text */}
        <p className="font-sans text-paper-dim text-[16px] sm:text-[18px] max-w-[620px] leading-relaxed mb-12">
          {content.tagline}
        </p>

        {/* Flex Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
          {/* Main Action Button */}
          <Link
            href={getHref('/')}
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-copper text-paper bg-ink-deep hover:bg-copper hover:text-ink-deep font-mono text-[12px] uppercase tracking-[2px] rounded-sm transition-all duration-300 group"
          >
            <span>{content.backHome}</span>
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
          </Link>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] text-muted uppercase tracking-[1px] mb-1">
              {content.explore}
            </span>
            <div className="flex flex-row gap-5 flex-wrap">
              {content.links.map((link) => (
                <Link
                  key={link.label}
                  href={getHref(link.path)}
                  className="font-mono text-[11px] text-copper hover:text-paper uppercase tracking-[1.5px] transition-colors group flex items-center gap-1"
                >
                  <span>{link.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
