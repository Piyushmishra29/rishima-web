<div align="center">

# rishima-web

**The source for [rishimamenon.com](#) — a portfolio for Rishima Menon.**
Marketer · Creator · London → India.
*Content people actually want to watch.*

![home page screenshot](docs/images/og-card.png)

[![next.js](https://img.shields.io/badge/Next.js-16.2-000000?style=flat&logo=next.js)](https://nextjs.org)
[![react](https://img.shields.io/badge/React-19.2-149ECA?style=flat&logo=react)](https://react.dev)
[![typescript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![license](https://img.shields.io/badge/license-MIT-1F1C18?style=flat)](#license)
[![issues](https://img.shields.io/github/issues/Piyushmishra29/rishima-web?style=flat&color=B60205)](https://github.com/Piyushmishra29/rishima-web/issues)

</div>

---

## The pitch

A multi-page Next.js static site that does two jobs at once:

- Sells Rishima to **brands** who want to hire her as a creator (UGC, reels, DVCs).
- Sells Rishima to **clients** who want a freelance marketer with opinions.

Asks for one thing only: **a brief**. No newsletter pop-up. No exit-intent modal. No cookie-banner guilt-trip. Type something, hit Send, get a reply within 48 hours.

The design is **cream paper + pastel + soft black**. The photography is deliberately darker than the surface — so the page looks like a magazine spread, not a Canva template. Typography is **Fraunces** (warm display serif) and **Inter** (clean grotesque body), both self-hosted via `next/font/google`.

---

## The palette

<table>
<tr>
<td align="center"><img src="https://placehold.co/120x120/F4ECDF/F4ECDF.png" alt="cream"><br><sub><code>#F4ECDF</code><br>cream — paper</sub></td>
<td align="center"><img src="https://placehold.co/120x120/A6BCD0/A6BCD0.png" alt="blue"><br><sub><code>#A6BCD0</code><br>dusty blue — accent</sub></td>
<td align="center"><img src="https://placehold.co/120x120/EBC8B7/EBC8B7.png" alt="peach"><br><sub><code>#EBC8B7</code><br>blush peach — warmth</sub></td>
<td align="center"><img src="https://placehold.co/120x120/C2D2AF/C2D2AF.png" alt="sage"><br><sub><code>#C2D2AF</code><br>sage — grounded</sub></td>
<td align="center"><img src="https://placehold.co/120x120/A48FAA/A48FAA.png" alt="lavender"><br><sub><code>#A48FAA</code><br>lavender — italic flourishes</sub></td>
<td align="center"><img src="https://placehold.co/120x120/1F1C18/1F1C18.png" alt="ink"><br><sub><code>#1F1C18</code><br>soft black — type</sub></td>
</tr>
</table>

Each service tile cycles through a different pastel — gives the grid a satisfying rhythm without anything ever clashing.

---

## What it looks like

### Home

![home](docs/images/home-desktop.jpg)

### Selected work

![work index](docs/images/work-desktop.jpg)

### Case study

![case study](docs/images/case-desktop.jpg)

### About

![about](docs/images/about-desktop.jpg)

### Contact

![contact](docs/images/contact-desktop.jpg)

### Mobile (390px)

<img src="docs/images/home-mobile.jpg" alt="mobile home" width="320">

---

## Site map

```mermaid
graph LR
    classDef static fill:#F4ECDF,stroke:#1F1C18,color:#1F1C18;
    classDef dynamic fill:#A48FAA,stroke:#1F1C18,color:#F4ECDF;
    classDef seo fill:#EBC8B7,stroke:#1F1C18,color:#1F1C18;

    Home["/<br/>Home"]:::static
    Work["/work/<br/>Index"]:::static
    Case1["/work/fb-launch-reel/"]:::dynamic
    Case2["/work/skincare-ugc/"]:::dynamic
    Case3["/work/real-estate-launch/"]:::dynamic
    Case4["/work/fashion-editorial/"]:::dynamic
    Case5["/work/dvc-acting/"]:::dynamic
    Case6["/work/lifestyle-personal/"]:::dynamic
    About["/about/"]:::static
    Contact["/contact/"]:::static
    NotFound["/404"]:::static
    Sitemap["/sitemap.xml"]:::seo
    Robots["/robots.txt"]:::seo
    OG["/opengraph-image"]:::seo

    Home --> Work
    Home --> About
    Home --> Contact
    Work --> Case1
    Work --> Case2
    Work --> Case3
    Work --> Case4
    Work --> Case5
    Work --> Case6
    Case1 -.next.-> Case2
    Case2 -.next.-> Case3
    Case3 -.next.-> Case4
    Case4 -.next.-> Case5
    Case5 -.next.-> Case6
    Case6 -.next.-> Case1

    Home --- Sitemap
    Sitemap --- Robots
    Robots --- OG
```

Static export → 16 prerendered HTML pages, all routes hashed and gzipped.

---

## Component & data flow

```mermaid
graph TD
    classDef layout fill:#A6BCD0,stroke:#1F1C18,color:#1F1C18;
    classDef page fill:#F4ECDF,stroke:#1F1C18,color:#1F1C18;
    classDef component fill:#C2D2AF,stroke:#1F1C18,color:#1F1C18;
    classDef data fill:#EBC8B7,stroke:#1F1C18,color:#1F1C18;
    classDef client fill:#A48FAA,stroke:#1F1C18,color:#F4ECDF;

    Layout[app/layout.tsx]:::layout
    Fonts[app/fonts.ts<br/>Fraunces + Inter]:::layout
    Globals[app/globals.css<br/>palette + grain]:::layout
    Nav[components/nav.tsx]:::component
    Footer[components/footer.tsx]:::component

    Home[app/page.tsx]:::page
    Work[app/work/page.tsx]:::page
    Case[app/work/&#91;slug&#93;/page.tsx]:::page
    About[app/about/page.tsx]:::page
    Contact[app/contact/page.tsx]:::page

    Hero[components/hero.tsx]:::component
    ProjectCard[components/project-card.tsx]:::component
    ServiceCard[components/service-card.tsx]:::component
    CtaBand[components/cta-band.tsx]:::component
    ContactForm[components/contact-form.tsx<br/>'use client']:::client

    Content[(lib/content.ts<br/>services · projects · socials)]:::data

    Layout --> Fonts
    Layout --> Globals
    Layout --> Nav
    Layout --> Footer
    Layout --> Home
    Layout --> Work
    Layout --> Case
    Layout --> About
    Layout --> Contact

    Home --> Hero
    Home --> ProjectCard
    Home --> ServiceCard
    Home --> CtaBand

    Work --> ProjectCard
    Work --> CtaBand

    Case --> CtaBand

    About --> ServiceCard
    About --> CtaBand

    Contact --> ContactForm

    Content -.-> Home
    Content -.-> Work
    Content -.-> Case
    Content -.-> About
    Content -.-> ContactForm
    Content -.-> Footer
```

Everything except `ContactForm` is a server component. `lib/content.ts` is the single source of truth for services, projects, and social links — edit there, the whole site updates.

---

## Build pipeline

```mermaid
graph LR
    classDef src fill:#F4ECDF,stroke:#1F1C18,color:#1F1C18;
    classDef build fill:#C2D2AF,stroke:#1F1C18,color:#1F1C18;
    classDef deploy fill:#A48FAA,stroke:#1F1C18,color:#F4ECDF;

    Src[/source<br/>app + components + lib/]:::src
    Photos[/public/media/photos<br/>JPGs/]:::src
    Build["next build<br/>(Turbopack)"]:::build
    Out["/out/<br/>static HTML + JS + CSS"]:::build
    Deploy[deploy.mjs<br/>basic-ftp]:::deploy
    Host[(Hostinger<br/>LiteSpeed + .htaccess)]:::deploy

    Src --> Build
    Photos --> Build
    Build --> Out
    Out --> Deploy
    Deploy --> Host
```

---

## Tech, plainly

| Layer        | Tool                                              |
|--------------|---------------------------------------------------|
| Framework    | **Next.js 16** — App Router, static export        |
| Library      | **React 19** — mostly server, one client island   |
| Language     | **TypeScript 5** — strict                         |
| Styles       | **CSS Modules + custom properties** (no Tailwind) |
| Fonts        | **Fraunces + Inter** via `next/font/google`       |
| Form relay   | **Web3Forms** — free, no backend                  |
| Deploy       | **`basic-ftp`** — six lines mirror `out/` to FTP  |
| Hosting      | **Hostinger** — LiteSpeed shared, with `.htaccess`|

Build output is `out/`. Drag-and-droppable into any folder labelled `public_html`. Will outlive most SaaS providers.

---

## Run it

```bash
pnpm install
pnpm dev          # next dev   → http://localhost:3000
pnpm build        # static export → ./out/
pnpm preview      # serve out  → http://localhost:4000
pnpm deploy       # build + ftp mirror to Hostinger (needs env, see below)
```

---

## Deploy

Static export. Drops `out/` onto any static host.

For the Hostinger pipeline, create `.env.local`:

```env
FTP_HOST=<the host>
FTP_USER=<the user>
FTP_PASS=<the password>
```

Then `pnpm deploy` and walk away.

Plain FTP (port 21) because Hostinger's shared plan still hasn't shipped FTPS on every box. `public/.htaccess` handles the LiteSpeed side: HSTS, nosniff, gzip, year-long cache on hashed assets.

---

## Folder map

```
app/
  ├─ page.tsx              ← home
  ├─ layout.tsx            ← <html>, metadata, Nav + Footer
  ├─ fonts.ts              ← Fraunces + Inter, swap-loaded
  ├─ globals.css           ← the entire palette lives here
  ├─ opengraph-image.tsx   ← 1200×630 OG built at build time
  ├─ sitemap.ts            ← all routes, force-static
  ├─ robots.ts             ← allow everything
  ├─ not-found.tsx         ← 404
  ├─ work/
  │  ├─ page.tsx           ← /work index
  │  └─ [slug]/page.tsx    ← /work/:slug case study
  ├─ about/page.tsx
  └─ contact/page.tsx

components/
  ├─ nav.tsx + .module.css
  ├─ footer.tsx + .module.css
  ├─ hero.tsx + .module.css
  ├─ project-card.tsx + .module.css
  ├─ service-card.tsx + .module.css
  ├─ cta-band.tsx + .module.css
  └─ contact-form.tsx + .module.css   ← only client component

lib/
  └─ content.ts            ← services · projects · socials. one source of truth.

public/
  ├─ .htaccess             ← LiteSpeed config: HSTS, gzip, cache
  └─ media/photos/         ← editorial + lifestyle stills

docs/images/               ← README screenshots
deploy.mjs                 ← basic-ftp mirror script
next.config.ts             ← output: "export", trailingSlash: true
```

---

## Editorial choices

A small list of decisions made on purpose:

- **Cream, not white.** White is a browser default. Cream is a paper.
- **Fraunces with `SOFT: 100, WONK: 1` in italics** — gives those moments the slight handwritten warble that pulls the whole site closer to *magazine* and further from *template*.
- **The hero portrait is in daylight. The work-section photos are darker.** The contrast is the move.
- **A faint SVG paper-grain** overlays the body at `opacity: 0.05`. Without it, the cream reads as flat. With it, paper.
- **The CTA on every page is "Work with me"**, not "Get in touch". One has gravity. One sounds like a contact form.
- **No floating WhatsApp button.** If you want her, write a brief.

---

## Adding work

Open `lib/content.ts`. Append to the `projects` array:

```ts
{
  slug: "kebab-cased-slug",
  brand: "Brand name",
  title: "Sentence that earns the click",
  tag: "Creator" | "Marketing" | "Photography" | "DVC" | "Editorial",
  outcome: "One or two lines. Numbers help.",
  cover: "/media/photos/your-cover.jpg",
  tint: "var(--peach)" | "var(--blue)" | "var(--sage)" | "var(--lavender)",
  year: 2026,
  role: "Concept · Script · Edit",
  brief: "Why it existed.",
  approach: ["Step one.", "Step two.", "Step three."],
  results: [
    { label: "Reach", value: "1.4M" },
    { label: "CPC", value: "₹6.20" }
  ],
  gallery: ["/media/photos/a.jpg", "/media/photos/b.jpg"]
}
```

Drop the images in `public/media/photos/`. Rebuild. That's the entire CMS.

---

## Performance

- Static HTML, **~11 MB total** across 16 routes (photos included).
- Fonts self-hosted with `display: swap`, two woff2 files, ~80 KB combined.
- **No client JS on the home, work, work/[slug], or about pages** — only the Contact page hydrates one form component.
- LiteSpeed cache + gzip means each route is one round trip.

### Current Lighthouse (pre-launch audit)

| Route                   | Perf | A11y | SEO | BP  |
|-------------------------|------|------|-----|-----|
| `/` desktop             | 82   | 96   | 100 | 100 |
| `/` mobile              | 74   | 96   | 100 | 100 |
| `/work/:slug` desktop   | 93   | 94   | 100 | 100 |
| `/work/:slug` mobile    | 74   | 94   | 100 | 100 |

The target is **≥95 / 100 / 100 / 100**. We have a [pre-launch audit punch-list](https://github.com/Piyushmishra29/rishima-web/issues) — most of the perf gap is photo compression + WebP twins ([#5](https://github.com/Piyushmishra29/rishima-web/issues/5)), and most of the a11y gap is the cream-on-lavender CTA band ([#2](https://github.com/Piyushmishra29/rishima-web/issues/2)).

---

## Pre-launch punch-list

Eight critical items block launch (see [`label:critical`](https://github.com/Piyushmishra29/rishima-web/labels/critical)):

1. [#1](https://github.com/Piyushmishra29/rishima-web/issues/1) Mobile nav links hidden below 480px
2. [#2](https://github.com/Piyushmishra29/rishima-web/issues/2) CTA-band contrast fails WCAG AA (2.53:1)
3. [#3](https://github.com/Piyushmishra29/rishima-web/issues/3) Case studies are fictional — flag or replace
4. [#4](https://github.com/Piyushmishra29/rishima-web/issues/4) Hero + cover photos crop faces
5. [#5](https://github.com/Piyushmishra29/rishima-web/issues/5) Hero LCP 18.7s on mobile
6. [#6](https://github.com/Piyushmishra29/rishima-web/issues/6) Contact form Send button spans full column
7. [#7](https://github.com/Piyushmishra29/rishima-web/issues/7) Domain hardcoded in 9 places
8. [#8](https://github.com/Piyushmishra29/rishima-web/issues/8) Web3Forms key is placeholder

Plus 16 more triaged at `high`, `medium`, `low`. Track here: [github.com/Piyushmishra29/rishima-web/issues](https://github.com/Piyushmishra29/rishima-web/issues).

---

## Credits

- **Built by**: Piyush Mishra → [piyushmishra.online](https://piyushmishra.online)
- **Talent / words / everything**: Rishima Menon → [@rishimamenon](https://instagram.com/rishimamenon)
- **Photography**: hers, plus whichever friend was holding the camera.
- **Type**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (Undercase Type, OFL) · [Inter](https://fonts.google.com/specimen/Inter) (Rasmus Andersson, OFL)

---

## License

The code: **MIT**, take it.
The photographs: **© Rishima Menon**, ask first.

<div align="center">

`· end of file ·`

</div>
