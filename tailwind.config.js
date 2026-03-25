/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0d0b09',
        'caramel': '#c9925a',
        'caramel-light': '#d9a878',
        'cream': '#f5ede0',
        'cream-dark': '#e8d9c8',
        'overlay-dark': 'rgba(13,11,9,0.82)',
        'overlay-mid': 'rgba(13,11,9,0.65)',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
