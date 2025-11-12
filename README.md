# Pop Up Limited · Astro + Tailwind static site

This repository contains the static marketing site for **Pop Up Limited**, built with [Astro 5](https://astro.build), TypeScript, and Tailwind CSS. The site is optimised for deployment on GitHub Pages with a static export (`./dist`) and includes support, legal, and marketing pages modelled after the Robinhood design cadence.

## Tech stack

- [Astro](https://astro.build/) for static site generation
- TypeScript-first project configuration
- Tailwind CSS (custom theme, dark-mode aware)
- GitHub Actions workflow for automatic GitHub Pages deployment

## Getting started

```bash
npm install
npm run dev
```

The development server runs on `http://localhost:4321`. Edit files inside `src/` — hot reload is enabled by default.

To create a production build:

```bash
npm run build
npm run preview    # optional: serve the built site locally
```

The static output is generated under `./dist/` and is ready to upload to GitHub Pages or any static host.

## Project structure

```
/
├── public/
│   ├── favicon.svg
│   └── og-image-placeholder.svg
├── src/
│   ├── components/           # Navbar, Footer, FAQ, TicketForm, etc.
│   ├── config/               # Site-wide metadata and configurable constants
│   ├── data/                 # Product and FAQ placeholder data
│   ├── layouts/
│   │   └── Layout.astro      # Shared layout with SEO + navigation
│   ├── pages/
│   │   ├── index.astro
│   │   ├── support.astro
│   │   └── floral/
│   │       ├── terms.astro
│   │       └── privacy.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.ts
└── package.json
```

## Content & configuration checklist

Update the following placeholders before launch. Every placeholder is marked with a `// TODO` comment in the code.

| Location | Purpose |
| --- | --- |
| `src/config/site.ts` | Update `COMPANY_TAGLINE`, `DEFAULT_DESCRIPTION`, `SUPPORT_EMAIL`, `FORM_ENDPOINT`, navigation items, and social links. |
| `src/data/products.ts` | Replace product names, descriptions, badges, and links with real information. |
| `src/data/faqs.ts` | Swap placeholder questions/answers for actual FAQ content. |
| `src/components/TicketForm.astro` | After creating a Formspree (or other) endpoint, set `FORM_ENDPOINT` in `site.ts` and adjust the SLA messaging. |
| `src/components/Footer.astro` | Replace placeholder mission copy and verify contact details. |
| `src/pages/index.astro` | Refresh hero text, about section, and testimonial quote. |
| `src/pages/floral/terms.astro` & `privacy.astro` | Replace Lorem Ipsum paragraphs, confirm section structure, and update last updated dates / contact info. |
| `astro.config.mjs` | Set the real `SITE_URL` and `SITE_BASE` values for your GitHub Pages target (e.g. `https://<username>.github.io/Pop-Up-Limited-Web`). |
| `public/og-image-placeholder.svg` | Swap in a final OG/Twitter preview graphic. |

## Form handling (Formspree placeholder)

- The support ticket form ships with client-side validation and a placeholder confirmation message.
- Once you have a Formspree endpoint, update `FORM_ENDPOINT` in `src/config/site.ts`. The form will then POST to Formspree automatically.
- Remove or adjust the placeholder messaging in `TicketForm.astro` when the live endpoint is available.

## Deployment to GitHub Pages

This repo includes `.github/workflows/gh-pages.yml`, using the official `actions/deploy-pages` action. To publish:

1. Push your changes to GitHub.
2. In the repository settings, open **Settings → Pages**.
3. Choose **Source → GitHub Actions**.
4. Trigger the workflow (push to the default branch or run manually).  
   The workflow installs dependencies, builds `npm run build`, uploads `./dist`, and publishes to GitHub Pages.

Ensure `astro.config.mjs` has the correct `site` (full URL) and `base` (e.g. `/Pop-Up-Limited-Web/`) so links resolve under `<username>.github.io/<repo>/`.

## Accessibility & performance notes

- Semantic HTML with focus-visible styles is included across navigation, FAQ, and form components.
- Smooth scrolling and skip links improve keyboard navigation.
- Tailwind theme supports automatic dark mode by respecting `prefers-color-scheme`.

## Need to customise further?

- Update theme tokens (brand colours, fonts, radii) in `tailwind.config.ts`.
- Override global typography or utility classes in `src/styles/global.css`.
- Extend navigation or footer using the site config arrays for consistency.

Happy shipping! 🚀
