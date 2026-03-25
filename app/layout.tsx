import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
});

const siteUrl = 'https://pickmeupaffair.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pickmeup Affair — Handcrafted Tiramisu Experiences',
    template: '%s | Pickmeup Affair',
  },
  description:
    'Tiramisu artisanal haut de gamme — Pop-ups, événements, ateliers et créations sur mesure. Your daily pick me up ☕🍰',
  keywords: [
    'tiramisu artisanal',
    'tiramisu sur mesure',
    'atelier tiramisu',
    'événement dessert',
    'tiramisu mariage',
    'pickmeup affair',
    'dessert premium',
    'tiramisu Paris',
  ],
  authors: [{ name: 'Pickmeup Affair', url: siteUrl }],
  creator: 'Pickmeup Affair',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Pickmeup Affair',
    title: 'Pickmeup Affair — Handcrafted Tiramisu Experiences',
    description:
      'Tiramisu artisanal haut de gamme — Pop-ups, événements, ateliers et créations sur mesure.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Pickmeup Affair — Tiramisu artisanal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pickmeup Affair — Handcrafted Tiramisu Experiences',
    description:
      'Tiramisu artisanal haut de gamme — Pop-ups, événements, ateliers et créations sur mesure.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0b09',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Pickmeup Affair',
  description:
    'Tiramisu artisanal haut de gamme — Pop-ups, événements, ateliers et créations sur mesure.',
  url: siteUrl,
  sameAs: [
    'https://www.instagram.com/pickmeup.affair',
    'https://www.linkedin.com/in/vissutap',
  ],
  servesCuisine: 'Italian Desserts',
  priceRange: '€€€',
  menu: `${siteUrl}/#offres`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`dark ${cormorant.variable} ${dmSans.variable} ${greatVibes.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
