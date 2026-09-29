# Company Profile

[![CI](https://github.com/Yusuf-98/Company-Profile-by-Yusuf-AR/actions/workflows/ci.yml/badge.svg)](https://github.com/Yusuf-98/Company-Profile-by-Yusuf-AR/actions/workflows/ci.yml)

A responsive, animated company-profile landing page built from a Figma design — Hero, About, Service, Projects, Testimonials, FAQ, and Footer sections, with a light/dark theme toggle.

🚀 **Live demo:** https://company-profile-by-yusuf-ar.vercel.app/

![Hero section](docs/screenshots/hero.webp)

[![Lighthouse](https://img.shields.io/badge/Lighthouse-98_mobile_%C2%B7_100_desktop-brightgreen?logo=lighthouse&logoColor=white)](#performance)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- Pixel-accurate implementation of a Figma design, responsive from mobile to desktop
- Sections: Hero, About, Service, Projects, Testimonials, FAQ, Footer
- Animated stat counters and a light/dark theme toggle
- Portfolio and service cards open a detail modal (image preview / description, highlights, metrics) with full keyboard support — scroll lock, focus trap, focus return, Escape to close
- Industry switcher follows the ARIA tabs pattern: roving tabindex, arrow/Home/End key navigation
- FAQ items toggle with `aria-expanded`, keeping only one answer open at a time
- Component-based architecture with reusable UI pieces

## Screenshots

| Dark theme | Light theme |
| --- | --- |
| ![Hero section in dark theme](docs/screenshots/theme-dark.webp) | ![Hero section in light theme](docs/screenshots/theme-light.webp) |

| Animated stat counters | Testimonial carousel | FAQ |
| --- | --- | --- |
| ![Stats section](docs/screenshots/stats.webp) | ![Testimonials section](docs/screenshots/testimonials.webp) | ![FAQ section](docs/screenshots/faq.webp) |

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** for styling
- **Vitest** + **React Testing Library** for tests, **GitHub Actions** for CI
- **ESLint** for linting

## Getting started

```bash
git clone https://github.com/Yusuf-98/Company-Profile-by-Yusuf-AR.git
cd Company-Profile-by-Yusuf-AR
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run the test suite once |

## Testing

Tests live next to the code they cover (`*.test.tsx`) and run with Vitest and React Testing Library in jsdom. They target interactive logic rather than static markup:

- **Button**: variants, click handling, disabled state
- **Theme toggle**: default theme, persistence of the `dark` class, and the context throwing outside its provider
- **FAQ accordion**: default open item, only one item open at a time, closing on repeat click
- **Portfolio preview modal**: opens with the right image/category/label, closes via the close button, backdrop click and Escape
- **Service detail modal**: opens with the description, highlights and metrics; swapping between services; closing on Escape
- **Modal accessibility hook**: scroll lock, focus moved in and returned to the trigger, Tab trapped inside the modal (including Shift+Tab), Escape closes it
- **Error boundary**: renders children normally, shows the fallback UI when a child throws, and the reload button
- **Contact form**: every field's label is linked to its input, a required-field error appears for each empty field on submit, an error clears once its field is filled in, and a valid submission shows the success popup

GitHub Actions runs lint, type-check, tests and the production build on every push and pull request ([ci.yml](.github/workflows/ci.yml)).

## Performance

Lighthouse results for the [live site](https://company-profile-by-yusuf-ar.vercel.app/): the median of 10 mobile and 6 desktop runs on 29 September 2026 (Lighthouse 13.5.0).

| | 📱 Mobile | 🖥️ Desktop |
| --- | :---: | :---: |
| **Performance** | **98** | **100** |
| **Accessibility** | **97** | **97** |
| **Best practices** | **100** | **100** |
| **SEO** | **100** | **100** |

Mobile performance ranged from 96 to 98 across the 10 runs; desktop scored 100 in all 6. Accessibility holds at 97 on both — two buttons keep their brand orange background over white text rather than a higher-contrast color, a deliberate trade-off to preserve the site's visual identity.

### Core metrics

| Metric | 📱 Mobile | 🖥️ Desktop | Good if |
| --- | :---: | :---: | :---: |
| **First Contentful Paint** (first pixels) | 🟢 1.7 s | 🟢 0.4 s | ≤ 1.8 s |
| **Largest Contentful Paint** (main content visible) | 🟢 2.1 s | 🟢 0.5 s | ≤ 2.5 s |
| **Total Blocking Time** (page unresponsive) | 🟢 24 ms | 🟢 0 ms | ≤ 200 ms |
| **Cumulative Layout Shift** (content jumping) | 🟢 0 | 🟢 0 | ≤ 0.1 |
| **Speed Index** (how fast it fills in) | 🟢 1.7 s | 🟢 0.6 s | ≤ 3.4 s |
| **Page weight** (compressed) | 241 KiB | 263 KiB | |

🟢 within Google's "good" range · figures are medians

### What "mobile" means in this test

The mobile test does not simply run on a fast laptop. Lighthouse slows the machine down to imitate a mid-range phone on a weak connection:

- **Device**: a Moto G Power (2022), 412 × 823 px screen at 1.75× pixel density.
- **Network**: simulated slow 4G, about **1.6 Mbps** download with **150 ms** of round-trip latency.
- **CPU**: slowed down **4×**, so JavaScript takes four times as long to run as it does on the laptop.

The desktop test uses a 1350 × 940 px screen, 10 Mbps, 40 ms latency and no CPU slowdown.

Run it yourself with [PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fcompany-profile-by-yusuf-ar.vercel.app%2F&form_factor=mobile) or `npx lighthouse https://company-profile-by-yusuf-ar.vercel.app/ --form-factor=mobile`. A single run can move by a few points with network conditions, which is why the figures above are medians.

### How it stays fast

- **Fonts** are self-hosted and subsetted to the weights actually used (Outfit 600, Quicksand 400–700) with `font-display: swap` ([src/index.css](src/index.css)), instead of linking Google's CSS — this removes a whole external origin (DNS + TLS + request) from the critical path.
- **Hero image** is preloaded from the top of `<head>` with `fetchPriority="high"`, and served responsively: a 1040px-wide variant for mobile viewports, the full 1488px one for desktop, via matching `srcset`/`sizes` on the `<img>` and `imagesrcset`/`imagesizes` on the preload link itself ([index.html](index.html), [HeroSection.tsx](src/components/sections/HeroSection.tsx)).
- Below-the-fold images use `loading="lazy"`; the hero image and nav logo stay eager since they're always in the initial viewport.
- The portfolio preview, service detail, and contact form success/failure modals are code-split with `React.lazy` + `Suspense`, so their JS only loads when a user actually opens one.
- Icons (menu, close, theme toggle) are hand-vectorized SVGs rather than raster PNGs, cutting their weight by roughly 5–10×.
- The industry switcher's image has a fixed `aspect-ratio` and fades in on `onLoad`, so switching tabs never shifts the layout while the next image loads.

## Project structure

```
src/
├── assets/           # Images, icons and logos
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, About, Service, Portfolio, ...)
│   └── ui/           # Reusable UI pieces (cards, modals, form fields, ...)
├── context/          # Theme context and provider
├── data/             # Static content per section
├── hooks/            # useCountUp, useModalA11y
├── pages/            # Home
├── test/             # Vitest setup
└── types/            # Shared types
```

## Deployment

Deployed on Vercel, auto-deploying from `main`. It's a fully static build with no environment variables or routing config to set up.

## Author

Built by [Yusuf AR](https://github.com/Yusuf-98).

## License

Licensed under the [MIT License](LICENSE).
