# AFKAR_PROJECT_RULES

## Vision

Afkar should feel premium, calm, and architectural.
The site direction is inspired by Apple-level restraint: strong typography, large whitespace, crisp hierarchy, and smooth purposeful motion.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- `next/image`
- `next/font`
- Local SVG assets only for icons
- Dark and light themes with a persistent toggle

## Core Experience Rules

- Design mobile-first and upscale progressively for tablet and desktop.
- Keep sections airy; avoid dense blocks of text.
- Use motion to support transitions, not to decorate every element.
- Maintain high contrast in both themes.
- Prefer rounded cards, soft gradients, and premium shadows over loud borders.

## Information Architecture

- Locale-aware routes: `/en/...` and `/ar/...`
- Main pages:
  - `/`
  - `/services`
  - `/services/interior-design`
  - `/services/finishing`
  - `/services/factory-outfitting`
  - `/services/glass-facades`
  - `/services/furniture`
  - `/services/curtains`
  - `/projects`
  - `/about`
  - `/contact`

## Navigation Rules

- Desktop navbar includes logo, main links, services mega menu, theme switcher, language switcher, and primary CTA.
- Services mega menu should reveal title, description, and related preview image with a subtle fade/slide.
- Mobile navigation should use a full-screen drawer with large tap targets and a services accordion.

## Localization Rules

- Keep all user-facing copy centralized in the i18n layer.
- Arabic must use RTL layout.
- Route switching between languages should preserve the current path when possible.

## Asset Rules

- Store images under `public/images/...`
- Store icons under `public/icons/...`
- Store logos under `public/logos/...`
- Prefer editable SVG placeholders during scaffolding until final brand assets are approved.

## Motion Rules

- Use hero fade-up animation for first-view content.
- Use reveal-on-scroll for section blocks and cards.
- Keep mega menu image transitions fast and polished.
- Avoid long durations, bouncing effects, or constant looping animations.

## Component Rules

- Reuse shared section and page templates before creating one-off layouts.
- Keep components focused and composable.
- Avoid UI kits, Bootstrap, and icon libraries.
- Use `next/image` for visual assets and `next/font` for typography.

## Content Direction

- Headings should be concise, bold, and aspirational.
- Body text should stay short, clear, and premium.
- Services must communicate both design value and execution confidence.

## Next Phase Suggestions

- Replace placeholder SVG scenes with real project photography.
- Add CMS or structured content editing if non-developers will manage content.
- Add SEO metadata per page and localized Open Graph assets.
- Add a proper contact form backend and WhatsApp integration details.
