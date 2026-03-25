/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0d0b09',
        surface: '#1a1410',
        cream: '#f5ede0',
        caramel: '#c9925a',
        chocolate: '#6b3a2a',
        accent: '#e8c4a0',
        text: '#f0e8dc',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        dm: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        vibes: ['var(--font-great-vibes)', 'cursive'],
      },
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
