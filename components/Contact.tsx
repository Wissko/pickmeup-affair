'use client';

import { useState } from 'react';
import FadeUp from './FadeUp';

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
    // Form submission would be wired to a backend or service like Formspree
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-transparent py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <FadeUp>
            <p
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--caramel)' }}
            >
              Get in Touch
            </p>
            <h2
              className="font-serif font-light italic caramel-line"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                color: 'var(--cream)',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              Let's create
              <br />something sweet.
            </h2>

            <div className="mt-10 space-y-6">
              <div>
                <p
                  className="font-sans text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'var(--caramel)' }}
                >
                  Find Us
                </p>
                <p className="font-sans font-light" style={{ color: 'rgba(245,237,224,0.75)', lineHeight: 1.7 }}>
                  Sauce Bistro<br />
                  50 Frasers Road<br />
                  Ashgrove, Brisbane QLD
                </p>
              </div>

              <div>
                <p
                  className="font-sans text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'var(--caramel)' }}
                >
                  Follow Along
                </p>
                <a
                  href="https://www.instagram.com/pickmeup.affair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-light inline-flex items-center gap-2"
                  style={{ color: 'rgba(245,237,224,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--caramel)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(245,237,224,0.75)')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @pickmeup.affair
                </a>
              </div>

              <div>
                <p
                  className="font-sans text-xs uppercase tracking-widest mb-2"
                  style={{ color: 'var(--caramel)' }}
                >
                  Book a Workshop
                </p>
                <a
                  href="https://www.sevenrooms.com/experiences/saucebistro/valentine-s-tiramisu-making-class-at-sauce-bistro-4812461442121728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-caramel"
                  style={{ fontSize: '0.75rem' }}
                >
                  Reserve on SevenRooms →
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.2}>
            {submitted ? (
              <div
                className="flex flex-col justify-center items-center h-full text-center py-16"
              >
                <div className="text-5xl mb-6">✨</div>
                <h3
                  className="font-serif italic text-3xl mb-4"
                  style={{ color: 'var(--cream)' }}
                >
                  Thank you!
                </h3>
                <p className="font-sans font-light" style={{ color: 'rgba(245,237,224,0.7)' }}>
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                    placeholder="Email Address"
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
                  style={{ cursor: 'pointer' }}
                >
                  <option value="">Select Occasion</option>
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
                  placeholder="Tell us about your occasion or enquiry..."
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
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
