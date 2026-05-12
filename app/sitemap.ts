import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// Stable lastModified per build — kept literal so deploys don't churn the sitemap.
const LAST_MOD = "2026-05-12";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: LAST_MOD, priority: 1.0 },
    { url: `${SITE_URL}/work/`, lastModified: LAST_MOD, priority: 0.9 },
    { url: `${SITE_URL}/about/`, lastModified: LAST_MOD, priority: 0.7 },
    { url: `${SITE_URL}/contact/`, lastModified: LAST_MOD, priority: 0.8 },
  ];
  const cases: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}/`,
    lastModified: LAST_MOD,
    priority: 0.6,
  }));
  return [...fixed, ...cases];
}
