import FadeUp from './FadeUp';

const cards = [
  {
    num: '01',
    title: 'Pop-ups & Events',
    desc: 'We bring the tiramisu bar to your event — an experience your guests will remember.',
    cta: 'Enquire',
    href: '#contact',
  },
  {
    num: '02',
    title: 'Custom Creations',
    desc: 'Bespoke tiramisu designed around your story — personalised, hand-finished, elegant.',
    cta: 'Order Custom',
    href: '#contact',
  },
  {
    num: '03',
    title: 'Workshops',
    desc: 'Learn the art of tiramisu in an intimate, hands-on session. No experience required.',
    cta: 'Book a Class',
    href: '#workshops',
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="section-transparent"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="mb-20">
          <p className="overline mb-5">What We Do</p>
          <h2
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--cream)',
              lineHeight: 1.1,
              maxWidth: '14ch',
            }}
          >
            Three ways to experience tiramisu.
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-px" style={{ borderTop: '1px solid rgba(201,169,110,0.12)' }}>
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 0.1}>
              <div
                className="experience-card flex flex-col h-full"
                style={{ padding: '48px 40px 48px' }}
              >
                <span
                  className="font-serif italic"
                  style={{ fontSize: '3rem', color: 'rgba(201,169,110,0.18)', lineHeight: 1, marginBottom: '2rem', display: 'block' }}
                >
                  {card.num}
                </span>
                <h3
                  className="font-serif font-light"
                  style={{
                    fontSize: '1.7rem',
                    color: 'var(--cream)',
                    marginBottom: '1rem',
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-sans font-light leading-relaxed flex-1"
                  style={{ color: 'rgba(245,237,224,0.55)', fontSize: '0.9rem', lineHeight: 1.8 }}
                >
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  className="btn-outline-caramel mt-10 self-start"
                >
                  {card.cta}
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
