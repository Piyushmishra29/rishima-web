import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";

export const dynamic = "force-static";

const BASE = "https://rishimamenon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, priority: 1.0 },
    { url: `${BASE}/work/`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/about/`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/contact/`, lastModified: now, priority: 0.8 },
  ];
  const cases: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/work/${p.slug}/`,
    lastModified: now,
    priority: 0.6,
  }));
  return [...fixed, ...cases];
}
