import FadeUp from './FadeUp';

const cards = [
  {
    icon: '🎉',
    title: 'Pop-ups & Events',
    desc: 'We bring the tiramisu bar to your event — weddings, corporate gatherings, markets, and private parties. An experience your guests will talk about long after the last spoonful.',
    cta: 'Enquire',
    href: '#contact',
  },
  {
    icon: '🎁',
    title: 'Custom Creations',
    desc: 'Bespoke tiramisu designed around your story — personalised with names, ribbons, and hand-finished details. The perfect gift that blends elegance with indulgence.',
    cta: 'Order Custom',
    href: '#contact',
  },
  {
    icon: '👩‍🍳',
    title: 'Tiramisu Workshops',
    desc: 'Learn the art of tiramisu making in an intimate, hands-on session at Sauce Bistro. Perfect for date nights, birthdays, or anyone who wants to master the classic Italian dessert.',
    cta: 'Book a Class',
    href: '#workshops',
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="section-transparent py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="text-center mb-16">
          <p
            className="font-sans text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--caramel)' }}
          >
            What We Do
          </p>
          <h2
            className="font-serif font-light italic caramel-line-center"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: 'var(--cream)',
              lineHeight: 1.2,
            }}
          >
            Tiramisu Experiences
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 0.15}>
              <div className="experience-card p-8 lg:p-10 flex flex-col h-full">
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3
                  className="font-serif font-medium"
                  style={{
                    fontSize: '1.6rem',
                    color: 'var(--cream)',
                    marginBottom: '1rem',
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-sans font-light leading-relaxed flex-1"
                  style={{ color: 'rgba(245,237,224,0.7)', fontSize: '0.95rem' }}
                >
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  className="btn-outline-caramel mt-8 self-start"
                  style={{ fontSize: '0.75rem' }}
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
