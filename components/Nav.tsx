'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#experience', label: 'Expérience' },
  { href: '#offres', label: 'Offres' },
  { href: '#occasions', label: 'Occasions' },
  { href: '#ateliers', label: 'Ateliers' },
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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,146,90,0.15)]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="container-site flex items-center justify-between px-5 py-4 sm:px-8 lg:px-16"
          aria-label="Navigation principale"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col leading-none focus-visible:outline-none"
            aria-label="Pickmeup Affair — Accueil"
          >
            <span className="heading-serif text-xl text-cream transition-colors duration-300 group-hover:text-caramel sm:text-2xl">
              Pickmeup Affair
            </span>
            <span className="accent-script text-xs text-caramel/70 transition-colors duration-300 group-hover:text-caramel sm:text-sm">
              Handcrafted tiramisu
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-xs uppercase tracking-[0.18em] text-text/60 transition-colors duration-200 hover:text-caramel after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-caramel after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <Link
            href="#ateliers"
            className="btn-primary hidden text-xs md:inline-flex"
            aria-label="Réserver un atelier tiramisu"
          >
            Réserver
          </Link>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${
                menuOpen ? 'translate-y-[9px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${
                menuOpen ? '-translate-y-[9px] -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg/98 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center gap-8" role="list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="heading-serif text-3xl text-cream/80 transition-colors duration-200 hover:text-caramel"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link
                  href="#ateliers"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary mt-4"
                >
                  Réserver un atelier
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
