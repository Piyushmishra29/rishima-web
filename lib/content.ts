export type Service = {
  number: string;
  kind: "Marketer" | "Creator";
  title: string;
  body: string;
  bullets: string[];
  tint: string;
};

export type Project = {
  slug: string;
  brand: string;
  title: string;
  tag: "Creator" | "Marketing" | "Photography" | "DVC" | "Editorial";
  outcome: string;
  cover?: string;
  tint: string;
  year: number;
  role: string;
  brief?: string;
  approach?: string[];
  results?: { label: string; value: string }[];
  gallery?: string[];
};

export type Social = {
  label: string;
  url: string;
  handle: string;
};

export const palette = {
  blue: "#a6bcd0",
  peach: "#ebc8b7",
  sage: "#c2d2af",
  lavender: "#a48faa",
  muted: "#e5dcc8",
};

export const services: Service[] = [
  {
    number: "01",
    kind: "Marketer",
    title: "Social media management",
    body: "End-to-end ownership of IG and YT — calendars, scripts, posting, replies, the unglamorous bits. Built to make a brand sound like a person.",
    bullets: ["Content calendar", "Posting + community", "Monthly reporting", "Trend pickups"],
    tint: "var(--blue)",
  },
  {
    number: "02",
    kind: "Marketer",
    title: "Content strategy",
    body: "What to make, who it's for, why it lands. The thinking layer above the posting — so the calendar doesn't get filled with filler.",
    bullets: ["Audience + voice", "Pillars + hooks", "Distribution map", "Performance review"],
    tint: "var(--sage)",
  },
  {
    number: "03",
    kind: "Creator",
    title: "Creative content production",
    body: "Reels, scripts, shoots, edits. Done-for-you content built for the algorithm but written for a human watching at 2 AM.",
    bullets: ["Concept + script", "On-camera (me or yours)", "Edit + post", "Format-native delivery"],
    tint: "var(--peach)",
  },
  {
    number: "04",
    kind: "Marketer",
    title: "Paid ads",
    body: "Meta + Google. Performance media that doesn't feel like media. Creative-first, never the ten-tabs-of-dashboards trap.",
    bullets: ["Creative testing", "Audiences + retargeting", "Funnel build", "Weekly reads"],
    tint: "var(--lavender)",
  },
  {
    number: "05",
    kind: "Marketer",
    title: "Brand consulting / 1-1",
    body: "If you're closer to the start of the curve — a one-time deep dive on positioning, voice, and your next 90 days of content. Walk out with a plan.",
    bullets: ["90-min strategy call", "Recorded for replay", "Written follow-up", "30-day support"],
    tint: "var(--muted)",
  },
  {
    number: "06",
    kind: "Creator",
    title: "Brand collaborations",
    body: "I shoot, edit and post on my own channels for brands across F&B, skincare, fashion, lifestyle, real estate. Reach Q3 on request.",
    bullets: ["IG reels + carousels", "UGC raw files", "DVC / TVC", "Long-form (YT)"],
    tint: "var(--blue)",
  },
];

export const projects: Project[] = [
  {
    slug: "fb-launch-reel",
    brand: "F&B Brand",
    title: "Launch reels that didn't need a CTA",
    tag: "Creator",
    outcome: "Six reels, 3.1M views, 4.2% follow-rate. Conversion measured the only way it should be — at the till.",
    cover: "/media/photos/editorial-1.jpg",
    tint: "var(--peach)",
    year: 2025,
    role: "Concept · Script · Talent · Edit",
    brief:
      "A new restaurant in Bengaluru needed to feel discovered, not advertised. The brief: launch us without launching us.",
    approach: [
      "Mapped the dish-by-dish story across six reels — order matters when you're building an arc.",
      "Shot all six in two evenings. No agency crew. Phone + ring light + the actual chef.",
      "Wrote captions that read like a friend's recommendation. No emojis. No hashtags after day three.",
    ],
    results: [
      { label: "Reach", value: "3.1M" },
      { label: "Follows", value: "+8,400" },
      { label: "Avg watch", value: "62%" },
      { label: "Bookings", value: "Sold out 11 nights" },
    ],
    gallery: ["/media/photos/editorial-1.jpg", "/media/photos/lifestyle-1.jpg"],
  },
  {
    slug: "skincare-ugc",
    brand: "Skincare Label",
    title: "UGC that didn't smell like UGC",
    tag: "Creator",
    outcome: "12-asset bank, used across paid and organic. Cost-per-click dropped 38% in two weeks.",
    cover: "/media/photos/lifestyle-2.jpg",
    tint: "var(--sage)",
    year: 2025,
    role: "Talent · Script · Edit",
    brief:
      "A homegrown skincare brand needed UGC that didn't sound like a pitch. Twelve assets, three weeks, paid-ready files.",
    approach: [
      "Used the product for a week before shooting anything. Notes, not scripts.",
      "Shot everything as if I were FaceTiming a friend who asked what I was using.",
      "Delivered raw + cut versions so paid could test thumbnails and openings.",
    ],
    results: [
      { label: "Assets", value: "12" },
      { label: "CPC change", value: "−38%" },
      { label: "Save rate", value: "+2.1×" },
    ],
    gallery: ["/media/photos/lifestyle-2.jpg", "/media/photos/lifestyle-3.jpg"],
  },
  {
    slug: "real-estate-launch",
    brand: "Real-estate developer",
    title: "Selling a building like a magazine",
    tag: "Marketing",
    outcome: "Full launch comms, social, paid, lookbook. 220 leads in week one. The sales team had a sit-down.",
    cover: "/media/photos/lifestyle-1.jpg",
    tint: "var(--blue)",
    year: 2025,
    role: "Strategy · Content · Paid",
    brief:
      "A premium development needed to sound like a brand, not a brochure. Two months. Soft launch to hard.",
    approach: [
      "Built the voice first — fewer adjectives, more rooms.",
      "Lookbook-style organic. Paid ran lifestyle creatives, not floor plans.",
      "Inbound form rewritten so the field that mattered came first.",
    ],
    results: [
      { label: "Leads (wk 1)", value: "220" },
      { label: "CPL", value: "₹412" },
      { label: "Time on page", value: "3m 41s" },
    ],
    gallery: ["/media/photos/lifestyle-1.jpg", "/media/photos/editorial-3.jpg"],
  },
  {
    slug: "fashion-editorial",
    brand: "Fashion · Editorial",
    title: "Black saree, brick wall, no notes",
    tag: "Editorial",
    outcome: "Personal shoot, picked up by the label. Sometimes the best brief is the one you wrote for yourself.",
    cover: "/media/photos/editorial-2.jpg",
    tint: "var(--lavender)",
    year: 2024,
    role: "Concept · Talent",
    brief:
      "An editorial built around a single look. Heritage architecture, candle-warm light, one outfit, one stance.",
    approach: [
      "Storyboarded on a Saturday, shot on a Sunday. Two-person crew.",
      "Lit with what the building already had — windows, doors, candles.",
      "Edited in a single sitting. No retouching past dodge-and-burn.",
    ],
    results: [
      { label: "Frames kept", value: "11 of 240" },
      { label: "Used by", value: "the label" },
    ],
    gallery: ["/media/photos/editorial-2.jpg", "/media/photos/editorial-3.jpg"],
  },
  {
    slug: "dvc-acting",
    brand: "DVC · Acting",
    title: "On camera",
    tag: "DVC",
    outcome: "Lead in three direct-video commercials across F&B and lifestyle. Equally at home in front of a lens.",
    cover: "/media/photos/lifestyle-3.jpg",
    tint: "var(--peach)",
    year: 2024,
    role: "On-screen talent",
    brief:
      "Three DVCs for client work. Same person who writes the script — sometimes also the one delivering it.",
    approach: [
      "Sat in on every pre-pro. The lines worked because they were rewritten on set.",
      "Hit marks. Hit takes. Walked out with the dailies in my drive.",
    ],
    results: [
      { label: "DVCs", value: "3" },
      { label: "Run length", value: "6 weeks each" },
    ],
    gallery: ["/media/photos/lifestyle-3.jpg"],
  },
  {
    slug: "lifestyle-personal",
    brand: "Personal brand",
    title: "Fashion, skincare, lifestyle — mine",
    tag: "Creator",
    outcome: "Built my own page around what I actually wear, use, and care about. Slower than chasing trends. Better.",
    cover: "/media/photos/portrait-about.jpg",
    tint: "var(--sage)",
    year: 2025,
    role: "Everything",
    brief:
      "While building other people's brands I built my own. No virality goals — just the steady, honest work of showing up.",
    approach: [
      "One pillar at a time: fashion, then skincare, then lifestyle.",
      "Wrote captions before shooting. Always.",
      "Said no to collabs that didn't fit. The follow count moved slower. The DM quality didn't.",
    ],
    results: [
      { label: "Pillars", value: "3" },
      { label: "Brands DM'd", value: "more than I reply to" },
    ],
    gallery: ["/media/photos/portrait-about.jpg", "/media/photos/portrait-hero.jpg"],
  },
];

export const socials: Social[] = [
  { label: "Instagram", handle: "@rishimamenon", url: "https://instagram.com/rishimamenon" },
  { label: "LinkedIn", handle: "Rishima Menon", url: "https://www.linkedin.com/in/rishima-menon/" },
  { label: "Email", handle: "hello@rishimamenon.com", url: "mailto:hello@rishimamenon.com" },
];

export const sectors = ["F&B", "Skincare", "Fashion", "Lifestyle", "Real estate"];

export const credentials = [
  "International Business & Marketing grad",
  "Started at a marketing agency in London",
  "Now freelancing across India and beyond",
  "Acted in 3 DVCs",
  "Built and grown brands in 5 sectors",
];
