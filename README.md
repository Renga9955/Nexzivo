# NEXZIVO — Corporate Technology Website

A production-quality corporate technology website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS v4**.

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 (CSS-first, `@tailwindcss/vite`) |
| Routing | React Router v7 |
| Animation | Motion for React |
| Icons | Lucide React |
| Head management | React Helmet Async |
| Code quality | ESLint + Prettier |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check
npm run typecheck

# Lint
npm run lint

# Format source
npm run format

# Production build
npm run build

# Preview production build
npm run preview
```

## Folder Structure

```
src/
├── app/              # App entry, router, providers
├── assets/           # Bundled images and icons
├── components/
│   ├── ui/           # Design-system primitives (Button, Container, SectionHeading)
│   ├── layout/       # Header, Footer, MainLayout, MobileNavigation
│   └── common/       # Shared presentational components
├── config/           # site.ts, navigation.ts
├── features/         # Feature-scoped page components and sections
│   ├── home/
│   └── shared/       # Shared page utilities (PlaceholderPage)
├── hooks/            # Custom React hooks
├── lib/              # Utilities (utils.ts, motionVariants.ts)
├── styles/           # globals.css (Tailwind v4 + design tokens)
└── types/            # Shared TypeScript definitions
```

## Brand Tokens

| Token | Value | Use |
|---|---|---|
| `--color-deep-green` | `#102820` | Primary brand, nav background |
| `--color-green` | `#247A55` | Secondary accent |
| `--color-lime` | `#C6F36B` | Signature CTA accent |
| `--color-off-white` | `#F5F5EF` | Page background |
| `--color-charcoal` | `#171919` | Dark sections, footer |
| `--color-muted` | `#A8B0A8` | Secondary text |
| `--color-border` | `#DDE2D8` | Borders, dividers |

## Routes

| Path | Status |
|---|---|
| `/` | Home (stub — full implementation pending) |
| `/about` | Placeholder |
| `/services` | Placeholder |
| `/products` | Placeholder |
| `/work` | Placeholder |
| `/insights` | Placeholder |
| `/contact` | Placeholder |

## Environment Variables

Copy `.env.example` to `.env.local` and populate values as needed.
