import Link from "next/link";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Marketer · Creator · London → India</span>
          <h1 className={styles.headline}>
            Content people <span className="italic-display">actually</span>
            <br /> want to watch.
          </h1>
          <p className={styles.sub}>
            I'm Rishima Menon — freelance marketer and creator. I build content
            and campaigns for brands in F&B, skincare, fashion, lifestyle, and
            real estate. Equally at home behind the camera and in front of it.
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
            alt="Rishima Menon portrait"
            className={styles.photo}
            width={900}
            height={1200}
            loading="eager"
          />
          <div className={styles.tag}>
            <span className="italic-display">est.</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
