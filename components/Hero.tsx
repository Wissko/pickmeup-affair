'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen"
      style={{ zIndex: 1 }}
    >
      {/* Gradient overlay on top of fixed bg */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="overline mb-8"
        >
          Brisbane · Artisan Tiramisu
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light italic"
          style={{
            fontSize: 'clamp(70px, 22vw, 130px)',
            lineHeight: 0.95,
            color: 'var(--cream)',
            marginBottom: '2rem',
            letterSpacing: '-0.01em',
          }}
        >
          Pick Me Up
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-sans font-light"
          style={{
            fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
            color: 'rgba(245,237,224,0.55)',
            letterSpacing: '0.12em',
            marginBottom: '3rem',
          }}
        >
          Handcrafted with intention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://www.sevenrooms.com/experiences/saucebistro/valentine-s-tiramisu-making-class-at-sauce-bistro-4812461442121728"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Workshop
          </a>
          <a href="#experiences" className="btn-outline">
            Discover
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, var(--caramel), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
