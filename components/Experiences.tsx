import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const entries = [
  {
    num: '01',
    title: 'Pop-ups & Events',
    desc: 'We bring the tiramisu bar to your event. A presence your guests will carry home.',
    cta: 'Enquire',
    href: '#contact',
    image: '/images/events.jpg',
    imageAlt: 'Tiramisu at an event',
    imageLeft: true,
  },
  {
    num: '02',
    title: 'Custom Creations',
    desc: 'Bespoke tiramisu designed around your story. Personalised, hand-finished, quietly elegant.',
    cta: 'Order Custom',
    href: '#contact',
    image: '/images/custom.jpg',
    imageAlt: 'Custom tiramisu creation',
    imageLeft: false,
  },
  {
    num: '03',
    title: 'Workshops',
    desc: 'Learn the art of tiramisu in an intimate, hands-on session. No experience required.',
    cta: 'Book a Class',
    href: '#workshops',
    image: '/images/craft.jpg',
    imageAlt: 'Hands crafting tiramisu',
    imageLeft: true,
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        backgroundColor: '#0a0806',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal className="mb-20">
          <p className="overline mb-5">What We Do</p>
          <TextReveal
            as="h2"
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--cream)',
              lineHeight: 1.1,
              maxWidth: '14ch',
            }}
          >
            Three ways to experience tiramisu.
          </TextReveal>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {entries.map((entry, i) => (
            <ScrollReveal key={entry.title} delay={i * 0.05}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  minHeight: '480px',
                  borderTop: '1px solid rgba(201,169,110,0.08)',
                }}
                className="experiences-row"
              >
                {/* Image side */}
                <div
                  style={{
                    order: entry.imageLeft ? 0 : 1,
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '420px',
                  }}
                  className="img-hover-wrap"
                >
                  <Image
                    src={entry.image}
                    alt={entry.imageAlt}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  {/* Dark overlay with caramel gradient */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: entry.imageLeft
                        ? 'linear-gradient(to right, transparent 60%, #0a0806 100%)'
                        : 'linear-gradient(to left, transparent 60%, #0a0806 100%)',
                    }}
                  />
                </div>

                {/* Text side */}
                <div
                  style={{
                    order: entry.imageLeft ? 1 : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '60px 48px',
                    backgroundColor: '#0a0806',
                  }}
                >
                  <span
                    className="font-serif italic"
                    style={{
                      fontSize: '3rem',
                      color: 'rgba(201,169,110,0.15)',
                      lineHeight: 1,
                      marginBottom: '1.5rem',
                      display: 'block',
                    }}
                  >
                    {entry.num}
                  </span>
                  <h3
                    className="font-serif font-light"
                    style={{
                      fontSize: '2rem',
                      color: 'var(--cream)',
                      marginBottom: '1rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {entry.title}
                  </h3>
                  <p
                    className="font-sans font-light"
                    style={{
                      color: 'rgba(245,237,224,0.5)',
                      fontSize: '0.9rem',
                      lineHeight: 1.8,
                      maxWidth: '36ch',
                      marginBottom: '2.5rem',
                    }}
                  >
                    {entry.desc}
                  </p>
                  <a href={entry.href} className="btn-outline-caramel self-start">
                    {entry.cta}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
