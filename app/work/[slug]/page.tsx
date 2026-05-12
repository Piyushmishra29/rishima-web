import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/content";
import { CtaBand } from "@/components/cta-band";
import styles from "./case.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not found" };
  return {
    title: `${project.title} · ${project.brand}`,
    description: project.outcome,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className={styles.hero} style={{ background: project.tint }}>
        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.meta}>
            <span className={styles.brand}>{project.brand}</span>
            <span className={styles.tag}>{project.tag} · {project.year}</span>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.outcome}>{project.outcome}</p>
          <div className={styles.role}>
            <span className="eyebrow">Role</span>
            <span>{project.role}</span>
          </div>
        </div>
      </section>

      {project.cover && (
        <section className={styles.coverWrap}>
          <div className="wrap">
            <img src={project.cover} alt={project.title} className={styles.cover} />
          </div>
        </section>
      )}

      <section className={styles.body}>
        <div className={`wrap ${styles.bodyGrid}`}>
          {project.brief && (
            <div className={styles.block}>
              <span className="eyebrow">The brief</span>
              <p>{project.brief}</p>
            </div>
          )}

          {project.approach && (
            <div className={styles.block}>
              <span className="eyebrow">Approach</span>
              <ol className={styles.steps}>
                {project.approach.map((step, i) => (
                  <li key={i}>
                    <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {project.results && (
            <div className={styles.block}>
              <span className="eyebrow">What happened</span>
              <div className={styles.results}>
                {project.results.map((r) => (
                  <div key={r.label} className={styles.result}>
                    <span className={styles.resultVal}>{r.value}</span>
                    <span className={styles.resultLabel}>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className={styles.gallery}>
              {project.gallery.map((src, i) => (
                <img key={i} src={src} alt="" loading="lazy" />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={styles.nextWrap}>
        <div className={`wrap ${styles.nextInner}`}>
          <Link href={`/work/${next.slug}/`} className={styles.nextLink}>
            <span className="eyebrow">Next case</span>
            <h3>{next.title}</h3>
            <span className={styles.nextBrand}>{next.brand} ·  {next.tag} →</span>
          </Link>
        </div>
      </section>

      <div className="wrap">
        <CtaBand />
      </div>
    </>
  );
}
