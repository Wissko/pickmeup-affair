'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occasion: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        backgroundColor: '#060503',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <ScrollReveal>
            <p className="overline mb-6">Get in Touch</p>
            <TextReveal
              as="h2"
              className="font-serif font-light italic caramel-line"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                color: 'var(--cream)',
                lineHeight: 1.1,
              }}
            >
              Let&apos;s create something sweet.
            </TextReveal>

            <div className="mt-14 space-y-10">
              <div>
                <p className="overline mb-5">Brisbane City's Markets</p>
                <div
                  className="font-sans font-light"
                  style={{ color: 'rgba(245,237,224,0.55)', lineHeight: 1, fontSize: '0.9rem' }}
                >
                  {/* Thursday */}
                  <div style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(245,237,224,0.06)' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--caramel)', letterSpacing: '0.1em', fontSize: '0.72rem', textTransform: 'uppercase', minWidth: '3.5rem' }}>Thu</span>
                      <span>8am–2pm</span>
                    </div>
                    <div style={{ paddingLeft: '5rem', color: 'rgba(245,237,224,0.38)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                      Cathedral Square Markets<br />410 Ann Street, Brisbane
                    </div>
                  </div>
                  {/* Saturday */}
                  <div style={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(245,237,224,0.06)' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--caramel)', letterSpacing: '0.1em', fontSize: '0.72rem', textTransform: 'uppercase', minWidth: '3.5rem' }}>Sat</span>
                      <span>6am–12pm</span>
                    </div>
                    <div style={{ paddingLeft: '5rem', color: 'rgba(245,237,224,0.38)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                      Brisbane Markets<br />385 Sherwood Rd, Rocklea
                    </div>
                  </div>
                  {/* Sunday */}
                  <div style={{ paddingTop: '16px' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--caramel)', letterSpacing: '0.1em', fontSize: '0.72rem', textTransform: 'uppercase', minWidth: '3.5rem' }}>Sun</span>
                      <span>6am–12pm</span>
                    </div>
                    <div style={{ paddingLeft: '5rem', color: 'rgba(245,237,224,0.38)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                      Nundah Markets<br />Station St, Nundah
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="overline mb-3">Follow Along</p>
                <a
                  href="https://www.instagram.com/pickmeup.affair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-light inline-flex items-center gap-2"
                  style={{ color: 'rgba(245,237,224,0.55)', textDecoration: 'none', transition: 'color 0.25s', fontSize: '0.95rem' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--caramel)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(245,237,224,0.55)')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @pickmeup.affair
                </a>
              </div>

              <div>
                <p className="overline mb-3">Book a Workshop</p>
                <a
                  href="https://www.sevenrooms.com/experiences/saucebistro/valentine-s-tiramisu-making-class-at-sauce-bistro-4812461442121728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-caramel"
                >
                  Reserve on SevenRooms →
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.18}>
            {submitted ? (
              <div className="flex flex-col justify-center items-start h-full py-16">
                <h3
                  className="font-serif italic"
                  style={{ fontSize: '2.5rem', color: 'var(--cream)', marginBottom: '1rem' }}
                >
                  Thank you.
                </h3>
                <p className="font-sans font-light" style={{ color: 'rgba(245,237,224,0.5)', fontSize: '0.95rem' }}>
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" style={{ paddingTop: '1rem' }}>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Occasion</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="valentines">Valentine's Day</option>
                  <option value="workshop">Workshop Enquiry</option>
                  <option value="custom">Custom Order</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your occasion…"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                />
                <button type="submit" className="btn-primary w-full text-center">
                  Send Enquiry
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
