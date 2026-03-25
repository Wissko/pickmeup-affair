import FadeUp from './FadeUp';

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="section-over-bg py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <FadeUp>
          <p
            className="font-sans text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--caramel)' }}
          >
            Workshops
          </p>
          <h2
            className="font-serif font-light italic caramel-line-center"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: 'var(--cream)',
              lineHeight: 1.2,
            }}
          >
            Join our Tiramisu
            <br />Making Class
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div
            className="mt-10 grid md:grid-cols-3 gap-8 text-left"
          >
            {[
              {
                icon: '📍',
                heading: 'Location',
                text: 'Sauce Bistro, 50 Frasers Road, Ashgrove, Brisbane — a beautiful heritage space perfect for intimate culinary experiences.',
              },
              {
                icon: '⏱️',
                heading: 'What to Expect',
                text: 'A 2-hour hands-on class where you\'ll master layering, whipping and finishing your own tiramisu to take home and share.',
              },
              {
                icon: '🍷',
                heading: 'Perfect For',
                text: 'Date nights, birthdays, friend catch-ups, and anyone passionate about Italian desserts. No experience needed — just appetite.',
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="p-6"
                style={{ border: '1px solid rgba(201,146,90,0.15)' }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3
                  className="font-serif text-xl mb-3"
                  style={{ color: 'var(--caramel)' }}
                >
                  {item.heading}
                </h3>
                <p
                  className="font-sans font-light leading-relaxed"
                  style={{ color: 'rgba(245,237,224,0.7)', fontSize: '0.95rem' }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="mt-14">
            <p
              className="font-sans font-light mb-8 text-lg"
              style={{ color: 'rgba(245,237,224,0.7)' }}
            >
              Spots are limited. Reserve yours today.
            </p>
            <a
              href="https://www.sevenrooms.com/experiences/saucebistro/valentine-s-tiramisu-making-class-at-sauce-bistro-4812461442121728"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Spot on SevenRooms
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
