# Church of the Epiphany Website

This repository contains a Next.js site for Church of the Epiphany with content managed through MDX files that are ready for Netlify Visual Editor.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Project Structure

- `pages/` – Next.js pages for the home, about, Sunday service, and event detail routes.
- `content/events/` – MDX sources for events. Front matter powers event cards, while the body is rendered on the detail page.
- `components/` – Shared UI components including the layout shell and event card.
- `styles/` – CSS Modules used throughout the site.
- `public/images/` – Hero art used for sample events.
- `netlify/visual-editor/` – Configuration that maps event content for the Netlify Visual Editor.

## Netlify Visual Editor

The provided `netlify.toml` enables the Visual Editor plugin. When deployed on Netlify with GitHub as the content source, editors can update event MDX files visually while changes remain version-controlled.

## Commands

- `npm run dev` – Start the development server.
- `npm run build` – Create an optimized production build.
- `npm run start` – Run the production build locally.
