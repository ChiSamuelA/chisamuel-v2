const SPHERE_BG =
  'radial-gradient(circle at 35% 30%, oklch(0.85 0.15 55) 0%, oklch(0.72 0.16 55) 18%, oklch(0.5 0.15 40) 45%, oklch(0.25 0.08 30) 75%, oklch(0.15 0.02 30) 100%)'

const SPHERE_SHADOW =
  'inset -80px -140px 200px oklch(0.08 0.01 30), 0 0 200px oklch(0.45 0.2 55 / 0.35), 0 0 400px oklch(0.55 0.2 55 / 0.2)'

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`

interface HeroProps {
  label: string
  headline: string
  tagline: string
  scroll: string
  projects: string
}

export default function Hero({ label, headline, tagline, scroll, projects }: HeroProps) {
  const lines = headline.split('\n')

  return (
    <section className="relative h-[100svh] min-h-[800px] overflow-hidden bg-ink-deep">

      {/* Sphere — mobile/tablet pulled up closer to text, desktop unchanged */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none
          top-[62%]  w-[260px]  h-[260px]
          sm:top-[65%] sm:w-[380px] sm:h-[380px]
          md:top-[72%] md:w-[540px] md:h-[540px]
          lg:top-[68%] lg:w-[820px] lg:h-[820px]"
        style={{ background: SPHERE_BG, boxShadow: SPHERE_SHADOW }}
        aria-hidden="true"
      />

      {/* Glow halo */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none
          top-[62%]  w-[390px]   h-[390px]
          sm:top-[65%] sm:w-[560px]  sm:h-[560px]
          md:top-[72%] md:w-[800px]  md:h-[800px]
          lg:top-[68%] lg:w-[1200px] lg:h-[1200px]"
        style={{ background: 'radial-gradient(circle, oklch(0.6 0.2 55 / 0.12) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{ backgroundImage: GRAIN }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col
          px-5 md:px-14 lg:px-[72px]
          pt-24 sm:pt-28 lg:pt-0
          pb-10 lg:pb-[72px]"
      >
        {/* Headline block */}
        <div className="flex flex-col lg:flex-1 lg:justify-center">
          <p
            className="font-mono text-[11px] text-copper uppercase mb-3 lg:mb-5"
            style={{ letterSpacing: '2px' }}
          >
            {label}
          </p>

          <h1
            className="font-serif font-normal leading-[0.95] text-paper
              text-[52px]
              sm:text-[72px]
              md:text-[96px]
              lg:text-[120px]
              xl:text-[146px]"
            style={{ letterSpacing: '-0.025em' }}
          >
            {lines.map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <em>{line}</em> : line}
              </span>
            ))}
          </h1>

          {/* Tagline — mobile/tablet only */}
          <p className="mt-6 lg:hidden max-w-[380px] text-[14px] sm:text-[15px] leading-[1.55] text-paper-dim">
            {tagline}
          </p>
        </div>

        {/* Desktop bottom strip */}
        <div className="hidden lg:flex mt-auto items-end gap-12">
          <p className="max-w-[380px] text-[15px] leading-[1.55] text-paper-dim">
            {tagline}
          </p>
          <div
            className="font-mono text-[11px] text-muted"
            style={{ letterSpacing: '0.5px' }}
          >
            <div>{scroll}</div>
            <div className="mt-2">{projects}</div>
          </div>
        </div>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, oklch(0.08 0.01 30) 95%)' }}
        aria-hidden="true"
      />
    </section>
  )
}