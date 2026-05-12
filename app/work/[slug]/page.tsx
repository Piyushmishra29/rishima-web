import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/content";
import { CtaBand } from "@/components/cta-band";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SITE_URL, SITE_NAME } from "@/lib/site";
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

  const description = `${project.brand} — ${project.outcome}`;
  const ogImage = project.cover
    ? `${SITE_URL}${project.cover}`
    : `${SITE_URL}/opengraph-image`;

  return {
    title: `${project.title} · ${project.brand}`,
    description,
    alternates: { canonical: `/work/${slug}/` },
    openGraph: {
      title: `${project.title} — ${project.brand}`,
      description,
      url: `/work/${slug}/`,
      type: "article",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.brand}`,
      description,
      images: [ogImage],
    },
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
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Work", url: `${SITE_URL}/work/` },
          { name: project.title, url: `${SITE_URL}/work/${slug}/` },
        ]}
      />

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
        <div className={styles.coverWrap}>
          <div className="wrap">
            <img
              src={project.cover}
              alt=""
              className={styles.cover}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={
                project.coverPosition
                  ? { objectPosition: project.coverPosition }
                  : undefined
              }
            />
          </div>
        </div>
      )}

      <section className={styles.body}>
        <div className={`wrap ${styles.bodyGrid}`}>
          {project.brief && (
            <div className={styles.block}>
              <h2 className="eyebrow">The brief</h2>
              <p>{project.brief}</p>
            </div>
          )}

          {project.approach && (
            <div className={styles.block}>
              <h2 className="eyebrow">Approach</h2>
              <ol className={styles.steps}>
                {project.approach.map((step, i) => (
                  <li key={i}>
                    <span className={styles.stepNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {project.results && (
            <div className={styles.block}>
              <h2 className="eyebrow">What happened</h2>
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
                <img
                  key={i}
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <nav className={styles.nextWrap} aria-label="Case navigation">
        <div className={`wrap ${styles.nextInner}`}>
          <Link href={`/work/${prev.slug}/`} className={styles.navCase}>
            <span className="eyebrow">← Previous</span>
            <h3>{prev.title}</h3>
            <span className={styles.navBrand}>{prev.brand} · {prev.tag}</span>
          </Link>
          <Link
            href={`/work/${next.slug}/`}
            className={`${styles.navCase} ${styles.navCaseRight}`}
          >
            <span className="eyebrow">Next →</span>
            <h3>{next.title}</h3>
            <span className={styles.navBrand}>{next.brand} · {next.tag}</span>
          </Link>
        </div>
      </nav>

      <div className="wrap">
        <CtaBand />
      </div>
    </>
  );
}
