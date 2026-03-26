import FadeUp from './FadeUp';

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="section-over-bg"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — heading */}
          <FadeUp>
            <p className="overline mb-6">Workshops</p>
            <h2
              className="font-serif font-light italic caramel-line"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                color: 'var(--cream)',
                lineHeight: 1.1,
              }}
            >
              Make it yourself.
              <br />Take it home.
            </h2>
            <p
              className="font-sans font-light mt-10"
              style={{
                color: 'rgba(245,237,224,0.55)',
                lineHeight: 1.9,
                fontSize: '1rem',
                maxWidth: '40ch',
              }}
            >
              A 2-hour hands-on class at Sauce Bistro, Ashgrove.
              You master the layers. You bring it home.
            </p>
            <div className="mt-12">
              <a
                href="https://www.sevenrooms.com/experiences/saucebistro/valentine-s-tiramisu-making-class-at-sauce-bistro-4812461442121728"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Reserve Your Spot
              </a>
            </div>
          </FadeUp>

          {/* Right — details */}
          <FadeUp delay={0.15}>
            <div
              className="space-y-0"
              style={{ marginTop: '3rem' }}
            >
              {[
                {
                  heading: 'Location',
                  text: 'Sauce Bistro · 50 Frasers Road, Ashgrove, Brisbane',
                },
                {
                  heading: 'Duration',
                  text: '2 hours hands-on. Yours to take home.',
                },
                {
                  heading: 'Perfect for',
                  text: 'Date nights · birthdays · friend catch-ups. No experience needed.',
                },
              ].map((item, i, arr) => (
                <div
                  key={item.heading}
                  style={{
                    padding: '28px 0',
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(245,237,224,0.07)' : 'none',
                  }}
                >
                  <p className="overline mb-3">{item.heading}</p>
                  <p
                    className="font-sans font-light"
                    style={{ color: 'rgba(245,237,224,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
