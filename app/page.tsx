import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioHero } from "@/components/portfolio-hero";
import { TabNav } from "@/components/tab-nav";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { GetInTouch } from "@/components/get-in-touch";
import { projects, services, sectors, BIO } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rishima Menon — Freelance Marketer & Creator, Bengaluru",
    description:
      "Hire Rishima Menon — reels people actually watch, UGC that performs, campaigns that move the needle. F&B, skincare, fashion, lifestyle, real estate. Reply in 48h.",
    url: "/",
    type: "profile",
  },
};

const featured = projects.slice(0, 4);
const marqueeItems = [...sectors, ...sectors];

export default function HomePage() {
  return (
    <>
      <PortfolioHero />
      <TabNav />

      <section className={styles.section}>
        <div className={`wrap ${styles.head}`}>
          <span className="eyebrow">Sectors I work across</span>
        </div>
        <div className={`marquee-wrap ${styles.marquee}`} aria-hidden="false">
          <div className="marquee-track">
            {marqueeItems.map((s, i) => (
              <span key={i} className={styles.sector}>
                {s}
                <span className={styles.dot} aria-hidden="true">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        className={`${styles.section} reveal`}
        aria-labelledby="home-work"
      >
        <div className={`wrap ${styles.head}`}>
          <span className="eyebrow">Selected work</span>
          <div className={styles.headRow}>
            <h2 id="home-work">
              A few briefs that <span className="italic-display">went well.</span>
            </h2>
            <Link href="/work/" className={styles.seeAll}>
              See all work →
            </Link>
          </div>
        </div>
        <div className={`wrap ${styles.grid} reveal-stagger`}>
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} size={i === 0 ? "lg" : "md"} />
          ))}
        </div>
      </section>

      <section
        id="services"
        className={`${styles.section} reveal`}
        aria-labelledby="home-services"
      >
        <div className={`wrap ${styles.head}`}>
          <span className="eyebrow">What I do</span>
          <h2 id="home-services">
            Two jobs, <span className="italic-display">one operator.</span>
          </h2>
          <p className={styles.lede}>
            One half of my week is spent building other people&rsquo;s brands. The
            other half is spent building my own. The skills are the same. The
            calendar is the only thing that changes.
          </p>
        </div>
        <div className={`wrap ${styles.servicesGrid} reveal-stagger`}>
          {services.map((s) => (
            <ServiceCard key={s.number} service={s} />
          ))}
        </div>
      </section>

      <section
        className={`${styles.section} reveal`}
        aria-labelledby="home-about"
      >
        <div className={`wrap ${styles.aboutTeaser}`}>
          <div className={styles.aboutCopy}>
            <span className="eyebrow">About</span>
            <h2 id="home-about">
              Marketer by training.
              <br />
              <span className="italic-display">Creator</span> by accident.
            </h2>
            <p>{BIO.summary}</p>
            <Link href="/about/" className="btn btn--ghost">
              Read more <span>→</span>
            </Link>
          </div>
          <div className={styles.aboutImg}>
            <img
              src="/media/photos/portrait-about.jpg"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <div className="wrap reveal">
        <GetInTouch />
      </div>
    </>
  );
}
