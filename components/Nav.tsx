'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#experiences', label: 'Experiences' },
  { href: '#events', label: 'Events' },
  { href: '#workshops', label: 'Workshops' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
      style={{ transitionDuration: '400ms' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="#"
          className="font-serif text-cream text-xl md:text-2xl tracking-wide italic font-light"
          style={{ color: 'var(--cream)', textDecoration: 'none' }}
        >
          The Tiramisu Affair
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-widest uppercase"
              style={{
                color: 'rgba(245,237,224,0.75)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--caramel)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'rgba(245,237,224,0.75)')
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#workshops"
            className="btn-primary"
            style={{ fontSize: '0.75rem', padding: '10px 22px' }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 bg-cream transition-all duration-300"
            style={{
              backgroundColor: 'var(--cream)',
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : '',
            }}
          />
          <span
            className="block w-6 h-0.5"
            style={{
              backgroundColor: 'var(--cream)',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s',
            }}
          />
          <span
            className="block w-6 h-0.5"
            style={{
              backgroundColor: 'var(--cream)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : '',
              transition: 'transform 0.3s',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '280px' : '0',
          backgroundColor: 'rgba(13,11,9,0.97)',
        }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm tracking-widest uppercase py-2 border-b"
              style={{
                color: 'rgba(245,237,224,0.8)',
                textDecoration: 'none',
                borderColor: 'rgba(245,237,224,0.1)',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#workshops" className="btn-primary text-center mt-2" onClick={() => setMenuOpen(false)}>
            Book a Workshop
          </a>
        </nav>
      </div>
    </header>
  );
}
