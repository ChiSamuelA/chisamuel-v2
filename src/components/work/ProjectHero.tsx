import React from 'react'
import Image from 'next/image'
import type { Project, Media } from '@/payload-types'

const SPHERE_BG =
  'radial-gradient(circle at 35% 30%, oklch(0.85 0.15 55) 0%, oklch(0.72 0.16 55) 18%, oklch(0.5 0.15 40) 45%, oklch(0.25 0.08 30) 75%, oklch(0.15 0.02 30) 100%)'

const SPHERE_SHADOW =
  'inset -80px -140px 200px oklch(0.08 0.01 30), 0 0 200px oklch(0.45 0.2 55 / 0.35), 0 0 400px oklch(0.55 0.2 55 / 0.2)'

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const { n, tag, name, tagline, client, role, year, duration, status, heroImage, stack } = project

  return (
    <section className="relative overflow-hidden bg-ink-deep px-5 md:px-14 lg:px-[72px] pt-36 lg:pt-48 pb-24">
      {/* Sphere */}
      <div
        className="absolute -right-24 md:-right-48 top-20 rounded-full pointer-events-none
          w-[320px] h-[320px]
          md:w-[480px] md:h-[480px]
          lg:w-[560px] lg:h-[560px]"
        style={{
          background: SPHERE_BG,
          boxShadow: SPHERE_SHADOW,
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{ backgroundImage: GRAIN }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, oklch(0.08 0.01 30) 95%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Breadcrumb */}
        <div className="font-mono text-[11px] text-muted uppercase tracking-[1.5px] mb-8">
          <span className="text-copper">Work</span>
          <span className="mx-2 text-copper/40">↗</span>
          <span>{n} — Featured</span>
          <span className="mx-2 text-copper/40">↗</span>
          <span className="text-paper">{tag}</span>
        </div>

        {/* Project Title */}
        <h1 className="font-serif font-normal text-paper leading-[0.92] tracking-[-0.03em]
          text-[52px] sm:text-[96px] lg:text-[168px]">
          {name}<span className="text-copper italic">.</span>
        </h1>

        {/* Tagline */}
        {tagline && (
          <p className="mt-8 font-serif italic text-paper-dim text-[18px] sm:text-[20px] max-w-[720px] leading-relaxed">
            {tagline}
          </p>
        )}

        {/* Metadata Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[oklch(0.22_0.005_80)] border border-[oklch(0.22_0.005_80)] rounded-sm overflow-hidden">
          {[
            ['CLIENT', client || '—'],
            ['ROLE', role || '—'],
            ['YEAR', year || '—'],
            ['DURATION', duration || '—'],
            ['STATUS', status || '—'],
          ].map(([label, value]) => (
            <div key={label} className="bg-ink-deep p-5 md:p-6">
              <div className="font-mono text-[10px] text-copper uppercase tracking-[1.5px] mb-2">{label}</div>
              <div className="text-[15px] text-paper font-sans leading-tight">{value}</div>
            </div>
          ))}
        </div>

        {/* Hero Image Area */}
        <div className="mt-12 relative aspect-video w-full overflow-hidden rounded-sm border border-oklch(0.26 0.005 80) bg-ink/20">
          {heroImage && typeof heroImage !== 'string' ? (
            <Image
              src={(heroImage as Media).url || ''}
              alt={(heroImage as Media).alt || name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center font-mono text-[12px] text-muted uppercase tracking-[1px]
              bg-[repeating-linear-gradient(45deg,oklch(0.22_0.005_80),oklch(0.22_0.005_80)_2px,oklch(0.2_0.005_80)_2px,oklch(0.2_0.005_80)_4px)]">
              [ hero screenshot · product shot · 16:9 ]
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
