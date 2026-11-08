import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Download } from 'lucide-react'
import HeroParallax from './HeroParallax'
import portrait from '../../../public/version_2/front-page.png'

const TITLE_GRADIENT = 'linear-gradient(0deg, #6514E8 0%, #1E1E1E 100%)'

const GLOW = 'radial-gradient(circle, #C17EFF80 0%, transparent 65%)'

const PORTRAIT_OVERLAY = 'linear-gradient(0deg, rgba(10,6,20,0.55) 0%, rgba(10,6,20,0.15) 60%, rgba(10,6,20,0.1) 100%)'

interface HeroProps {
  locale: string
  label: string
  title: string
  tagline: string
  ctaProjects: string
  ctaCv: string
}

export default function Hero({ locale, label, title, tagline, ctaProjects, ctaCv }: HeroProps) {
  const lines = title.split('\n')

  // Helper to build local links
  const getHref = (path: string) => {
    if (locale === 'en') return path
    return `/${locale}${path}`
  }

  return (
    <section
      className="relative isolate overflow-hidden bg-white flex flex-col
        lg:block lg:h-[100svh] lg:min-h-[760px]"
    >
      {/* Glows — bottom corners, drifting slowly */}
      <div
        className="absolute -z-10 -left-[25%] -bottom-[35%] w-[85vw] h-[85vw] max-w-[1000px] max-h-[1000px]
          rounded-full pointer-events-none motion-safe:animate-glow-drift"
        style={{ background: GLOW }}
        aria-hidden="true"
      />
      <div
        className="absolute -z-10 -right-[25%] -bottom-[35%] w-[85vw] h-[85vw] max-w-[1000px] max-h-[1000px]
          rounded-full pointer-events-none motion-safe:animate-glow-drift"
        style={{ background: GLOW, animationDelay: '-7s', animationDirection: 'alternate-reverse' }}
        aria-hidden="true"
      />

      {/* Label + headline */}
      <HeroParallax distance={140} className="relative z-0">
        <div className="flex flex-col items-center text-center px-5 pt-28 md:pt-36 lg:pt-[clamp(130px,17vh,190px)]">
          <p
            className="motion-safe:animate-rise-in rounded-md bg-lilac px-2.5 py-1
              font-body text-[11px] md:text-[12px] uppercase tracking-[0.04em] text-brand"
          >
            {label}
          </p>

          <h1
            className="mt-6 md:mt-8 font-heading font-extrabold leading-[1.02] tracking-[-0.035em]
              text-[clamp(40px,7.6vw,132px)]"
          >
            {lines.map((line, i) => {
              const isLast = i === lines.length - 1
              const words = line.split(' ')
              // On desktop the portrait's head sits in the gap before the last word
              const content =
                isLast && words.length > 1 ? (
                  <>
                    {words.slice(0, -1).join(' ')}
                    <span className="inline-block w-[0.25em] lg:w-[1.3em]"> </span>
                    {words[words.length - 1]}
                  </>
                ) : (
                  line
                )

              return (
                <span key={i} className="block overflow-hidden pb-[0.06em]">
                  <span
                    className="block bg-clip-text text-transparent motion-safe:animate-line-up"
                    style={{
                      backgroundImage: TITLE_GRADIENT,
                      backgroundSize: `100% ${lines.length * 100}%`,
                      backgroundPosition: `0 ${lines.length > 1 ? (i / (lines.length - 1)) * 100 : 0}%`,
                      animationDelay: `${150 + i * 120}ms`,
                    }}
                  >
                    {content}
                  </span>
                  {!isLast && ' '}
                </span>
              )
            })}
          </h1>
        </div>
      </HeroParallax>

      {/* Tagline + CTAs — stacked under the headline on mobile, bottom corners on desktop */}
      <div
        className="relative z-20 flex flex-col items-center gap-7 px-5 mt-8 text-center
          lg:absolute lg:inset-x-0 lg:bottom-[clamp(48px,9vh,110px)] lg:mt-0
          lg:flex-row lg:items-end lg:justify-between lg:px-[72px] lg:text-left"
      >
        <p
          className="motion-safe:animate-rise-in max-w-[340px] lg:max-w-[260px] xl:max-w-[300px]
            font-body text-[15px] md:text-[16px] leading-[1.55] text-charcoal"
          style={{ animationDelay: '650ms' }}
        >
          {tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-3 lg:flex-col lg:items-stretch">
          <Link
            href={getHref('/work')}
            className="group motion-safe:animate-rise-in inline-flex items-center justify-between gap-6
              rounded-md bg-brand px-4 py-2.5 font-body text-[14px] font-medium text-white
              shadow-[0_10px_30px_-10px_rgba(101,20,232,0.7)]
              transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5
              hover:shadow-[0_14px_34px_-10px_rgba(101,20,232,0.8)]"
            style={{ animationDelay: '750ms' }}
          >
            {ctaProjects}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>

          <Link
            href={getHref('/cv')}
            className="group motion-safe:animate-rise-in inline-flex items-center justify-between gap-6
              rounded-md bg-white px-4 py-2.5 font-body text-[14px] font-medium text-charcoal
              shadow-[0_6px_24px_-8px_rgba(30,30,30,0.2)]
              transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5
              hover:shadow-[0_10px_28px_-8px_rgba(30,30,30,0.25)]"
            style={{ animationDelay: '850ms' }}
          >
            {ctaCv}
            <Download
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* Portrait — in front of the headline, anchored to the bottom edge */}
      <div
        className="relative z-10 mx-auto mt-4 h-[380px] sm:h-[460px] md:h-[560px]
          lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:h-[78%]"
      >
        <HeroParallax distance={60} className="h-full">
          <div className="relative h-full motion-safe:animate-portrait-in" style={{ animationDelay: '300ms' }}>
            {/* Served as-is: the source is small, re-compressing it adds visible artifacts */}
            <Image
              src={portrait}
              alt="Chi Samuel Apeng"
              priority
              unoptimized
              className="h-full w-auto max-w-none brightness-[0.85] contrast-[1.05]"
            />
            {/* Darkening overlay, masked to the silhouette so the transparent background stays clean */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: PORTRAIT_OVERLAY,
                maskImage: `url(${portrait.src})`,
                maskSize: '100% 100%',
                WebkitMaskImage: `url(${portrait.src})`,
                WebkitMaskSize: '100% 100%',
              }}
              aria-hidden="true"
            />
          </div>
        </HeroParallax>
      </div>
    </section>
  )
}
