'use client';

import FadeUp from './FadeUp';

const BOOKING_URL =
  'https://www.sevenrooms.com/experiences/saucebistro/valentine-s-tiramisu-making-class-at-sauce-bistro-4812461442121728';

const highlights = [
  { value: '2h', label: 'de cours' },
  { value: '6', label: 'pers. max' },
  { value: '1', label: 'verrine à emporter' },
];

export default function Ateliers() {
  return (
    <section
      id="ateliers"
      className="section-padding relative overflow-hidden bg-surface"
      aria-label="Ateliers tiramisu"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 50%, #c9925a 0%, transparent 60%)',
        }}
      />

      <div className="container-site relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Header */}
          <FadeUp>
            <p className="accent-script mb-3 text-2xl text-caramel">
              Apprenez, créez, dégustez
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="heading-serif mb-6 text-4xl text-cream sm:text-5xl lg:text-6xl">
              Ateliers{' '}
              <em className="italic text-caramel">Tiramisu</em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mx-auto mb-8 divider-caramel" aria-hidden="true" />
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="mb-4 text-base leading-relaxed text-text/70">
              Rejoignez une session intime pour découvrir les secrets du tiramisu
              parfait. Dans une ambiance chaleureuse et conviviale, vous apprendrez
              à maîtriser chaque étape — du mascarpone au cacao — et repartirez
              avec votre propre création.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mb-12 text-base leading-relaxed text-text/70">
              Idéal pour les passionnés de pâtisserie, les sorties entre amis,
              ou les occasions spéciales. Chaque atelier est une expérience
              unique, pensée pour les amoureux du bon et du beau.
            </p>
          </FadeUp>

          {/* Highlights */}
          <FadeUp delay={0.35}>
            <dl
              className="mb-12 grid grid-cols-3 gap-4 border border-caramel/20 bg-bg/50 p-6 sm:p-8"
              aria-label="Informations sur l'atelier"
            >
              {highlights.map((h) => (
                <div key={h.label} className="text-center">
                  <dt className="heading-serif text-3xl text-caramel sm:text-4xl">
                    {h.value}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-text/40">
                    {h.label}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.4}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              aria-label="Réserver votre atelier tiramisu sur SevenRooms (ouvre dans un nouvel onglet)"
            >
              <span>Réserver votre atelier</span>
              <svg
                aria-hidden="true"
                className="h-3 w-3"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M1 11L11 1M11 1H4M11 1V8" />
              </svg>
            </a>
          </FadeUp>

          <FadeUp delay={0.45}>
            <p className="mt-5 text-xs text-text/30">
              Réservation via SevenRooms · Paiement sécurisé en ligne
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
