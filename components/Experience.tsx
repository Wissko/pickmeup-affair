'use client';

import Image from 'next/image';
import FadeUp from './FadeUp';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-surface"
      aria-label="L'Expérience Pickmeup Affair"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <FadeUp>
              <p className="accent-script mb-3 text-2xl text-caramel">
                L'Expérience
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="heading-serif mb-8 text-4xl text-cream sm:text-5xl lg:text-6xl">
                Chaque tiramisu est{' '}
                <em className="italic text-caramel">une histoire</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="divider-caramel mb-8" aria-hidden="true" />
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="mb-6 text-base leading-relaxed text-text/70">
                Façonné à la main, pensé pour l&apos;instant. Chez Pickmeup
                Affair, le tiramisu n&apos;est pas un simple dessert — c&apos;est
                une expérience sensorielle conçue pour marquer les esprits et
                sublimer vos moments les plus précieux.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mb-10 text-base leading-relaxed text-text/70">
                Du choix des ingrédients à la finition de chaque verrine, chaque
                détail est orchestré avec soin. Des créations qui racontent votre
                histoire, portent votre nom, et laissent un souvenir impérissable.
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <dl className="grid grid-cols-3 gap-4 border-t border-caramel/20 pt-8">
                {[
                  { value: '100%', label: 'Artisanal' },
                  { value: 'Sur-mesure', label: 'Personnalisation' },
                  { value: '✦', label: 'Premium' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <dt className="heading-serif text-2xl text-caramel sm:text-3xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-[11px] uppercase tracking-[0.15em] text-text/40">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>

          {/* Image column */}
          <FadeUp delay={0.15} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/craft.jpg"
                alt="Mains artisanes posant des cerises sur un tiramisu en coupe"
                fill
                quality={85}
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative frame */}
              <div
                className="pointer-events-none absolute inset-0 border border-caramel/20"
                aria-hidden="true"
              />
              {/* Corner accent */}
              <div
                className="pointer-events-none absolute bottom-4 right-4 h-16 w-16 border-b border-r border-caramel/40"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute left-4 top-4 h-16 w-16 border-l border-t border-caramel/40"
                aria-hidden="true"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
