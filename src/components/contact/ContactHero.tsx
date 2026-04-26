import React from 'react'
import Image from 'next/image'

interface ContactHeroProps {
  messages: {
    label: string
    headlineLine1: string
    headlineLine2: string
    body: string
    cta: string
  }
}

const ContactHero = ({ messages }: ContactHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-ink-deep px-5 pt-[160px] pb-24 md:px-14 lg:px-[72px]">
      {/* Soft copper glow */}
      <div 
        className="absolute top-0 right-0 w-[340px] h-[340px] rounded-full opacity-70 blur-[80px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, oklch(0.72 0.16 55) 0%, transparent 60%)'
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-end">
        {/* Left column — Portrait */}
        <div className="relative aspect-[3/4] w-full lg:w-[420px] overflow-hidden rounded-sm border border-[oklch(0.28_0.005_80)] bg-ink">
          <Image
            src="/profile.webp"
            alt="Chi Samuel Apeng"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right column — Greeting */}
        <div className="pb-4">
          <div className="font-mono text-[11px] text-copper uppercase tracking-[2px] mb-6">
            {messages.label}
          </div>

          <h1 className="font-serif text-[52px] md:text-[80px] lg:text-[140px] leading-[0.95] tracking-[-0.03em] mb-8">
            <span className="text-paper block">{messages.headlineLine1}</span>
            <span className="text-copper italic block">{messages.headlineLine2}</span>
          </h1>

          <p className="font-serif text-[19px] text-paper-dim italic leading-[1.55] max-w-[580px] mb-10 text-pretty">
            {messages.body}
          </p>

          <a 
            href="mailto:me@chisamuel.com" 
            className="inline-block font-mono text-[12px] text-ink-deep bg-copper px-8 py-4 rounded hover:bg-copper-dim transition-colors duration-300 tracking-wide font-medium"
          >
            → {messages.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
