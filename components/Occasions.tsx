import Image from 'next/image';
import FadeUp from './FadeUp';

const occasions = [
  { label: 'Weddings', icon: '💍' },
  { label: 'Birthdays', icon: '🎂' },
  { label: 'Corporate', icon: '🤝' },
  { label: "Valentine's", icon: '❤️' },
  { label: 'Baby Showers', icon: '🌸' },
  { label: 'Celebrations', icon: '✨' },
];

export default function Occasions() {
  return (
    <section
      id="events"
      className="section-transparent py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="text-center mb-16">
          <p
            className="font-sans text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--caramel)' }}
          >
            Occasions
          </p>
          <h2
            className="font-serif font-light italic caramel-line-center"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: 'var(--cream)',
              lineHeight: 1.2,
            }}
          >
            For every occasion
          </h2>
          <p
            className="font-sans font-light mt-6 max-w-xl mx-auto"
            style={{ color: 'rgba(245,237,224,0.65)', lineHeight: 1.8, fontSize: '1rem' }}
          >
            Every milestone deserves something beautiful. We craft tiramisu
            experiences tailored to your moment — from intimate celebrations
            to grand affairs.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Image 1 */}
          <FadeUp delay={0.1}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '4px' }}>
              <Image
                src="/images/events.jpg"
                alt='Tiramisu "Just Married" wedding gift box'
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: 'linear-gradient(to top, rgba(13,11,9,0.85) 0%, transparent 100%)',
                }}
              >
                <p className="font-serif italic text-2xl" style={{ color: 'var(--cream)' }}>
                  Weddings & Events
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Image 2 */}
          <FadeUp delay={0.2}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '4px' }}>
              <Image
                src="/images/gift.jpg"
                alt='Tiramisu "Be Mine" luxury gift box'
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: 'linear-gradient(to top, rgba(13,11,9,0.85) 0%, transparent 100%)',
                }}
              >
                <p className="font-serif italic text-2xl" style={{ color: 'var(--cream)' }}>
                  Gifts & Custom Orders
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Occasion pills */}
        <FadeUp delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4">
            {occasions.map((o) => (
              <div
                key={o.label}
                className="flex items-center gap-2 px-5 py-3"
                style={{
                  border: '1px solid rgba(201,146,90,0.3)',
                  color: 'rgba(245,237,224,0.8)',
                  fontSize: '0.9rem',
                }}
              >
                <span>{o.icon}</span>
                <span className="font-sans">{o.label}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
