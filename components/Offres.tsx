'use client';

import Link from 'next/link';
import FadeUp from './FadeUp';

const offers = [
  {
    icon: '🎉',
    title: 'Événements & Pop-ups',
    description:
      'Tiramisu en live lors de vos événements. Mariages, lancements de marque, soirées corporate — une expérience immersive qui éblouit vos invités.',
    cta: 'En savoir plus',
    href: '#contact',
    ariaLabel: 'Contacter pour événements et pop-ups',
  },
  {
    icon: '🎂',
    title: 'Créations Sur-mesure',
    description:
      'Chaque verrine porte votre histoire. Message personnalisé, couleurs de marque, packaging premium — vos envies, notre savoir-faire.',
    cta: 'Commander',
    href: '#contact',
    ariaLabel: 'Commander une création sur-mesure',
    featured: true,
  },
  {
    icon: '👩‍🍳',
    title: 'Ateliers Tiramisu',
    description:
      'Apprenez les secrets du tiramisu parfait. Des sessions intimes et conviviales pour maîtriser la recette et repartir avec votre création.',
    cta: 'Réserver',
    href: '#ateliers',
    ariaLabel: 'Réserver un atelier tiramisu',
  },
];

export default function Offres() {
  return (
    <section
      id="offres"
      className="section-padding bg-bg"
      aria-label="Nos offres"
    >
      <div className="container-site">
        {/* Header */}
        <div className="mb-16 text-center sm:mb-20">
          <FadeUp>
            <p className="accent-script mb-3 text-2xl text-caramel">
              Ce que nous créons
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="heading-serif mx-auto max-w-xl text-4xl text-cream sm:text-5xl lg:text-6xl">
              Nos <em className="italic text-caramel">Offres</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mx-auto mt-6 divider-caramel" aria-hidden="true" />
          </FadeUp>
        </div>

        {/* Cards */}
        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {offers.map((offer, i) => (
            <FadeUp key={offer.title} delay={0.1 * i} as="li">
              <article
                className={`group relative flex h-full flex-col border transition-all duration-500 hover:border-caramel/60 ${
                  offer.featured
                    ? 'border-caramel/50 bg-surface'
                    : 'border-caramel/20 bg-surface/50 hover:bg-surface'
                }`}
              >
                {offer.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-caramel px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-bg">
                      Populaire
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  {/* Icon */}
                  <div
                    className="mb-6 text-4xl"
                    role="img"
                    aria-label={offer.title}
                  >
                    {offer.icon}
                  </div>

                  {/* Content */}
                  <h3 className="heading-serif mb-4 text-2xl text-cream sm:text-3xl">
                    {offer.title}
                  </h3>
                  <p className="mb-8 flex-1 text-sm leading-relaxed text-text/60">
                    {offer.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={offer.href}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-caramel transition-all duration-200 hover:gap-4"
                    aria-label={offer.ariaLabel}
                  >
                    {offer.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`h-px w-0 bg-caramel transition-all duration-500 group-hover:w-full ${
                    offer.featured ? 'w-full' : ''
                  }`}
                  aria-hidden="true"
                />
              </article>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
