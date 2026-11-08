import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import portrait from '../../../public/version_2/about-section.jpg'

interface AboutStripProps {
  label: string
  headline: string
  p1: string
  p2: string
  p3: string
}

// Copy still marks highlights with {braces}; the v2 design renders it plain
const plain = (text: string) => text.replace(/[{}]/g, '')

export default function AboutStrip({ label, headline, p1, p2, p3 }: AboutStripProps) {
  return (
    <section id="about" className="scroll-mt-24 bg-mist px-5 md:px-14 lg:px-[72px] py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-[1120px] grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20">

        {/* Left column — label, headline, body */}
        <div>
          <Reveal>
            <p className="inline-block rounded-md bg-lilac px-2.5 py-1 font-body text-[11px] md:text-[12px] uppercase tracking-[0.04em] text-brand">
              {label}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-[440px] font-heading font-bold text-charcoal leading-[1.15] tracking-[-0.02em]
              text-[28px] md:text-[34px] lg:text-[40px]"
            >
              {headline}
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-6 max-w-[480px] flex flex-col gap-5 font-body text-[14px] md:text-[15px] leading-[1.65] text-charcoal">
              <p>{plain(p1)}</p>
              <p>{plain(p2)}</p>
              <p>{plain(p3)}</p>
            </div>
          </Reveal>
        </div>

        {/* Right column — photo card + signature */}
        <div className="relative w-full max-w-[420px] mx-auto lg:mr-0">
          <Reveal variant="scale" duration={1}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={portrait}
                alt="Chi Samuel Apeng"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-top"
              />
              {/* Bottom fade into the section background */}
              <div
                className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-mist via-mist/70 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          {/* Signature — written in left to right after the card appears */}
          <div className="absolute inset-x-0 bottom-[4%] flex justify-center pointer-events-none" aria-hidden="true">
            <Reveal variant="wipe" delay={0.6} duration={1.4}>
              <p
                className="font-signature whitespace-nowrap text-charcoal text-[44px] md:text-[56px] leading-none"
                style={{ textShadow: '0 0 18px #FFFFFF, 0 0 36px #FFFFFF, 0 0 6px #FFFFFF' }}
              >
                Chi Samuel A.
              </p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  )
}
