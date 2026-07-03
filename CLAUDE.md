# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR at http://localhost:5173
npm run build     # Type-check then build to dist/
npm run preview   # Serve the production build locally
npm run lint      # Run ESLint on all TS/TSX files
```

There is no test suite configured yet.

## Stack

- **React 18** + **TypeScript** via **Vite 6**
- **Tailwind CSS v4** integrated through the `@tailwindcss/vite` plugin (no `tailwind.config.js` needed — config is in CSS or via Vite plugin)
- ESLint with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`

## Architecture

This project is a blank slate bootstrapped from the Vite React-TS template. The default Vite counter demo has been cleared out; `src/App.tsx` is the only component so far. The project name (`word-press-convert`) suggests it will become a WordPress content conversion tool.

- `src/main.tsx` — React root, mounts `<App />` into `#root`
- `src/App.tsx` — top-level component (currently near-empty)
- `src/index.css` — global styles (Tailwind entry point)
- `src/App.css` — component-scoped styles for App

Tailwind v4 is configured purely via the Vite plugin — no PostCSS config or `tailwind.config.js` is needed. Import Tailwind utilities directly in CSS files with `@import "tailwindcss"`.

This is the reference web site : `https://wp.docalign.de/' , We are planning to build in modern way.    



