import Link from "next/link";
import { socials } from "@/lib/content";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.lead}>
          <h2 className={styles.headline}>
            Got a brand that needs <span className="italic-display">noticing?</span>
          </h2>
          <Link href="/contact/" className="btn">
            Work with me →
          </Link>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <span className="eyebrow">Sitemap</span>
            <Link href="/">Home</Link>
            <Link href="/work/">Work</Link>
            <Link href="/about/">About</Link>
            <Link href="/contact/">Contact</Link>
          </div>
          <div className={styles.col}>
            <span className="eyebrow">Elsewhere</span>
            {socials.map((s) => (
              <a key={s.handle} href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
          <div className={styles.col}>
            <span className="eyebrow">Based</span>
            <span>London → India</span>
            <span>Currently: Bengaluru</span>
            <span>Available worldwide</span>
          </div>
        </div>

        <div className={styles.meta}>
          <span>© {new Date().getFullYear()} Rishima Menon</span>
          <span>Made with care · Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}
