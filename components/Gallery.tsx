'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
  { src: '/images/hero.jpg',   alt: 'The Signature tiramisu',          caption: 'The Signature' },
  { src: '/images/craft.jpg',  alt: 'Hands crafting tiramisu',         caption: 'The Craft' },
  { src: '/images/custom.jpg', alt: 'Custom tiramisu creation',        caption: 'Made for You' },
  { src: '/images/events.jpg', alt: 'Tiramisu for celebrations',       caption: 'Celebrations' },
  { src: '/images/gift.jpg',   alt: 'Tiramisu gift box',               caption: 'The Gift' },
  { src: '/images/can.jpg',    alt: 'Sweet layered tiramisu in a can', caption: 'Sweet Layers' },
  { src: '/images/coeur.jpg',  alt: 'Tiramisu heart with love',        caption: 'With Love' },
  { src: '/images/raise.jpg',  alt: 'Raising a glass of tiramisu',    caption: 'Raise a Glass' },
  { src: '/images/spoon.jpg',  alt: 'The first bite of tiramisu',     caption: 'The First Bite' },
]

type Position = 'far' | 'near' | 'center' | 'nearR' | 'farR' | 'hidden'

const cardVariants: Record<Position, object> = {
  far: {
    scale: 0.65,
    x: '-85%',
    rotateY: 35,
    opacity: 0.4,
    filter: 'blur(4px) brightness(0.5)',
    zIndex: 1,
  },
  near: {
    scale: 0.80,
    x: '-50%',
    rotateY: 20,
    opacity: 0.65,
    filter: 'blur(1.5px) brightness(0.7)',
    zIndex: 2,
  },
  center: {
    scale: 1.00,
    x: '0%',
    rotateY: 0,
    opacity: 1,
    filter: 'blur(0px) brightness(1)',
    zIndex: 5,
  },
  nearR: {
    scale: 0.80,
    x: '50%',
    rotateY: -20,
    opacity: 0.65,
    filter: 'blur(1.5px) brightness(0.7)',
    zIndex: 2,
  },
  farR: {
    scale: 0.65,
    x: '85%',
    rotateY: -35,
    opacity: 0.4,
    filter: 'blur(4px) brightness(0.5)',
    zIndex: 1,
  },
  hidden: {
    scale: 0.5,
    x: '0%',
    rotateY: 0,
    opacity: 0,
    filter: 'blur(8px) brightness(0)',
    zIndex: 0,
  },
}

const cardVariantsMobile: Record<Position, object> = {
  far: {
    scale: 0.60,
    x: '-80%',
    rotateY: 20,
    opacity: 0,
    filter: 'blur(6px) brightness(0.4)',
    zIndex: 0,
  },
  near: {
    scale: 0.75,
    x: '-45%',
    rotateY: 15,
    opacity: 0.6,
    filter: 'blur(2px) brightness(0.65)',
    zIndex: 2,
  },
  center: {
    scale: 1.00,
    x: '0%',
    rotateY: 0,
    opacity: 1,
    filter: 'blur(0px) brightness(1)',
    zIndex: 5,
  },
  nearR: {
    scale: 0.75,
    x: '45%',
    rotateY: -15,
    opacity: 0.6,
    filter: 'blur(2px) brightness(0.65)',
    zIndex: 2,
  },
  farR: {
    scale: 0.60,
    x: '80%',
    rotateY: 20,
    opacity: 0,
    filter: 'blur(6px) brightness(0.4)',
    zIndex: 0,
  },
  hidden: {
    scale: 0.5,
    x: '0%',
    rotateY: 0,
    opacity: 0,
    filter: 'blur(8px) brightness(0)',
    zIndex: 0,
  },
}

const transitionConfig = {
  duration: 0.6,
  ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
}

function getPosition(index: number, activeIndex: number, total: number): Position {
  const diff = ((index - activeIndex) % total + total) % total
  const normalizedDiff = diff > total / 2 ? diff - total : diff

  if (normalizedDiff === 0) return 'center'
  if (normalizedDiff === -1) return 'near'
  if (normalizedDiff === -2) return 'far'
  if (normalizedDiff === 1) return 'nearR'
  if (normalizedDiff === 2) return 'farR'
  return 'hidden'
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const go = useCallback((dir: number) => {
    setActiveIndex((prev) => (prev + dir + slides.length) % slides.length)
  }, [])

  const goTo = useCallback((idx: number) => {
    setActiveIndex(idx)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [paused, go])

  const handleCardClick = (index: number) => {
    const pos = getPosition(index, activeIndex, slides.length)
    if (pos === 'near' || pos === 'far') go(-1)
    else if (pos === 'nearR' || pos === 'farR') go(1)
  }

  const variants = isMobile ? cardVariantsMobile : cardVariants
  const cardWidth = isMobile ? 220 : 280

  return (
    <section
      id="gallery"
      className="section-over-bg py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="font-sans text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--caramel)' }}
          >
            Gallery
          </p>
          <h2
            className="font-serif font-light italic caramel-line-center"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: 'var(--cream)',
              lineHeight: 1.2,
            }}
          >
            A Feast for the Eyes
          </h2>
          <p
            className="font-sans font-light mt-4"
            style={{ color: 'rgba(245,237,224,0.6)', fontSize: '1rem' }}
          >
            Each creation, a moment worth remembering.
          </p>
        </div>

        {/* Arc Carousel */}
        <div
          ref={containerRef}
          style={{
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* Cards container */}
          <div
            style={{
              position: 'relative',
              height: isMobile ? `${Math.round(220 * 4 / 3)}px` : `${Math.round(280 * 4 / 3)}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transformStyle: 'preserve-3d',
            }}
          >
            {slides.map((slide, i) => {
              const pos = getPosition(i, activeIndex, slides.length)
              const isClickable = pos !== 'center' && pos !== 'hidden'
              const isCenter = pos === 'center'

              return (
                <motion.div
                  key={i}
                  animate={variants[pos]}
                  transition={transitionConfig}
                  onClick={() => isClickable ? handleCardClick(i) : undefined}
                  style={{
                    position: 'absolute',
                    width: `${cardWidth}px`,
                    aspectRatio: '3/4',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: isClickable ? 'pointer' : 'default',
                    transformStyle: 'preserve-3d',
                    boxShadow: isCenter ? '0 30px 60px rgba(0,0,0,0.5)' : 'none',
                    willChange: 'transform, opacity, filter',
                  }}
                  aria-hidden={pos === 'hidden'}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes={`${cardWidth}px`}
                    priority={i === 0}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Caption */}
          <div
            style={{
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontSize: '18px',
                  color: 'rgba(245,237,224,0.88)',
                  letterSpacing: '0.04em',
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                {slides[activeIndex].caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            marginTop: '32px',
          }}
        >
          {/* Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => go(-1)}
              aria-label="Previous photo"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(201,146,90,0.45)',
                background: 'rgba(13,11,9,0.6)',
                color: 'rgba(245,237,224,0.85)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(6px)',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,146,90,0.9)'
                e.currentTarget.style.background = 'rgba(201,146,90,0.18)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,146,90,0.45)'
                e.currentTarget.style.background = 'rgba(13,11,9,0.6)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={() => go(1)}
              aria-label="Next photo"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(201,146,90,0.45)',
                background: 'rgba(13,11,9,0.6)',
                color: 'rgba(245,237,224,0.85)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(6px)',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,146,90,0.9)'
                e.currentTarget.style.background = 'rgba(201,146,90,0.18)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,146,90,0.45)'
                e.currentTarget.style.background = 'rgba(13,11,9,0.6)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  height: '8px',
                  width: i === activeIndex ? '24px' : '8px',
                  borderRadius: '9999px',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: i === activeIndex ? '#c9925a' : 'rgba(255,255,255,0.28)',
                  transition: 'width 0.35s ease, background 0.35s ease',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
