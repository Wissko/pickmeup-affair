import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

export default function Workshops() {
  return (
    <section
      id="workshops"
      style={{ position: 'relative', zIndex: 1, backgroundColor: '#0a0806' }}
    >
      <div className="workshops-split">
        {/* Left — full image */}
        <div className="img-hover-wrap relative overflow-hidden" style={{ minHeight: '600px' }}>
          <Image
            src="/images/craft.jpg"
            alt="Hands crafting tiramisu at a workshop"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, transparent 70%, #0f0c08 100%)',
            }}
          />
        </div>

        {/* Right — solid dark, text */}
        <div
          style={{
            backgroundColor: '#0f0c08',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 60px',
          }}
        >
          <ScrollReveal>
            <p className="overline mb-6">Workshops</p>
            <TextReveal
              as="h2"
              className="font-serif font-light italic caramel-line"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                color: 'var(--cream)',
                lineHeight: 1.1,
              }}
            >
              Make it yourself. Take it home.
            </TextReveal>
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
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-0 mt-14">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
