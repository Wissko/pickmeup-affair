'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface RibbonBowProps {
  /** Optional external ref — lets parent share the same scroll target */
  ribbonRef?: React.RefObject<HTMLDivElement | null>
}

export default function RibbonBow({ ribbonRef }: RibbonBowProps) {
  const internalRef = useRef<HTMLDivElement>(null)
  const containerRef = (ribbonRef ?? internalRef) as React.RefObject<HTMLDivElement>

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // ─── Scroll tracking ────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 15%'],
  })

  // ─── Fade out au scroll ──────────────────────────────────────────────────────
  const imageOpacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0])

  // ─── Dimensions ──────────────────────────────────────────────────────────────
  const height = isMobile ? '220px' : '300px'

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      {/* Animation de respiration (scale légère en boucle) + fade au scroll */}
      <motion.img
        src="/images/t.svg"
        alt="Nœud ruban"
        aria-hidden="true"
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 'min(95vw, 1200px)',
          height,
          objectFit: 'contain',
          opacity: imageOpacity,
          display: 'block',
        }}
      />
    </div>
  )
}
