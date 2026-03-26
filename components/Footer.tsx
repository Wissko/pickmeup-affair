'use client';

export default function Footer() {
  return (
    <footer
      className="page-content section-over-bg"
      style={{
        borderTop: '1px solid rgba(201,169,110,0.10)',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          {/* Logo & tagline */}
          <div>
            <p
              className="font-serif italic font-light"
              style={{ fontSize: '1.4rem', color: 'var(--cream)', letterSpacing: '0.02em' }}
            >
              Pick Me Up
            </p>
            <p
              className="font-sans font-light text-xs mt-1 uppercase tracking-widest"
              style={{ color: 'rgba(245,237,224,0.3)', letterSpacing: '0.16em' }}
            >
              Artisan Tiramisu · Brisbane
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {[
              { href: '#experiences', label: 'Experiences' },
              { href: '#workshops', label: 'Workshops' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs uppercase tracking-widest"
                style={{
                  color: 'rgba(245,237,224,0.35)',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                  letterSpacing: '0.16em',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--caramel)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'rgba(245,237,224,0.35)')
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/pickmeup.affair"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest"
            style={{
              color: 'rgba(245,237,224,0.35)',
              textDecoration: 'none',
              transition: 'color 0.25s',
              letterSpacing: '0.12em',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--caramel)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'rgba(245,237,224,0.35)')
            }
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @pickmeup.affair
          </a>
        </div>

        <div
          className="mt-12 pt-6 text-center"
          style={{ borderTop: '1px solid rgba(245,237,224,0.05)' }}
        >
          <p
            className="font-sans text-xs"
            style={{ color: 'rgba(245,237,224,0.2)', letterSpacing: '0.06em' }}
          >
            © 2025 Pick Me Up. All rights reserved. · Thu · Sat · Sun — Brisbane Markets
          </p>
        </div>
      </div>
    </footer>
  );
}
