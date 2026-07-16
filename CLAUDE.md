# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR at http://localhost:5173
npm run build     # Type-check (tsc -b) then build to dist/
npm run preview   # Serve the production build locally
npm run lint      # Run ESLint on all TS/TSX files
npm run deploy    # Build and publish dist/ to GitHub Pages (gh-pages -d dist)
```

There is no test suite configured yet.

## Stack

- **React 18** + **TypeScript** via **Vite 6**
- **Tailwind CSS v4** integrated through the `@tailwindcss/vite` plugin (no `tailwind.config.js` needed — config is in CSS or via Vite plugin)
- **react-router-dom v7** for routing (`createBrowserRouter`, `basename: "/word-press-convert"` for GitHub Pages)
- **redux** + **react-redux** for state (currently just a `language` slice for en/de i18n — see `src/store/`)
- **react-hot-toast** for toasts, **react-icons** for icons, **react-slick** + `slick-carousel` for carousels, **axios** for HTTP
- ESLint with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
- Deployed to GitHub Pages under `/word-press-convert` (see `homepage` in `package.json`)

## Architecture

This is a rebuild of `https://wp.docalign.de/` (a WordPress site) as a modern React/TS SPA. Each WordPress page/URL has a corresponding route and page component so the old URL structure is preserved.

- `src/main.tsx` — React root, mounts `<App />` into `#root`
- `src/App.tsx` — defines the router (`createBrowserRouter`) and route → page mapping; wraps everything in `<RouterProvider>` and a `<Toaster>`
- `src/layout/MainLayout.tsx` — shared shell (`Navbar` + `<Outlet />` + `Footer`) applied to all routed pages
- `src/layout/Navbar.tsx` — the site navbar (top contact bar, hover dropdowns on desktop, slide-out menu on mobile, language toggle). Note: `src/components/Navbar.tsx` also exists but is **not** used anywhere — `layout/Navbar.tsx` is the real one wired into `MainLayout`.
- `src/components/` — shared components (`Footer.tsx`, `PageHero.tsx`, and the unused `Navbar.tsx`)
- `src/pages/` — one component per route (HomePage, AboutUsPage, ContactUsPage, DevServicesPage, AdditionalPage, BlogPage, HowItWorksPage, PricingPage, CaseStudiesPage, TypesettingPage, and case-study pages like `LooseLeafCaseStudyPage`/`StampCatalogueCaseStudyPage`)
- `src/store/` — Redux store (`store.ts`), the `language` slice (`language.ts`) driving en/de i18n, and typed hooks (`hooks.ts`)
- `src/translations/` — per-page translation dictionaries (`layout.ts` for navbar/footer, plus one file per page) keyed by `Language` (`'en' | 'de'`); pages read the active language from the Redux store and index into these
- `src/images/` — static image assets migrated from the WordPress site
- `src/index.css` — global styles / Tailwind entry point (`@import "tailwindcss"`)
- `src/App.css` — leftover component-scoped styles from the Vite template

### Adding a new page

1. Add the page component under `src/pages/`.
2. Add a translation dictionary under `src/translations/` (if it needs en/de text) and wire it into the page via `useAppSelector` + the language key, following the pattern in existing pages.
3. Register the route in `src/App.tsx`'s router, matching the original WordPress URL where possible.
4. Add a nav entry in `src/layout/Navbar.tsx` (`navItems`) if it should appear in the navbar.
