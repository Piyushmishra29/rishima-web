import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { GetInTouch } from "@/components/get-in-touch";
import { projects } from "@/lib/content";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work — Reels, Campaigns, UGC & DVCs",
  description:
    "Selected work by Rishima Menon — reels that drove 3M+ views, UGC that cut CPC 38%, campaigns that sold buildings. F&B, skincare, fashion, lifestyle, real estate.",
  alternates: { canonical: "/work/" },
  openGraph: {
    title: "Work — Rishima Menon",
    description:
      "Selected work — reels, campaigns, UGC, editorial photography, DVCs.",
    url: "/work/",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={`wrap ${styles.inner}`}>
          <span className="eyebrow">Selected work · {projects.length} pieces</span>
          <h1 className={styles.headline}>
            Briefs that <span className="italic-display">went well.</span>
          </h1>
          <p className={styles.sub}>
            A working portfolio. Some of these are mine. Some are for clients.
            All of them taught me something &mdash; usually that the brief was
            different from what was written down.
          </p>
        </div>
      </section>

      <section className={styles.grid} aria-label="Project list">
        <div className={`wrap ${styles.gridInner} reveal-stagger`}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} size="md" />
          ))}
        </div>
      </section>

      <div className="wrap reveal">
        <GetInTouch />
      </div>
    </>
  );
}
