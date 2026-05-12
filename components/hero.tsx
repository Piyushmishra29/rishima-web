import Link from "next/link";
import { BIO } from "@/lib/content";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">
            Marketer · Creator · {BIO.trajectory}
          </span>
          <h1 className={styles.headline}>
            Content people <span className="italic-display">actually</span>
            <br /> want to watch.
          </h1>
          <p className={styles.sub}>
            I&rsquo;m {BIO.name} &mdash; freelance marketer and creator. I
            build content and campaigns for brands in F&amp;B, skincare,
            fashion, lifestyle, and real estate. Equally at home behind the
            camera and in front of it.
          </p>
          <div className={styles.actions}>
            <Link href="/contact/" className="btn">
              Work with me →
            </Link>
            <Link href="/work/" className={styles.linky}>
              See selected work →
            </Link>
          </div>
        </div>

        <div className={styles.portrait}>
          <div className={styles.frame} aria-hidden="true" />
          <img
            src="/media/photos/portrait-hero.jpg"
            alt={`Portrait of ${BIO.name}`}
            className={styles.photo}
            width={900}
            height={1200}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className={styles.tag} aria-hidden="true">
            <span className="italic-display">est.</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
