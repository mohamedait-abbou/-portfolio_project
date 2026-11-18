# Mohamed Ait Abbou — Portfolio

A dark-first, editorial portfolio built with Next.js 16 (static export), React 19, TypeScript, Tailwind CSS v4 and Framer Motion. One accent gradient, one typographic rule (a single serif italic "hinge" word per headline), and no invented metrics or demo links.

The site is organised for a recruiter's first pass:

1. **Hero** — role, availability, focus and the strongest proof, in one screen.
2. **Snapshot** — availability, target roles, selected systems, strengths and real counts.
3. **Toolbox ticker** — the stack in motion, pause on hover.
4. **Work** — three case studies with problem, approach, contribution, evidence and caveats.
5. **Path** — the CRM full-stack + DevOps internship, formal study and independent builds.
6. **About**, **Stack**, **Study**, **Contact** — context, honest skill labels and a direct next step.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npm run build
BASE_PATH=/portfolio_project npm run build
```

The build writes the static site to `out/`. GitHub Pages deployment is handled by `.github/workflows/deploy.yml` with `BASE_PATH=/portfolio_project`.

## Structure

- `src/config/` — identity, SEO, base-path helpers
- `src/data/` — truth-only profile, experience, projects, skills, navigation
- `src/components/layout/` — nav, section rail, footer
- `src/components/sections/` — hero, snapshot, work, path, about, stack, study, contact
- `src/components/ui/` — icon set, reveal, spotlight, marquee, clock, copy-email
- `src/components/three/` — lazy, reduced-motion-aware hero wireframe
- `src/fonts/` — self-hosted Geist + Instrument Serif (no build-time font fetch)

## Content rules

All copy is sourced from the existing repository and the owner's GitHub profile. Placeholder LinkedIn, CV download, unverified screenshots and invented statistics are intentionally absent. SmartPark Maroc is labelled **In progress** (detector trained, OCR next) based on its repository README.

The SEOCOM PFA internship is presented as **CRM full-stack + DevOps**: the Laravel/MySQL/Blade product work plus the Docker runtime and self-hosted GitHub Actions delivery path (Pest tests, healthchecks, migrations and release steps).

Live: https://mohamedait-abbou.github.io/portfolio_project/
