# ReadyPod Website Redesign

## Project Overview
Redesigning the ReadyPod website (readypod.com) — a modular/foldable housing company serving disaster relief, workforce housing, and government/military markets.

## File Roles
- `index.html` — **Current live site** (reference only, do not modify for the new build)
- `index-homepage-notes.html` — **New homepage** (will become the main `index.html`)
- `products.html` — **New products page**
- `site-nav.js` — Shared nav component (`<rp-site-nav>` custom element)
- `rp-head-assets.js` — Shared `<head>` asset loader (all theme CSS + fonts in one place)
- `_template.html` — Base template for creating new pages
- `homepage-design-notes.md` — Design spec for the new homepage
- `website-build-notes.md` — Full project planning notes (pages, nav, content sources)

## Creating New Pages
Copy `_template.html` and fill in `PAGE_TITLE`, `PAGE_ID`, and `<main>` content. The two required scripts in `<head>` handle everything:
1. `<script src="rp-head-assets.js"></script>` — injects all theme CSS and fonts
2. `<script src="site-nav.js" defer></script>` — injects the shared nav bar

## URL Structure
Use **clean URLs** (no `.html` extensions visible). Organize pages as directory-based `index.html` files so they work on localhost and in production:
- `/` → `index.html` (homepage)
- `/products/` → `products/index.html`
- Future pages follow the same pattern (e.g., `/capabilities/index.html`)

When this restructure happens, update all internal links in `site-nav.js` and page files accordingly (e.g., `href="products.html"` → `href="/products/"`).

## Tech Stack
- Static HTML/CSS/JS (no framework)
- Salient WordPress theme CSS loaded via CDN from readypod.com (for visual consistency)
- Custom CSS variables scoped under `--rp-*`
- Shared navigation via `site-nav.js` web component

## Page Status
- **Homepage** — ✅ Done (`index-homepage-notes.html`)
- **Products** — ✅ Done (`products.html`)
- **Disaster Relief** — 🔲 To build
- **Workforce Housing & Hospitality** — 🔲 To build
- **Government, NGO, & Military** — 🔲 To build
- **Capabilities** — 🔲 To build (6 click-to-play tiles with headers + text)
- **Deployment Models** — 🔲 To build (content from marketing deck)

## Shared Components
- **Nav bar** — `site-nav.js` web component, used on all pages
- **Bottom CTA section** — The Products / Capabilities / Deployments / Contact Us block from the homepage is a universal section to be reused across pages (sector landing pages, etc.)

## Design Direction
- Keep look/feel aligned with current site but modernized
- Reuse existing media assets (photos, videos) from readypod.com
- Orange accent color (`#db6527`)
- Clean, modern, conversion-focused layout
- Prefer static images with solid backdrops over video backgrounds at this stage
- Phone number buttons should link to Contact Us intake page instead
- Content sourced from marketing deck for consistency across pages
