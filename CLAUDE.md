# Claude Configuration

## Project Overview

Personal portfolio CV site showcasing professional experience, projects, and skills. Single-page React application deployed to GitHub Pages at `/portfolio/`.

## Tech Stack

- **React** 18.3.1 — UI framework
- **TypeScript** 5.6.3 — type-safe JavaScript
- **Vite** 5.4.11 — build tool and dev server
- **Node.js** 20 LTS (CI/CD)
- Zero external UI dependencies (no Tailwind, Material, etc.)

## Project Structure

```
src/
├── components/      # React components (Nav, Hero, About, Work, Projects, Skills, Contact)
├── data/            # cv.ts — single source of truth for all content
├── hooks/           # useReveal.ts — Intersection Observer for scroll animations
├── types/           # cv.types.ts — TypeScript interfaces
├── utils/           # renderRich.tsx — markdown-like text renderer (**bold**, _italic_)
├── App.tsx          # Root layout combining all sections
├── main.tsx         # React entry point
└── index.css        # Atelier design system + all styles (17KB)

public/             # profile_face.jpg (required)
.github/workflows/  # deploy.yml, pr-check.yml
```

## Key Files

| File | Purpose |
|------|---------|
| `src/data/cv.ts` | **Single source of truth** — 147 lines with all content: profile, navigation, experience, projects, skills |
| `src/types/cv.types.ts` | TypeScript interfaces for Profile, WorkExperience, Project, SkillGroup, NavItem |
| `src/index.css` | Atelier design system CSS, animations, responsive layout |
| `src/components/Nav.tsx` | Sticky header with burger menu (mobile hamburger, slide-down panel, scroll lock) |
| `src/hooks/useReveal.ts` | Scroll reveal animations via Intersection Observer |
| `src/utils/renderRich.tsx` | Parse `**bold**` and `_italic_` markdown into React JSX |

## Build & Dev Commands

```bash
npm run dev         # Start dev server (http://localhost:5173)
npm run build       # TypeScript check + Vite production build → dist/
npm run typecheck   # TypeScript check only (no build)
npm run preview     # Preview production build locally (http://localhost:4173)
```

## Design System (Atelier)

- **Class prefix:** `.at-` (e.g., `.at-nav`, `.at-hero`, `.at-btn`)
- **Colors:** CSS variables `--paper` (bg), `--ink` (text), `--accent` (burnt orange #b8543a), `--rule-soft`
- **Fonts:** Bricolage Grotesque (headings, variable 400–600), JetBrains Mono (metadata/code, weights 300–500)
- **Responsive:** Single breakpoint at 900px (`@media (max-width: 900px)`)
- **Layout:** CSS Grid, max-width 1320px containers, 3-column desktop → 1-column mobile
- **Animations:** Cubic-bezier easing, smooth scroll, Intersection Observer for staggered reveals

## Code Conventions

**Components:**
- Named exports (e.g., `export function Nav() {}`)
- Functional components with React hooks
- `data-reveal` attribute for scroll animations
- Inline `style={{ '--rd': 'XXms' }}` for staggered delays
- `ref` usage for imperative interactions (e.g., burger menu focus)

**Data:**
- Markdown-like syntax: `**bold text**` → `<strong>`, `_italic_` → `<em>`
- Rendered by `renderRich()` utility from cv.ts content

**TypeScript:**
- Strict mode enabled
- JSX pragma: `react-jsx` (no React import needed)
- No unused variables/parameters

**CSS:**
- Follows Atelier naming/structure
- Mobile-first media queries
- CSS custom properties for theming

## CI/CD Workflows

**`deploy.yml`** — GitHub Pages deployment
- Trigger: PR merge to `main` only
- Steps: Checkout → Node 20 → npm ci → npm run build → deploy to GitHub Pages
- Base path: `/portfolio/` (configured in vite.config.ts)

**`pr-check.yml`** — PR validation
- Trigger: All PRs to `main`
- Checks: Required files (index.html, public/profile_face.jpg, src/App.tsx), TypeScript, build, bundle size > 10KB

## Burger Menu Feature (feat/burger-menu)

Latest branch implements mobile hamburger menu with:
- Animated burger button (3 bars, smooth transforms)
- Mobile slide-down panel with scroll lock
- Auto-close on: Escape key, click outside, resize to desktop (900px+)
- Accessibility: ARIA labels, focus management
- Smooth animations: cubic-bezier easing, max-height + opacity transitions

## Useful Patterns

**Scroll reveal animations:**
```tsx
<section data-reveal data-reveal-offset="50">
  Content fades in when scrolled into view
</section>
```

**Rich text in data:**
```ts
description: "Check out my **featured projects** and _recent work_"
// Renders as: "Check out my <strong>featured projects</strong> and <em>recent work</em>"
```

**CSS variables for spacing/delays:**
```tsx
<div style={{ '--rd': '100ms' } as React.CSSProperties}>
  Staggered reveal with custom delay
</div>
```

## Notes

- All content is centralized in `src/data/cv.ts` — update once, reflect everywhere
- No build-time content or MDX needed
- TypeScript strict mode catches potential issues early
- No JavaScript dependencies beyond React (minimal surface area, fast load)
