# Tejas Kabra - Engineering Portfolio

Astro, TypeScript, Tailwind CSS, and MDX. Deployed on Vercel.

## Local Development

Use Node 24, then run:

```sh
npm ci
npm run dev
```

`npm run build` checks Astro and TypeScript before generating the production build.

## Content

- `src/data/profile.ts`: contact details and current role.
- `src/content/projects`: project case studies, metrics, cover images, and outcomes.
- `src/pages/index.astro`: homepage and experience.
- `src/pages/about.astro`: background and recruiting direction.
- `public/assets/tejas-kabra-resume.pdf`: the supplied resume PDF. This remains the July 2026 edition and needs a replacement when the SpaceX entry is ready.

Project frontmatter distinguishes an ongoing project from a case study that is not ready. Set `caseStudyReady: false` to show a compact documentation-in-progress entry on the homepage. `heroImage` and `heroImageAlt` supply the project cover; case-study images open in a keyboard-accessible viewer and link directly to the original with JavaScript disabled.

Vercel's `VERCEL_PROJECT_PRODUCTION_URL` supplies the canonical origin at build time. Set it explicitly when building outside Vercel to include canonical and social-image metadata.

## Dependencies

The `path-to-regexp` and `esbuild` overrides select patched versions within the API versions used by the build integrations. Recheck their necessity when updating the Vercel adapter.
