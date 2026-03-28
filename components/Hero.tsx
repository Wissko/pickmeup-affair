'use client';

import { useEffect, useRef } from 'react';
import TextReveal from './TextReveal';

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

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen"
      style={{ zIndex: 1 }}
    >
      {/* Gradient overlay on top of fixed bg */}
      <div className="hero-overlay" />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ willChange: 'transform' }}
      >
        {/* Overline — pill sombre for legibility over photo */}
        <div
          style={{
            display: 'inline-block',
            marginBottom: '2rem',
            animation: 'word-reveal 1.2s ease forwards',
            opacity: 0,
            animationDelay: '0.1s',
          }}
        >
          <p
            className="overline"
            style={{
              backgroundColor: 'rgba(10,8,6,0.72)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              padding: '6px 20px',
              borderRadius: '100px',
              border: '1px solid rgba(201,169,110,0.18)',
              margin: 0,
            }}
          >
            Brisbane · Artisan Tiramisu
          </p>
        </div>

        {/* H1 — curtain lift word reveal */}
        <div ref={titleRef} style={{ willChange: 'transform', marginBottom: '2rem' }}>
          <TextReveal
            as="h1"
            className="font-serif font-light italic"
            style={{
              fontSize: 'clamp(70px, 22vw, 130px)',
              lineHeight: 0.95,
              color: 'var(--cream)',
              letterSpacing: '-0.01em',
              display: 'block',
            }}
            delay={0.3}
            stagger={0.12}
            once={true}
          >
            Pick Me Up
          </TextReveal>
        </div>

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
            Explore
          </a>
        </div>
      </div>

      {/* Scroll indicator — gold line only */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
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
