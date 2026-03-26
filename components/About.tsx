import Image from 'next/image';
import FadeUp from './FadeUp';

export default function About() {
  return (
    <section
      id="about"
      className="section-over-bg py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <FadeUp>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--caramel)' }}
            >
              Our Story
            </p>
            <h2
              className="font-serif font-light italic caramel-line"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.15,
                color: 'var(--cream)',
                marginBottom: '1rem',
              }}
            >
              Each tiramisu
              <br />tells a story.
            </h2>
            <div className="mt-8 space-y-5 font-sans font-light" style={{ color: 'rgba(245,237,224,0.75)', lineHeight: 1.8, fontSize: '1rem' }}>
              <p>
                The Tiramisu Affair was born from a deep love of Italian craftsmanship
                and the belief that food is the most intimate form of storytelling.
                Each creation is handcrafted with intention — layered with care,
                finished with ceremony.
              </p>
              <p>
                We bring tiramisu to life through immersive pop-ups, bespoke event
                creations, and intimate making workshops. Whether it's a wedding
                table centrepiece or a Tuesday afternoon class with friends, every
                encounter with tiramisu should feel like a small love affair.
              </p>
              <p>
                Based at Sauce Bistro in Ashgrove, Brisbane — we'd love to craft
                something unforgettable with you.
              </p>
            </div>
          </FadeUp>

          {/* Image */}
          <FadeUp delay={0.2}>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/5', borderRadius: '4px' }}
            >
              <Image
                src="/images/craft.jpg"
                alt="Hands crafting tiramisu with cherries"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(201,146,90,0.12) 0%, transparent 60%)',
                }}
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
