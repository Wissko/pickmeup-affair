'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

const photos = [
  {
    src: '/images/events.jpg',
    alt: 'Tiramisu "Just Married" en boîte blanche — collection mariages',
    label: 'Just Married',
    tall: true,
  },
  {
    src: '/images/custom.jpg',
    alt: 'Tiramisu "Mary" verrine avec ruban rouge et cuillère dorée',
    label: 'Mary',
    tall: false,
  },
  {
    src: '/images/gift.jpg',
    alt: 'Tiramisu "Be Mine" boîte vitrée dorée — collection cadeaux premium',
    label: 'Be Mine',
    tall: false,
  },
  {
    src: '/images/craft.jpg',
    alt: 'Mains artisanes posant des cerises sur un tiramisu en coupe cocktail',
    label: 'Savoir-faire',
    tall: true,
  },
];

export default function Galerie() {
  return (
    <section
      id="galerie"
      className="section-padding bg-surface"
      aria-label="Galerie de créations"
    >
      <div className="container-site">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16">
          <FadeUp>
            <p className="accent-script mb-3 text-2xl text-caramel">
              Nos créations
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="heading-serif text-4xl text-cream sm:text-5xl lg:text-6xl">
              La <em className="italic text-caramel">Galerie</em>
            </h2>
          </FadeUp>
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid" role="list" aria-label="Photos de créations">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              role="listitem"
              className="masonry-item group relative overflow-hidden bg-bg/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: 'easeOut' }}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  photo.tall
                    ? 'aspect-[3/4]'
                    : 'aspect-square'
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={80}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <p className="heading-serif p-4 text-xl text-cream sm:p-5 sm:text-2xl">
                    {photo.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <FadeUp delay={0.2} className="mt-12 text-center sm:mt-16">
          <a
            href="https://www.instagram.com/pickmeup.affair"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-3"
            aria-label="Voir plus sur Instagram @pickmeup.affair (ouvre dans un nouvel onglet)"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Voir plus sur Instagram
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
