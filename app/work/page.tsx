import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/lib/content";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work — Selected reels, campaigns & editorial",
  description:
    "Selected work — creator collabs, marketing case studies, editorial photography, DVCs.",
  alternates: { canonical: "/work/" },
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
        <div className={`wrap ${styles.gridInner}`}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} size="md" />
          ))}
        </div>
      </section>

      <div className="wrap">
        <CtaBand />
      </div>
    </>
  );
}
