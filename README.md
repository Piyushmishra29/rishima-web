```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║         R I S H I M A   ·   M E N O N                            ║
║         marketer · creator · london → india                      ║
║                                                                  ║
║         content people actually want to watch.                   ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

# rishima-web

This is the source for **rishimamenon.com** — a portfolio for a 24-year-old
International Business & Marketing grad who accidentally turned being
chronically online into a career.

It is also, secretly, a magazine.

---

## What this is

A multi-page Next.js static site that:

- Sells her to **brands** who want to hire her as a creator (UGC, reels, DVCs).
- Sells her to **clients** who want a freelance marketer with opinions.
- Asks for one thing only: a brief. No newsletter pop-up. No exit-intent modal.
  No "we use cookies" guilt trip. Just type something, hit Send, get a reply
  within 48 hours.

The design is **cream paper + pastel + soft black**. The photography is
deliberately darker than the surface — so the page looks like a magazine spread
and not a Canva template. The typography is Fraunces and Inter, both free,
both warm, both already self-hosted by `next/font/google` so no fonts.googleapis
call ever leaves the box.

---

## The stack, plainly

```
Next.js 16            App Router, static export, no server.
React 19              Mostly server components; one client island for the form.
TypeScript            Strict, but unceremonious.
CSS Modules           No Tailwind. Vanilla CSS with custom properties.
Google Fonts          Self-hosted via next/font. Fraunces + Inter.
Web3Forms             Free form-to-email relay. No backend, no Lambda, no rent.
basic-ftp             Six lines of glue that mirror `out/` to Hostinger.
```

Build output is `out/`. Drag-and-droppable into any folder labelled
`public_html`. Will outlive most SaaS providers.

---

## Run it

```bash
pnpm install
pnpm dev          # next dev at http://localhost:3000
pnpm build        # static export → ./out/
pnpm preview      # `npx serve out` at http://localhost:3001
pnpm deploy       # build + ftp mirror to Hostinger (needs env, see below)
```

---

## Deploy

Static export. Drops `out/` onto any static host.

For the actual Hostinger pipeline, create `.env.local` with:

```env
FTP_HOST=<the host>
FTP_USER=<the user>
FTP_PASS=<the password>
```

Then `pnpm deploy` and walk away.

Plain FTP (port 21) because Hostinger's shared plan still hasn't shipped FTPS
on every box. `.htaccess` in `public/` handles the LiteSpeed side: HSTS,
nosniff, gzip, year-long cache on hashed assets.

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
  ├─ work/                 ← /work and /work/[slug]
  ├─ about/                ← /about
  └─ contact/              ← /contact

components/                ← Nav, Footer, Hero, ProjectCard,
                             ServiceCard, CtaBand, ContactForm

lib/
  └─ content.ts            ← services, projects, socials.
                             single source of truth.
                             edit here, the whole site updates.

public/
  ├─ .htaccess             ← LiteSpeed config
  └─ media/photos/         ← editorial + lifestyle stills

deploy.mjs                 ← basic-ftp mirror script
next.config.ts             ← output: "export", trailingSlash: true
```

---

## The palette

```
   cream     ░░░  #F4ECDF   ← the page is paper.
   blue      ▓▓▓  #A6BCD0   ← dusty. accent.
   peach     ▓▓▓  #EBC8B7   ← warm. CTA panels.
   sage      ▓▓▓  #C2D2AF   ← grounded. success states.
   lavender  ▓▓▓  #A48FAA   ← the loud one. CTA band, italic flourishes.
   muted     ░░░  #E5DCC8   ← cards. dividers.
   ink       ███  #1F1C18   ← soft black. body, buttons, all type.
```

Each service tile picks a different pastel from the same palette — gives the
grid a satisfying rhythm without anything ever clashing.

---

## Editorial choices

A small list of decisions made on purpose:

- Cream, not white. White is a browser default. Cream is a paper.
- Fraunces is set with `SOFT: 100, WONK: 1` in italics — gives those moments
  the slight handwritten warble that pulls the whole site closer to *magazine*
  and further from *template*.
- The hero portrait is in daylight. The work-section photos are darker. The
  contrast is the move.
- A faint SVG paper-grain overlays the body at `opacity: 0.05`. Without it, the
  cream reads as flat. With it, it reads as paper.
- The CTA on every page is "Work with me", not "Get in touch". One has gravity.
  One sounds like a contact form.
- No floating WhatsApp button. If you want her, write a brief.

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

## Performance notes

- Static HTML, ~11 MB total across 16 routes (photos included).
- Fonts self-hosted with `display: swap`, two woff2 files, ~80 KB combined.
- No client JS on the home, work, work/[slug], or about pages — only the
  Contact page hydrates one form component.
- LiteSpeed cache + gzip means each route is one round trip.
- Lighthouse on the deployed build aims for ≥95 perf / 100 SEO / 100 a11y.
  If a number drops, the build is wrong, not the target.

---

## Credits

- **Built by**: Piyush Mishra → [piyushmishra.online](https://piyushmishra.online)
- **Talent / words / everything**: Rishima Menon → [@rishimamenon](https://instagram.com/rishimamenon)
- **Photography**: hers, plus whichever friend was holding the camera.
- **Type**: [Fraunces](https://fonts.google.com/specimen/Fraunces) (Undercase Type, OFL).
  [Inter](https://fonts.google.com/specimen/Inter) (Rasmus Andersson, OFL).

---

## License

The code: MIT, take it.
The photographs: © Rishima Menon, ask first.

```
                                                              · end of file ·
```
