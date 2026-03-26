'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import TextReveal from './TextReveal'

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

const cardVariants: Record<Position, import("framer-motion").TargetAndTransition> = {
  far:    { scale: 0.65, x: '-85%', rotateY: 35,  opacity: 0.4,  filter: 'blur(4px) brightness(0.5)', zIndex: 1 },
  near:   { scale: 0.80, x: '-50%', rotateY: 20,  opacity: 0.65, filter: 'blur(1.5px) brightness(0.7)', zIndex: 2 },
  center: { scale: 1.00, x: '0%',   rotateY: 0,   opacity: 1,    filter: 'blur(0px) brightness(1)', zIndex: 5 },
  nearR:  { scale: 0.80, x: '50%',  rotateY: -20, opacity: 0.65, filter: 'blur(1.5px) brightness(0.7)', zIndex: 2 },
  farR:   { scale: 0.65, x: '85%',  rotateY: -35, opacity: 0.4,  filter: 'blur(4px) brightness(0.5)', zIndex: 1 },
  hidden: { scale: 0.5,  x: '0%',   rotateY: 0,   opacity: 0,    filter: 'blur(8px) brightness(0)', zIndex: 0 },
}

const cardVariantsMobile: Record<Position, import("framer-motion").TargetAndTransition> = {
  far:    { scale: 0.60, x: '-80%', rotateY: 20,  opacity: 0,    filter: 'blur(6px) brightness(0.4)', zIndex: 0 },
  near:   { scale: 0.75, x: '-45%', rotateY: 15,  opacity: 0.6,  filter: 'blur(2px) brightness(0.65)', zIndex: 2 },
  center: { scale: 1.00, x: '0%',   rotateY: 0,   opacity: 1,    filter: 'blur(0px) brightness(1)', zIndex: 5 },
  nearR:  { scale: 0.75, x: '45%',  rotateY: -15, opacity: 0.6,  filter: 'blur(2px) brightness(0.65)', zIndex: 2 },
  farR:   { scale: 0.60, x: '80%',  rotateY: 20,  opacity: 0,    filter: 'blur(6px) brightness(0.4)', zIndex: 0 },
  hidden: { scale: 0.5,  x: '0%',   rotateY: 0,   opacity: 0,    filter: 'blur(8px) brightness(0)', zIndex: 0 },
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
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragThreshold = 50

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const go = useCallback((dir: number) => {
    setActiveIndex((prev) => (prev + dir + slides.length) % slides.length)
  }, [])

  const goTo = useCallback((idx: number) => setActiveIndex(idx), [])

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
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        backgroundColor: '#0d0b08',
        position: 'relative',
        zIndex: 1,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <ScrollReveal className="mb-20">
          <p className="overline mb-5">Gallery</p>
          <TextReveal
            as="h2"
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--cream)',
              lineHeight: 1.1,
              maxWidth: '16ch',
            }}
          >
            Each creation, a moment worth remembering.
          </TextReveal>
        </ScrollReveal>

        {/* Arc Carousel */}
        <div style={{ perspective: '1200px', perspectiveOrigin: '50% 50%' }}>
          <div
            style={{
              position: 'relative',
              height: isMobile ? `${Math.round(220 * 4 / 3)}px` : `${Math.round(280 * 4 / 3)}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transformStyle: 'preserve-3d',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
            onMouseDown={(e) => { dragStartX.current = e.clientX; setIsDragging(true) }}
            onMouseUp={(e) => {
              if (!isDragging) return
              const diff = e.clientX - dragStartX.current
              if (Math.abs(diff) > dragThreshold) go(diff < 0 ? 1 : -1)
              setIsDragging(false)
            }}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={(e) => { dragStartX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              const diff = e.changedTouches[0].clientX - dragStartX.current
              if (Math.abs(diff) > dragThreshold) go(diff < 0 ? 1 : -1)
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
                    borderRadius: '3px',
                    overflow: 'hidden',
                    cursor: isClickable ? 'pointer' : 'default',
                    transformStyle: 'preserve-3d',
                    boxShadow: isCenter ? '0 30px 80px rgba(0,0,0,0.6)' : 'none',
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
          <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  color: 'rgba(245,237,224,0.7)',
                  letterSpacing: '0.06em',
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '36px' }}>
          {/* Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                onClick={() => go(dir)}
                aria-label={dir === -1 ? 'Previous photo' : 'Next photo'}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(201,169,110,0.3)',
                  background: 'transparent',
                  color: 'rgba(245,237,224,0.6)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.25s, color 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--caramel)'
                  e.currentTarget.style.color = 'var(--caramel)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'
                  e.currentTarget.style.color = 'rgba(245,237,224,0.6)'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  {dir === -1
                    ? <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    : <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  }
                </svg>
              </button>
            ))}
          </div>

          {/* Progress bar — thin gold slider */}
          <div
            style={{
              width: '200px',
              height: '1px',
              background: 'rgba(245,237,224,0.12)',
              position: 'relative',
              borderRadius: '9999px',
              overflow: 'hidden',
            }}
            role="progressbar"
            aria-valuenow={activeIndex + 1}
            aria-valuemin={1}
            aria-valuemax={slides.length}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: `${((activeIndex + 1) / slides.length) * 100}%`,
                background: 'var(--caramel)',
                borderRadius: '9999px',
                transition: 'width 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
