/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0a0806',
        'caramel': '#c9a96e',
        'caramel-light': '#d9bc8a',
        'cream': '#f5ede0',
        'cream-dark': '#e8d9c8',
        'overlay-dark': 'rgba(10,8,6,0.90)',
        'overlay-mid': 'rgba(10,8,6,0.70)',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
