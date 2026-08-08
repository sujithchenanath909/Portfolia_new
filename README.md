# Sujith Chenanath — Portfolio

A modern, developer-terminal-themed portfolio built with React + Vite. Rebuilt from an
older Next.js portfolio, reusing its content (bio, projects, tech stack, career timeline)
with a new visual direction.

## Design

- **Palette:** graphite background, amber accent (`#E8A33D`), teal-green secondary (`#5FB89C`)
- **Type:** JetBrains Mono for headings/labels, IBM Plex Sans for body copy
- **Signature elements:** an animated terminal "boot sequence" in the hero, and a
  git-log-styled career timeline

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Project structure

```
src/
  components/   # Header, Hero, Stack, Projects, Experience, Footer
  data.js       # All portfolio content (profile, stack, projects, timeline)
  App.jsx       # Page composition
  App.css       # Component styling
  index.css     # Design tokens + global styles
public/
  images/       # Project screenshots + profile photo
```

To update content (new project, updated role, new job), edit `src/data.js` —
no component changes needed.
