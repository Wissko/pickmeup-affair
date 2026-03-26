import Image from 'next/image';
import FadeUp from './FadeUp';

export default function About() {
  return (
    <section
      id="about"
      className="section-over-bg"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <FadeUp>
            <p className="overline mb-6">Our Story</p>
            <h2
              className="font-serif font-light italic caramel-line"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                lineHeight: 1.1,
                color: 'var(--cream)',
              }}
            >
              Born from love.
              <br />Crafted with care.
            </h2>
            <p
              className="font-sans font-light mt-10"
              style={{
                color: 'rgba(245,237,224,0.6)',
                lineHeight: 1.9,
                fontSize: '1rem',
                maxWidth: '42ch',
              }}
            >
              Pick Me Up brings tiramisu to life through immersive pop-ups,
              bespoke event creations, and intimate making workshops.
              Every encounter should feel like a small love affair.
            </p>
            <p
              className="font-sans font-light mt-5"
              style={{
                color: 'rgba(245,237,224,0.38)',
                fontSize: '0.85rem',
                letterSpacing: '0.06em',
              }}
            >
              Sauce Bistro, Ashgrove · Brisbane
            </p>
          </FadeUp>

          {/* Image */}
          <FadeUp delay={0.2}>
            <div className="img-hover-wrap relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
              <Image
                src="/images/spoon.jpg"
                alt="Artisan tiramisu, close up"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,169,110,0.07) 0%, transparent 60%)',
                }}
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
