import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import IntroLoader from '@/components/IntroLoader';

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
  title: 'Pick Me Up — Artisan Tiramisu',
  description:
    'Artisan tiramisu experiences in Brisbane — pop-ups, bespoke events, making workshops and custom creations.',
  openGraph: {
    title: 'Pick Me Up — Artisan Tiramisu',
    description: 'Handcrafted tiramisu. Brisbane.',
    url: 'https://pickmeup-affair.vercel.app',
    siteName: 'Pick Me Up',
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
      <body>
        <IntroLoader />
        {children}
      </body>
    </html>
  );
}
