# slaveatanasov.com

Personal site, portfolio and CV of Slave Atanasov.

## Stack

- [Astro](https://astro.build) 7, static output
- Tailwind CSS 4 via `@tailwindcss/vite`, design tokens in `src/styles/global.css`
- Astro Fonts API (Inter, JetBrains Mono, VT323 via Fontsource)
- Content Layer collections in `src/content/` (projects as Markdown, experience and education as JSON)
- Three.js hero backdrop (`src/components/HeroScene.astro`, `src/scripts/hero-scene.ts`), lazy-loaded
- Motion (vanilla API) for entrance animations (`src/scripts/reveal.ts`)

## Scripts

```sh
npm run dev       # local dev server
npm run build     # astro check + astro build -> dist/
npm run preview   # serve the production build
```

## Editing content

- Short facts, current role, stack groups and working principles: `src/data/profile.ts`
- Contact links and site metadata: `src/data/site.ts`
- Roles: `src/content/experience.json`
- Education: `src/content/education.json`
- Projects and case studies: `src/content/projects/*.md` (`featured: true` entries get a `/work/<slug>` page; add `gallery` and `outcomes` to populate screenshots and stats)

## Deploy

Build command `npm run build`, publish directory `dist/`.
