# Pickmeup Affair — Site Web

Site vitrine pour **Pickmeup Affair**, marque de tiramisu artisanal haut de gamme.

## Stack

- **Next.js 14** — App Router, SSG
- **Tailwind CSS** — dark mode, mobile-first
- **Framer Motion** — animations fade-up au scroll
- **Formspree** — formulaire de contact
- **Google Fonts** — Cormorant Garamond · DM Sans · Great Vibes

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Structure

```
site/
├── app/
│   ├── globals.css       # Styles globaux + custom properties CSS
│   ├── layout.tsx        # Root layout — fonts, metadata SEO, JSON-LD
│   └── page.tsx          # Page principale (assemblage des sections)
├── components/
│   ├── Nav.tsx           # Navigation sticky transparente → sombre
│   ├── Hero.tsx          # Section hero plein écran
│   ├── Experience.tsx    # Section "L'Expérience"
│   ├── Offres.tsx        # 3 cards d'offres
│   ├── Galerie.tsx       # Galerie masonry 4 photos
│   ├── Occasions.tsx     # Section occasions (mariages, corporate…)
│   ├── Ateliers.tsx      # Section atelier + CTA SevenRooms
│   ├── Contact.tsx       # Formulaire Formspree + réseaux
│   ├── Footer.tsx        # Footer logo + liens
│   └── FadeUp.tsx        # Composant animation Framer Motion réutilisable
├── public/
│   └── images/           # ⚠️ Placer ici les photos originales
│       ├── hero.jpg
│       ├── events.jpg
│       ├── custom.jpg
│       ├── gift.jpg
│       └── craft.jpg
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

## Images

Placer les 5 photos originales dans `public/images/` :

| Fichier | Contenu | Section |
|---------|---------|---------|
| `hero.jpg` | Tiramisu en coupe cocktail, fond sombre | Hero |
| `events.jpg` | Tiramisu "Just Married" en boîte | Occasions, Galerie |
| `custom.jpg` | Tiramisu "Mary" verrine ruban rouge | Galerie |
| `gift.jpg` | Tiramisu "Be Mine" boîte vitrée dorée | Occasions, Galerie |
| `craft.jpg` | Mains posant cerises sur tiramisu | Expérience, Galerie |

## Configuration Formspree

1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un nouveau formulaire
3. Remplacer `xpwzjwkq` dans `components/Contact.tsx` par votre ID Formspree :

```ts
const FORMSPREE_ID = 'votre-id-ici';
```

## Build production

```bash
npm run build
npm run start
```

## Déploiement Vercel

```bash
npx vercel
```

Ou connecter le repo GitHub à Vercel — déploiement automatique sur push.

## Palette couleurs

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--color-bg` | `#0d0b09` | Fond principal |
| `--color-surface` | `#1a1410` | Surfaces secondaires |
| `--color-cream` | `#f5ede0` | Textes clairs, titres |
| `--color-caramel` | `#c9925a` | Accents, CTA, liens |
| `--color-chocolate` | `#6b3a2a` | Teinte chocolat profond |
| `--color-accent` | `#e8c4a0` | Or pâle, détails |
| `--color-text` | `#f0e8dc` | Texte courant |

## Liens importants

- Instagram : [@pickmeup.affair](https://www.instagram.com/pickmeup.affair)
- Ateliers : [SevenRooms](https://www.sevenrooms.com/experiences/saucebistro/valentine-s-tiramisu-making-class-at-sauce-bistro-4812461442121728)
- LinkedIn : [vissutap](https://www.linkedin.com/in/vissutap)
