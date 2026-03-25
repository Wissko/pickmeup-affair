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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.25em' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-sans text-xs md:text-sm uppercase mb-6"
          style={{ color: 'var(--caramel)', letterSpacing: '0.25em' }}
        >
          Brisbane · Est. 2024
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light italic"
          style={{
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            lineHeight: 1.05,
            color: 'var(--cream)',
            marginBottom: '1.5rem',
          }}
        >
          The Tiramisu
          <br />
          <span style={{ color: 'var(--caramel)' }}>Affair</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-sans font-light"
          style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)',
            color: 'rgba(245,237,224,0.8)',
            letterSpacing: '0.08em',
            marginBottom: '2.5rem',
          }}
        >
          Handcrafted Tiramisu Experiences · Brisbane
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
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
          <a href="#gallery" className="btn-outline">
            Our Creations
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-xs uppercase tracking-widest" style={{ color: 'rgba(245,237,224,0.4)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--caramel), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
