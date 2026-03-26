import Image from 'next/image';
import FadeUp from './FadeUp';

const occasions = [
  'Weddings',
  'Birthdays',
  'Corporate',
  "Valentine's",
  'Baby Showers',
  'Private Parties',
];

export default function Occasions() {
  return (
    <section
      id="events"
      className="section-transparent"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="mb-20">
          <p className="overline mb-5">Occasions</p>
          <h2
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--cream)',
              lineHeight: 1.1,
              maxWidth: '16ch',
            }}
          >
            Every milestone deserves something beautiful.
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Image 1 */}
          <FadeUp delay={0.05}>
            <div className="img-hover-wrap relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
              <Image
                src="/images/events.jpg"
                alt="Tiramisu wedding gift box"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background: 'linear-gradient(to top, rgba(10,8,6,0.90) 0%, transparent 100%)',
                }}
              >
                <p className="font-serif italic" style={{ fontSize: '1.6rem', color: 'var(--cream)', lineHeight: 1.2 }}>
                  Weddings & Events
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Image 2 */}
          <FadeUp delay={0.15}>
            <div className="img-hover-wrap relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
              <Image
                src="/images/gift.jpg"
                alt="Luxury tiramisu gift box"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{
                  background: 'linear-gradient(to top, rgba(10,8,6,0.90) 0%, transparent 100%)',
                }}
              >
                <p className="font-serif italic" style={{ fontSize: '1.6rem', color: 'var(--cream)', lineHeight: 1.2 }}>
                  Gifts & Custom Orders
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Occasion tags — minimal */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {occasions.map((o) => (
              <span
                key={o}
                className="font-sans font-light text-xs uppercase tracking-widest px-5 py-3"
                style={{
                  border: '1px solid rgba(201,169,110,0.18)',
                  color: 'rgba(245,237,224,0.55)',
                  letterSpacing: '0.14em',
                }}
              >
                {o}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
