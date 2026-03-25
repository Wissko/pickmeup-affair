import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Tiramisu Affair — Handcrafted Tiramisu Experiences · Brisbane',
  description:
    'Handcrafted tiramisu experiences in Brisbane — pop-ups, bespoke events, tiramisu making workshops and custom creations. Located at Sauce Bistro, Ashgrove.',
  openGraph: {
    title: 'The Tiramisu Affair',
    description: 'Handcrafted Tiramisu Experiences · Brisbane',
    url: 'https://pickmeup-affair.vercel.app',
    siteName: 'The Tiramisu Affair',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
