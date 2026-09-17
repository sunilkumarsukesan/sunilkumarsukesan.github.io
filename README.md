# Sunil Kumar Sukesan — Portfolio

Personal portfolio site, built with Next.js (App Router, static export) and Tailwind CSS.
Deployed to GitHub Pages at [sunilkumarsukesan.github.io](https://sunilkumarsukesan.github.io/).

## Stack

- Next.js 16 (`output: "export"` static build)
- Tailwind CSS v4
- Framer Motion (accordion, scroll reveals, theme-toggle animations)
- react-icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Profile, experience, skills, and accomplishments are data-driven from [lib/data.ts](lib/data.ts) —
edit that file to update site content. Company logos and the profile photo live in `public/images/`,
and the downloadable resume lives in `public/docs/`.

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds
the static export (`npm run build` → `out/`) and publishes it via GitHub Pages Actions deployment.
