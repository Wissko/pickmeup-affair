'use client';

import Image from 'next/image';
import FadeUp from './FadeUp';

const occasions = [
  {
    icon: '💍',
    title: 'Mariages',
    description:
      'Le dessert le plus attendu de votre grand jour. Tiramisu individuels, tower, ou bar à tiramisu en live — chaque option est une déclaration.',
  },
  {
    icon: '🎂',
    title: 'Anniversaires',
    description:
      'Célébrez comme il se doit. Verrines personnalisées avec prénom, âge, ou message — un cadeau qui se mange avec émotion.',
  },
  {
    icon: '💝',
    title: 'Saint-Valentin & Cadeaux',
    description:
      'Offrez plus qu\'un dessert. Des boîtes cadeaux raffinées, présentations bijouterie, pour un "je t\'aime" comestible et mémorable.',
  },
  {
    icon: '🏢',
    title: 'Corporate & Collaborations',
    description:
      'Événements d\'entreprise, lancements produit, gifting client — le tiramisu customisé à votre identité de marque, prêt à impressionner.',
  },
];

export default function Occasions() {
  return (
    <section
      id="occasions"
      className="section-padding bg-bg"
      aria-label="Occasions et événements"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: images */}
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <FadeUp className="relative flex-1 overflow-hidden sm:flex-none sm:w-1/2 lg:w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/events.jpg"
                  alt="Tiramisu Just Married en boîte blanche — parfait pour les mariages"
                  fill
                  quality={80}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="heading-serif text-xl text-cream">
                    Mariages & Événements
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="flex-1 sm:flex-none sm:w-1/2 lg:w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/gift.jpg"
                  alt='Tiramisu "Be Mine" boîte vitrée dorée — cadeaux premium'
                  fill
                  quality={80}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="heading-serif text-xl text-cream">
                    Cadeaux Premium
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: occasions list */}
          <div className="flex flex-col justify-center">
            <FadeUp>
              <p className="accent-script mb-3 text-2xl text-caramel">
                Pour chaque moment
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="heading-serif mb-8 text-4xl text-cream sm:text-5xl lg:text-6xl">
                Toutes vos{' '}
                <em className="italic text-caramel">Occasions</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="divider-caramel mb-10" aria-hidden="true" />
            </FadeUp>

            <ul className="space-y-8" role="list">
              {occasions.map((occasion, i) => (
                <FadeUp key={occasion.title} delay={0.1 + 0.08 * i} as="li">
                  <article className="flex gap-5">
                    <div
                      className="mt-1 shrink-0 text-2xl"
                      role="img"
                      aria-label={occasion.title}
                    >
                      {occasion.icon}
                    </div>
                    <div>
                      <h3 className="heading-serif mb-2 text-xl text-cream sm:text-2xl">
                        {occasion.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text/60">
                        {occasion.description}
                      </p>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
