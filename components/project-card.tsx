import Link from "next/link";
import type { Project } from "@/lib/content";
import styles from "./project-card.module.css";

export function ProjectCard({
  project,
  size = "md",
}: {
  project: Project;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Link
      href={`/work/${project.slug}/`}
      className={`${styles.card} ${styles[size]}`}
    >
      <div className={styles.media} style={{ background: project.tint }}>
        {project.cover ? (
          <img
            src={project.cover}
            alt=""
            className={styles.img}
            loading="lazy"
            decoding="async"
            style={
              project.coverPosition
                ? { objectPosition: project.coverPosition }
                : undefined
            }
          />
        ) : (
          <span className={styles.placeholder} aria-hidden="true">
            {project.brand[0]}
          </span>
        )}
      </div>
      <div className={styles.meta}>
        <div className={styles.row}>
          <span className={styles.brand}>{project.brand}</span>
          <span className={styles.tag}>{project.tag}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.outcome}>{project.outcome}</p>
      </div>
    </Link>
  );
}
