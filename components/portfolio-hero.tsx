import Link from "next/link";
import { BIO } from "@/lib/content";
import styles from "./portfolio-hero.module.css";

export function PortfolioHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-wordmark">
      <div className={`wrap ${styles.inner}`}>
        <h1 id="hero-wordmark" className={styles.wordmark}>
          <span className={`${styles.wordmarkText} italic-display`}>Portfolio</span>
        </h1>

        <div className={styles.signature}>
          <span className={styles.dash} aria-hidden="true">—</span>
          <span className={`${styles.signatureName} italic-display`}>
            {BIO.name}
          </span>
          <span className={styles.dash} aria-hidden="true">—</span>
        </div>

        <span className={styles.pill}>2026</span>

        <div className={styles.portraitWrap}>
          <div className={styles.portraitGlow} aria-hidden="true" />
          <img
            src="/media/photos/portrait-cutout.png"
            alt={`Portrait of ${BIO.name}`}
            className={styles.portrait}
            width={800}
            height={1066}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <p className={styles.tagline}>
          Content people <span className="italic-display">actually</span> want to watch.
        </p>

        <p className={styles.sub}>
          Freelance marketer + creator behind reels, UGC and campaigns for brands in
          F&amp;B, skincare, fashion, lifestyle, and real estate. {BIO.trajectory}.
        </p>

        <div className={styles.actions}>
          <Link href="/contact/" className="btn">
            Work with me <span>→</span>
          </Link>
          <Link href="/work/" className={styles.linky}>
            See selected work →
          </Link>
        </div>
      </div>
    </section>
  );
}
