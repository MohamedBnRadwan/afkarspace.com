# Afkar Dark-Blue Palette Refresh Plan

## Summary
Refresh the site from the current brown-led palette to a premium dark-blue system, update light-theme shadows to carry a subtle blue tint, replace black-driven dark surfaces with navy-based surfaces, and redesign the intro/hero into a larger image-led section. This plan assumes the approved direction is **Deep Navy**.

## Key Changes
- Define a new **Deep Navy** token set in the global CSS variable layer and keep Tailwind mapped to those variables.
- Replace the current brown accent system in [app/globals.css](<D:\AQTRA\afkarspace.com\afkarspace.com\web\app\globals.css>) with a navy-based palette:
  - Light surface: `247 249 252` (`#F7F9FC`)
  - Light foreground: `15 23 42` (`#0F172A`)
  - Light muted: `90 104 124` (`#5A687C`)
  - Light line: `214 222 234` (`#D6DEEA`)
  - Light accent: `37 99 235` (`#2563EB`)
  - Light accent-soft: `219 234 254` (`#DBEAFE`)
  - Dark surface: `12 18 32` (`#0C1220`)
  - Dark foreground: `241 245 249` (`#F1F5F9`)
  - Dark muted: `148 163 184` (`#94A3B8`)
  - Dark line: `42 56 78` (`#2A384E`)
  - Dark accent: `96 165 250` (`#60A5FA`)
  - Dark accent-soft: `24 38 61` (`#18263D`)
- Update Tailwind shadow tokens in [tailwind.config.ts](<D:\AQTRA\afkarspace.com\afkarspace.com\web\tailwind.config.ts>) so:
  - `shadow-premium` gains a subtle navy tint in light theme
  - `shadow-glow` becomes blue-led instead of brown-led
- Update global background treatments in [app/globals.css](<D:\AQTRA\afkarspace.com\afkarspace.com\web\app\globals.css>) so the radial gradient and any ambient page glow use low-opacity blue instead of warm beige.
- Audit shared utility classes such as `.glass-panel` and `.eyebrow` so dark mode reads as navy, not black, while preserving contrast and the current premium feel.
- Refresh the intro/hero in [components/sections/hero-section.tsx](<D:\AQTRA\afkarspace.com\afkarspace.com\web\components\sections\hero-section.tsx>) from the current split layout to a **large image-led hero**:
  - Use one dominant visual section with a larger image footprint
  - Keep headline, eyebrow, copy, and CTAs visually anchored over or beside the image based on viewport
  - Preserve the existing motion pattern: staggered fade-up text and a restrained image reveal
  - Retain mobile-first behavior so the image remains strong without pushing the primary message too far below the fold
- Update or replace hero and future promotional images so their color grading aligns with the new navy palette rather than the current warm brown look.
- Review the main reused UI surfaces that currently pick up accent color implicitly:
  - service cards
  - mega menu active states
  - icon highlight containers
  - CTA emphasis states
  - contact/info cards
  and shift them to the new blue accent/soft-accent tokens without changing layout behavior.

## Public Interface / Data Impact
- No route changes, API changes, or schema changes are required.
- No i18n shape changes are required.
- The token contract remains the same (`--surface`, `--foreground`, `--muted`, `--line`, `--accent`, `--accent-soft`), so existing components continue to consume the same semantic variables after the palette swap.
- New images should follow the approved navy art direction; no code interface change is needed unless new asset filenames are introduced.

## Test Plan
- Verify light theme uses blue-tinted shadows and no remaining brown glow on:
  - cards
  - glass panels
  - elevated hero/image containers
  - mega menu panels
- Verify dark theme surfaces read as navy rather than black across:
  - page background
  - header/navbar
  - drawers/menus
  - cards and panels
- Verify contrast remains acceptable for text, borders, icons, and buttons in both themes.
- Verify the new hero remains balanced on:
  - mobile portrait
  - tablet
  - laptop widths where the navbar/mega menu also appear
- Verify all existing theme-dependent components still look coherent after the token swap:
  - footer/contact cards
  - service cards
  - mega menu
  - mobile menu overlay
- Verify updated images visually match the palette and do not clash with the new blue shadows/backgrounds.

## Assumptions
- Approved palette direction is **Deep Navy**.
- The refresh is primarily visual; existing content structure and navigation behavior remain unchanged except for the hero’s larger image-led layout.
- “Use it in shadows in light theme” means blue-tinted `shadow-premium`, `shadow-glow`, and ambient background glow, not harsh visible blue borders everywhere.
- “In dark use darkblue instead in black” means the core dark surfaces and panel backgrounds should shift from black/near-black to navy-based values while maintaining the current dark-mode readability.
