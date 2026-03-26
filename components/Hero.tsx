'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rafRef = useRef<number>(0);
  const mousePosRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const animate = () => {
      const lerp = 0.06;
      currentRef.current.x += (mousePosRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (mousePosRef.current.y - currentRef.current.y) * lerp;

      const dx = (currentRef.current.x - 0.5) * 2;
      const dy = (currentRef.current.y - 0.5) * 2;

      // H1 parallax ±8px
      if (titleRef.current) {
        titleRef.current.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Words for staggered reveal
  const words = ['Pick', 'Me', 'Up'];

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen"
      style={{ zIndex: 1 }}
    >
      {/* Gradient overlay on top of fixed bg */}
      <div className="hero-overlay" />

      {/* Spacer — fixed bg (hero-bg) handles image */}

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ willChange: 'transform' }}
      >
        {/* Overline */}
        <p
          className="overline mb-8"
          style={{ animation: 'word-reveal 1.2s ease forwards', opacity: 0, animationDelay: '0.1s' }}
        >
          Brisbane · Artisan Tiramisu
        </p>

        {/* H1 — word-by-word reveal */}
        <h1
          ref={titleRef}
          className="font-serif font-light italic"
          style={{
            fontSize: 'clamp(70px, 22vw, 130px)',
            lineHeight: 0.95,
            color: 'var(--cream)',
            marginBottom: '2rem',
            letterSpacing: '-0.01em',
            willChange: 'transform',
            display: 'block',
          }}
        >
          {words.map((word, i) => (
            <span
              key={word}
              className="word-reveal"
              style={{
                animationDelay: `${0.3 + i * 0.15}s`,
                marginRight: i < words.length - 1 ? '0.28em' : 0,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Poetic tagline */}
        <p
          className="font-sans font-light"
          style={{
            fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
            color: 'rgba(245,237,224,0.55)',
            letterSpacing: '0.12em',
            marginBottom: '3rem',
            animation: 'word-reveal 0.9s ease forwards',
            opacity: 0,
            animationDelay: '0.85s',
          }}
        >
          Where every spoonful tells a story.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            animation: 'word-reveal 0.8s ease forwards',
            opacity: 0,
            animationDelay: '1.05s',
          }}
        >
          <a
            href="https://www.sevenrooms.com/experiences/saucebistro/valentine-s-tiramisu-making-class-at-sauce-bistro-4812461442121728"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Workshop
          </a>
          <a href="#experiences" className="btn-outline">
            Discover
          </a>
        </div>
      </div>

      {/* Ambient ornament — slow-spinning gold ring */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '520px',
          height: '520px',
          marginTop: '-260px',
          marginLeft: '-260px',
          border: '1px solid rgba(201,169,110,0.07)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'slow-spin 200s linear infinite',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '380px',
          height: '380px',
          marginTop: '-190px',
          marginLeft: '-190px',
          border: '1px solid rgba(201,169,110,0.04)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'slow-spin 140s linear infinite reverse',
          zIndex: 2,
        }}
      />

      {/* Ambient pulse line */}
      <div
        style={{
          position: 'absolute',
          bottom: '140px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '48px',
          height: '1px',
          background: 'var(--caramel)',
          opacity: 0.5,
          animation: 'ambient-pulse 3s ease-in-out infinite',
          transformOrigin: 'center',
          zIndex: 3,
        }}
      />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          animation: 'word-reveal 0.8s ease forwards',
          opacity: 0,
          animationDelay: '1.6s',
        }}
      >
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, var(--caramel), transparent)',
            animation: 'ambient-pulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
