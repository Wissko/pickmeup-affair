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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1.5rem',
              color: 'var(--cream)',
              letterSpacing: '0.04em',
            }}
          >
            Pick Me Up
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-widest uppercase"
              style={{
                color: 'rgba(245,237,224,0.6)',
                textDecoration: 'none',
                transition: 'color 0.25s',
                letterSpacing: '0.16em',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--cream)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'rgba(245,237,224,0.6)')
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#workshops"
            className="btn-primary"
          >
            Book
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: 'var(--cream)',
              transform: menuOpen ? 'rotate(45deg) translateY(6px)' : '',
            }}
          />
          <span
            className="block w-5 h-px"
            style={{
              backgroundColor: 'var(--cream)',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s',
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: 'var(--cream)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : '',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? '260px' : '0',
          backgroundColor: 'rgba(10,8,6,0.97)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <nav className="flex flex-col px-6 pb-8 pt-2 gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase tracking-widest py-3 border-b"
              style={{
                color: 'rgba(245,237,224,0.65)',
                textDecoration: 'none',
                borderColor: 'rgba(245,237,224,0.06)',
                letterSpacing: '0.18em',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#workshops" className="btn-primary text-center mt-3" onClick={() => setMenuOpen(false)}>
            Book a Workshop
          </a>
        </nav>
      </div>
    </header>
  );
}
