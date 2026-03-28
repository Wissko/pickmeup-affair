import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const photoGrid = [
  {
    src: '/images/events.jpg',
    alt: 'Just Married tiramisu box',
    label: 'Weddings',
    span: 'wide', // spans 2 cols on desktop
  },
  {
    src: '/images/gift.jpg',
    alt: 'Be Mine luxury tiramisu gift box',
    label: 'Gifting',
    span: 'normal',
  },
  {
    src: '/images/custom.jpg',
    alt: 'Personalised tiramisu pot with candles',
    label: 'Custom Orders',
    span: 'normal',
  },
  {
    src: '/images/raise.jpg',
    alt: 'Corporate tiramisu with branded logo',
    label: 'Corporate',
    span: 'normal',
  },
  {
    src: '/images/can.jpg',
    alt: 'Thai Tea tiramisu in canettes',
    label: 'Pop-ups',
    span: 'normal',
  },
]

export default function Occasions() {
  return (
    <section
      id="events"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 9rem)',
        paddingBottom: 'clamp(5rem, 10vw, 9rem)',
        backgroundColor: '#111009',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <ScrollReveal style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <p className="overline mb-5" style={{ color: 'rgba(201,169,110,0.65)' }}>
            Occasions
          </p>
          <TextReveal
            as="h2"
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              color: 'var(--cream)',
              lineHeight: 1.1,
              maxWidth: '18ch',
            }}
          >
            Every milestone deserves something beautiful.
          </TextReveal>
        </ScrollReveal>

        {/* Photo grid — editorial, no equal-size cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '10px',
          }}
        >
          {/* Wide feature — Weddings */}
          <ScrollReveal
            delay={0}
            style={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}
          >
            <div
              className="img-hover-wrap"
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                overflow: 'hidden',
                borderRadius: '2px',
              }}
            >
              <Image
                src={photoGrid[0].src}
                alt={photoGrid[0].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,6,4,0.85) 0%, transparent 55%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 1 }}>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '0.55rem', letterSpacing: '0.26em',
                    textTransform: 'uppercase', color: 'var(--caramel)',
                    marginBottom: '0.35rem', fontWeight: 400,
                  }}
                >
                  {photoGrid[0].label}
                </p>
                <p
                  className="font-serif italic font-light"
                  style={{ fontSize: '1.5rem', color: 'var(--cream)', lineHeight: 1.1 }}
                >
                  Just Married.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Gifting — tall right */}
          <ScrollReveal
            delay={0.06}
            style={{ gridColumn: '3 / 4', gridRow: '1 / 3' }}
          >
            <div
              className="img-hover-wrap"
              style={{
                position: 'relative',
                height: '100%',
                minHeight: '300px',
                overflow: 'hidden',
                borderRadius: '2px',
              }}
            >
              <Image
                src={photoGrid[1].src}
                alt={photoGrid[1].alt}
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
                sizes="25vw"
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,6,4,0.85) 0%, transparent 55%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 1 }}>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '0.55rem', letterSpacing: '0.26em',
                    textTransform: 'uppercase', color: 'var(--caramel)',
                    marginBottom: '0.35rem', fontWeight: 400,
                  }}
                >
                  {photoGrid[1].label}
                </p>
                <p
                  className="font-serif italic font-light"
                  style={{ fontSize: '1.3rem', color: 'var(--cream)', lineHeight: 1.1 }}
                >
                  Be Mine.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Corporate — tall far right */}
          <ScrollReveal
            delay={0.1}
            style={{ gridColumn: '4 / 5', gridRow: '1 / 3' }}
          >
            <div
              className="img-hover-wrap"
              style={{
                position: 'relative',
                height: '100%',
                minHeight: '300px',
                overflow: 'hidden',
                borderRadius: '2px',
              }}
            >
              <Image
                src={photoGrid[3].src}
                alt={photoGrid[3].alt}
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
                sizes="25vw"
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,6,4,0.85) 0%, transparent 55%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 1 }}>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '0.55rem', letterSpacing: '0.26em',
                    textTransform: 'uppercase', color: 'var(--caramel)',
                    marginBottom: '0.35rem', fontWeight: 400,
                  }}
                >
                  {photoGrid[3].label}
                </p>
                <p
                  className="font-serif italic font-light"
                  style={{ fontSize: '1.3rem', color: 'var(--cream)', lineHeight: 1.1 }}
                >
                  Raise.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Custom orders */}
          <ScrollReveal
            delay={0.04}
            style={{ gridColumn: '1 / 2', gridRow: '2 / 3' }}
          >
            <div
              className="img-hover-wrap"
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: '2px',
              }}
            >
              <Image
                src={photoGrid[2].src}
                alt={photoGrid[2].alt}
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
                sizes="25vw"
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,6,4,0.85) 0%, transparent 55%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', zIndex: 1 }}>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '0.5rem', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: 'var(--caramel)',
                    marginBottom: '0.3rem', fontWeight: 400,
                  }}
                >
                  {photoGrid[2].label}
                </p>
                <p
                  className="font-serif italic font-light"
                  style={{ fontSize: '1.1rem', color: 'var(--cream)', lineHeight: 1.1 }}
                >
                  Made for you.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Pop-ups */}
          <ScrollReveal
            delay={0.08}
            style={{ gridColumn: '2 / 3', gridRow: '2 / 3' }}
          >
            <div
              className="img-hover-wrap"
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: '2px',
              }}
            >
              <Image
                src={photoGrid[4].src}
                alt={photoGrid[4].alt}
                fill
                className="object-cover"
                style={{ objectPosition: 'center top' }}
                sizes="25vw"
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,6,4,0.85) 0%, transparent 55%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', zIndex: 1 }}>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '0.5rem', letterSpacing: '0.24em',
                    textTransform: 'uppercase', color: 'var(--caramel)',
                    marginBottom: '0.3rem', fontWeight: 400,
                  }}
                >
                  {photoGrid[4].label}
                </p>
                <p
                  className="font-serif italic font-light"
                  style={{ fontSize: '1.1rem', color: 'var(--cream)', lineHeight: 1.1 }}
                >
                  Find us at the market.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center' }}>
          <a href="#contact" className="btn-outline-caramel">
            Enquire About Your Occasion
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
