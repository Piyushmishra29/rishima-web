import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { projects, services, sectors } from "@/lib/content";
import styles from "./page.module.css";

const featured = projects.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className={styles.section}>
        <div className={`wrap ${styles.head}`}>
          <span className="eyebrow">Sectors I work across</span>
          <h2 className={styles.marquee}>
            {sectors.map((s, i) => (
              <span key={s} className={styles.sector}>
                {s}
                {i < sectors.length - 1 && <span className={styles.dot}>·</span>}
              </span>
            ))}
          </h2>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`wrap ${styles.head}`}>
          <span className="eyebrow">Selected work</span>
          <h2>
            A few briefs that <span className="italic-display">went well.</span>
          </h2>
          <Link href="/work/" className={styles.seeAll}>
            See all work →
          </Link>
        </div>
        <div className={`wrap ${styles.grid}`}>
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} size={i === 0 ? "lg" : "md"} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={`wrap ${styles.head}`}>
          <span className="eyebrow">What I do</span>
          <h2>
            Two jobs, <span className="italic-display">one operator.</span>
          </h2>
          <p className={styles.lede}>
            One half of my week is spent building other people's brands. The
            other half is spent building my own. The skills are the same. The
            calendar is the only thing that changes.
          </p>
        </div>
        <div className={`wrap ${styles.servicesGrid}`}>
          {services.map((s) => (
            <ServiceCard key={s.number} service={s} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={`wrap ${styles.aboutTeaser}`}>
          <div className={styles.aboutCopy}>
            <span className="eyebrow">About</span>
            <h2>
              Marketer by training.
              <br />
              <span className="italic-display">Creator</span> by accident.
            </h2>
            <p>
              I'm Rishima Menon, 24. International Business & Marketing grad
              who accidentally turned being chronically online into a career.
              Started in London, freelancing across India, the brief never
              changes: content people actually want to watch.
            </p>
            <Link href="/about/" className="btn btn--ghost">
              Read more →
            </Link>
          </div>
          <div className={styles.aboutImg}>
            <img src="/media/photos/portrait-about.jpg" alt="" />
          </div>
        </div>
      </section>

      <div className="wrap">
        <CtaBand />
      </div>
    </>
  );
}
