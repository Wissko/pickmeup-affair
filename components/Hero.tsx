'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden pb-20 sm:pb-28"
      aria-label="Bienvenue chez Pickmeup Affair"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Tiramisu artisanal en coupe cocktail — Pickmeup Affair"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 px-5 sm:px-8 lg:px-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="accent-script mb-4 text-2xl text-caramel sm:text-3xl"
          >
            Artisanal &amp; Premium
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
            className="heading-serif mb-6 text-5xl text-cream sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Handcrafted{' '}
            <em className="not-italic text-caramel">Tiramisu</em>{' '}
            Experiences
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
            className="mb-10 text-base font-light tracking-[0.12em] text-text/60 uppercase sm:text-sm"
          >
            Pop-ups &nbsp;·&nbsp; Events &nbsp;·&nbsp; Collaborations
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="#experience" className="btn-primary">
              Découvrir
            </Link>
            <Link href="#ateliers" className="btn-ghost">
              Réserver un atelier
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-text/30">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-6 w-px bg-gradient-to-b from-caramel/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
