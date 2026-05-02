import React from 'react'
import Image from 'next/image'
import type { Project, Media } from '@/payload-types'

interface ProjectGalleryProps {
  project: Project
}

const Placeholder = () => (
  <div 
    className="w-full h-full min-h-[300px] border border-[oklch(0.26_0.005_80)] rounded-sm bg-[oklch(0.18_0.005_80)] flex items-center justify-center
    bg-[repeating-linear-gradient(45deg,oklch(0.22_0.005_80),oklch(0.22_0.005_80)_2px,oklch(0.2_0.005_80)_2px,oklch(0.2_0.005_80)_4px)]"
  >
    <span className="font-mono text-[11px] text-muted uppercase tracking-[1px]">[ Image Placeholder ]</span>
  </div>
)

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const { gallery } = project

  if (!gallery || gallery.length === 0) return null

  // Helper to render image or placeholder
  const renderItem = (item: typeof gallery[0]) => {
    if (item.image && typeof item.image !== 'string') {
      const media = item.image as Media
      return (
        <div className="relative w-full h-full overflow-hidden rounded-sm border border-[oklch(0.26_0.005_80)]">
          <Image
            src={media.url || ''}
            alt={media.alt || 'Gallery image'}
            fill
            className="object-cover"
          />
        </div>
      )
    }
    return <Placeholder />
  }

  return (
    <section className="bg-ink-deep border-t border-[oklch(0.2_0.005_80)] px-5 md:px-14 lg:px-[72px] py-16">
      <div className="flex flex-col gap-10">
        {/* Section Label */}
        <div className="font-mono text-[11px] text-copper uppercase tracking-[2px]">
          §03 — THE BUILD
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Main Item (Left) */}
          <div className="aspect-[4/3] w-full">
            {renderItem(gallery[0])}
          </div>

          {/* Secondary Items (Right) */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[4/3] w-full">
              {gallery[1] ? renderItem(gallery[1]) : <Placeholder />}
            </div>
            <div className="aspect-[4/3] w-full">
              {gallery[2] ? renderItem(gallery[2]) : <Placeholder />}
            </div>
          </div>
        </div>

        {/* Caption for first image */}
        {gallery[0]?.caption && (
          <div className="font-mono text-[11px] text-muted uppercase tracking-[1px] mt-2">
            {gallery[0].caption}
          </div>
        )}
      </div>
    </section>
  )
}
