# ivy-web-shell

An **extremely simplified** version of the Ivy-Web home page — the visual shell only.

This is a single standalone Next.js + Tailwind app that reproduces the marketing
home page sections (Header, Hero, Problem-We-Solve, Tendril Mockup, Download CTA,
Get Involved, FAQ Teaser, Footer) with the real copy, but with **plain static
styling**. None of the backend wiring from the real monorepo is included:

- No WebGL "norrsken" aurora shader (replaced with a static gradient)
- No scroll/entrance animations
- No `@kit/ui` design system, providers, PostHog, or GitHub/blog data fetching
- No auth, no API routes, no Supabase

## Develop

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy

Continuous deployment is wired to Vercel — pushes to `main` deploy to production.
