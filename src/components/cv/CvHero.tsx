import React from 'react'

interface CvHeroProps {
  messages: {
    label: string
    role: string
    founder: string
    location: string
    download: string
  }
}

const CvHero = ({ messages }: CvHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-ink-deep px-5 pt-[180px] pb-20 md:px-14 lg:px-[72px]">
      {/* Smaller Copper Sphere */}
      <div 
        className="absolute top-[80px] -right-40 w-[520px] h-[520px] rounded-full pointer-events-none opacity-65 z-0"
        style={{
          background: 'radial-gradient(circle at 35% 30%, oklch(0.85 0.15 55) 0%, oklch(0.72 0.16 55) 18%, oklch(0.5 0.15 40) 45%, oklch(0.25 0.08 30) 75%, oklch(0.15 0.02 30) 100%)',
          boxShadow: 'inset -80px -140px 200px oklch(0.08 0.01 30), 0 0 200px oklch(0.45 0.2 55 / 0.35), 0 0 400px oklch(0.55 0.2 55 / 0.2)'
        }}
      />

      <div className="relative z-10">
        <div className="font-mono text-[11px] text-copper uppercase tracking-[0.2em] mb-6">
          {messages.label}
        </div>

        <h1 className="font-serif text-[56px] md:text-[96px] lg:text-[156px] leading-[0.92] tracking-[-0.03em] text-paper">
          Chi Samuel<br />
          <span className="italic text-copper">Apeng.</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="font-mono text-[12px] text-paper tracking-wide flex flex-wrap gap-x-4 gap-y-2">
            <span>{messages.role}</span>
            <span className="opacity-30">·</span>
            <span>{messages.founder}</span>
            <span className="opacity-30">·</span>
            <span>{messages.location}</span>
          </div>

          <a 
            href="/cv.pdf" 
            target="_blank"
            className="font-mono text-[11px] text-copper border border-copper/30 px-3 py-1.5 rounded transition-colors hover:bg-copper/10 w-fit"
          >
            {messages.download}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CvHero
