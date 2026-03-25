import Link from 'next/link';

const navLinks = [
  { href: '#experience', label: 'Expérience' },
  { href: '#offres', label: 'Offres' },
  { href: '#occasions', label: 'Occasions' },
  { href: '#ateliers', label: 'Ateliers' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/pickmeup.affair',
    label: 'Instagram @pickmeup.affair',
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/vissutap',
    label: 'LinkedIn Pickmeup Affair',
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-caramel/15 bg-surface"
      role="contentinfo"
    >
      <div className="container-site px-5 py-14 sm:px-8 sm:py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex flex-col leading-none"
              aria-label="Pickmeup Affair — Retour en haut"
            >
              <span className="heading-serif text-2xl text-cream transition-colors duration-300 group-hover:text-caramel">
                Pickmeup Affair
              </span>
              <span className="accent-script mt-1 text-sm text-caramel/60">
                Handcrafted tiramisu experiences
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text/40">
              Your daily pick me up ☕🍰 — Tiramisu artisanal haut de gamme
              pour vos moments les plus précieux.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation secondaire" className="lg:col-span-1">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-text/30">
              Navigation
            </p>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text/50 transition-colors duration-200 hover:text-caramel"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="lg:col-span-1">
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-text/30">
              Nous suivre
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-text/50 transition-colors duration-200 hover:text-caramel"
                    aria-label={`${social.label} (ouvre dans un nouvel onglet)`}
                  >
                    <span className="text-caramel/50 transition-colors duration-200 group-hover:text-caramel">
                      {social.icon}
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-caramel/10 pt-8 sm:flex-row">
          <p className="text-xs text-text/25">
            © {year} Pickmeup Affair. Tous droits réservés.
          </p>
          <p className="text-xs text-text/20">
            Tiramisu artisanal — fait avec amour ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
