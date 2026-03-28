import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#f5ede0',
      }}
    >
      {/* Split layout — full bleed, no padding container */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))' }}>

        {/* Image — coeur.jpg: flat lay 3 tiramisus, heart, branded pochon */}
        <div style={{ position: 'relative', minHeight: 'clamp(380px, 52vw, 680px)', overflow: 'hidden' }}>
          <Image
            src="/images/coeur.jpg"
            alt="Trois tiramisus avec un coeur en sucre glace et pochon Pick Me Up"
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle right-side fade into cream */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 55%, #f5ede0 100%)',
            }}
          />
        </div>

        {/* Text */}
        <ScrollReveal>
          <div
            style={{
              backgroundColor: '#f5ede0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 'clamp(3rem, 7vw, 6rem) clamp(2rem, 6vw, 5rem)',
            }}
          >
            <p
              className="overline mb-6"
              style={{ color: 'rgba(10,8,6,0.38)' }}
            >
              Our Story
            </p>

            <TextReveal
              as="h2"
              className="font-serif font-light italic"
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                lineHeight: 1.1,
                color: '#1a1208',
                letterSpacing: '-0.01em',
                marginBottom: '0.5rem',
              }}
            >
              Every spoonful,
            </TextReveal>
            <TextReveal
              as="h2"
              className="font-serif font-light italic caramel-line"
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                lineHeight: 1.1,
                color: '#c9a96e',
                letterSpacing: '-0.01em',
              }}
            >
              a small love affair.
            </TextReveal>

            <p
              className="font-sans font-light"
              style={{
                color: 'rgba(26,18,8,0.6)',
                lineHeight: 1.9,
                fontSize: '0.95rem',
                maxWidth: '40ch',
                marginTop: '2.5rem',
              }}
            >
              Pick Me Up brings tiramisu to life through pop-ups at Brisbane's
              best markets, bespoke event creations, and intimate making workshops.
              Handcrafted with real ingredients. Finished with intention.
            </p>

            <p
              className="font-sans font-light"
              style={{
                color: 'rgba(26,18,8,0.3)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '2rem',
              }}
            >
              Sauce Bistro · Ashgrove · Brisbane
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
