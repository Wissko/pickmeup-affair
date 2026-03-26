'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  { src: '/images/hero.jpg',   alt: 'The Signature tiramisu',           caption: 'The Signature' },
  { src: '/images/craft.jpg',  alt: 'Hands crafting tiramisu',          caption: 'The Craft' },
  { src: '/images/custom.jpg', alt: 'Custom tiramisu creation',         caption: 'Made for You' },
  { src: '/images/events.jpg', alt: 'Tiramisu for celebrations',        caption: 'Celebrations' },
  { src: '/images/gift.jpg',   alt: 'Tiramisu gift box',                caption: 'The Gift' },
  { src: '/images/can.jpg',    alt: 'Sweet layered tiramisu in a can',  caption: 'Sweet Layers' },
  { src: '/images/coeur.jpg',  alt: 'Tiramisu heart with love',         caption: 'With Love' },
  { src: '/images/raise.jpg',  alt: 'Raising a glass of tiramisu',     caption: 'Raise a Glass' },
  { src: '/images/spoon.jpg',  alt: 'The first bite of tiramisu',      caption: 'The First Bite' },
]

const ease = [0.76, 0, 0.24, 1] as const

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.95,
  }),
}

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (dir: number) => {
      setDirection(dir)
      setIndex((prev) => (prev + dir + slides.length) % slides.length)
    },
    []
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 4000)
    return () => clearInterval(id)
  }, [paused, go])

  const prev = (index - 1 + slides.length) % slides.length
  const next = (index + 1) % slides.length

  return (
    <section id="gallery" className="section-over-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Carousel */}
        <div
          className="relative select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Track */}
          <div
            className="flex items-stretch"
            style={{ gap: 0 }}
          >
            {/* Left peeking slide */}
            <div
              className="flex-shrink-0 cursor-pointer"
              style={{ width: '18%', overflow: 'hidden' }}
              onClick={() => go(-1)}
              aria-label="Previous photo"
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '125%',
                  overflow: 'hidden',
                  borderRadius: '4px 0 0 4px',
                  filter: 'blur(2px) brightness(0.55)',
                  transition: 'filter 0.4s ease',
                }}
              >
                <Image
                  src={slides[prev].src}
                  alt={slides[prev].alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'right center' }}
                  sizes="18vw"
                />
              </div>
            </div>

            {/* Center slide */}
            <div
              className="flex-shrink-0"
              style={{ width: '64%', position: 'relative', zIndex: 1 }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.7, ease }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: 'easeOut' } }}
                  style={{ width: '100%' }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingBottom: '125%',
                      overflow: 'hidden',
                      borderRadius: '4px',
                      boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
                    }}
                  >
                    <Image
                      src={slides[index].src}
                      alt={slides[index].alt}
                      fill
                      className="object-cover"
                      sizes="64vw"
                      priority
                    />

                    {/* Caption */}
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28, duration: 0.5, ease: 'easeOut' }}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '3rem 2rem 1.75rem',
                        background:
                          'linear-gradient(to top, rgba(13,11,9,0.88) 0%, transparent 100%)',
                        pointerEvents: 'none',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 300,
                          fontStyle: 'italic',
                          fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)',
                          color: 'rgba(245,237,224,0.92)',
                          letterSpacing: '0.03em',
                          textAlign: 'center',
                          margin: 0,
                        }}
                      >
                        {slides[index].caption}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right peeking slide */}
            <div
              className="flex-shrink-0 cursor-pointer"
              style={{ width: '18%', overflow: 'hidden' }}
              onClick={() => go(1)}
              aria-label="Next photo"
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '125%',
                  overflow: 'hidden',
                  borderRadius: '0 4px 4px 0',
                  filter: 'blur(2px) brightness(0.55)',
                  transition: 'filter 0.4s ease',
                }}
              >
                <Image
                  src={slides[next].src}
                  alt={slides[next].alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'left center' }}
                  sizes="18vw"
                />
              </div>
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            style={{
              position: 'absolute',
              left: 'calc(18% + 16px)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
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
              const el = e.currentTarget
              el.style.borderColor = 'rgba(201,146,90,0.9)'
              el.style.background = 'rgba(201,146,90,0.18)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(201,146,90,0.45)'
              el.style.background = 'rgba(13,11,9,0.6)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={() => go(1)}
            aria-label="Next"
            style={{
              position: 'absolute',
              right: 'calc(18% + 16px)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
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
              const el = e.currentTarget
              el.style.borderColor = 'rgba(201,146,90,0.9)'
              el.style.background = 'rgba(201,146,90,0.18)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(201,146,90,0.45)'
              el.style.background = 'rgba(13,11,9,0.6)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div
          className="flex items-center justify-center gap-2 mt-8"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                height: '8px',
                width: i === index ? '24px' : '8px',
                borderRadius: '9999px',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                background: i === index ? '#c9925a' : 'rgba(255,255,255,0.28)',
                transition: 'width 0.35s ease, background 0.35s ease',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
