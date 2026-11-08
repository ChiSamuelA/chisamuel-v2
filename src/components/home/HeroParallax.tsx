'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

interface HeroParallaxProps {
  children: ReactNode
  /** How far (px) the layer drifts over the first 800px of scroll */
  distance: number
  className?: string
}

// Moves its children at a different speed than the page scroll,
// so hero layers separate into depth as you scroll away.
// Desktop only — on mobile the hero stacks and layers would collide.
export default function HeroParallax({ children, distance, className }: HeroParallaxProps) {
  const { scrollY } = useScroll()
  const reduceMotion = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const enabled = isDesktop && !reduceMotion
  const y = useTransform(scrollY, [0, 800], [0, enabled ? distance : 0])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
