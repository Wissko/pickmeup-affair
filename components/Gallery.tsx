import Image from 'next/image';
import FadeUp from './FadeUp';

const images = [
  {
    src: '/images/events.jpg',
    alt: 'Tiramisu "Just Married" in white gift box',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/custom.jpg',
    alt: 'Custom tiramisu "Mary" verrine with red ribbon',
    aspect: 'aspect-square',
  },
  {
    src: '/images/gift.jpg',
    alt: 'Tiramisu "Be Mine" in gold glass box with jewellery',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/images/craft.jpg',
    alt: 'Hands placing cherries on tiramisu',
    aspect: 'aspect-square',
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-over-bg py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp className="text-center mb-16">
          <p
            className="font-sans text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--caramel)' }}
          >
            Gallery
          </p>
          <h2
            className="font-serif font-light italic caramel-line-center"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              color: 'var(--cream)',
              lineHeight: 1.2,
            }}
          >
            Made with Love
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="masonry-grid">
            {images.map((img, i) => (
              <div key={i} className="masonry-item">
                <div className={`relative ${img.aspect}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
