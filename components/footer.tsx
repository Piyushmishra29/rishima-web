import Link from "next/link";
import { socials, BIO } from "@/lib/content";
import { SITE_NAME } from "@/lib/site";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.lead}>
          <h2 className={styles.headline}>
            Got a brand that needs{" "}
            <span className="italic-display">noticing?</span>
          </h2>
          <Link href="/contact/" className="btn">
            Work with me →
          </Link>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h3 className="eyebrow">Sitemap</h3>
            <Link href="/">Home</Link>
            <Link href="/work/">Work</Link>
            <Link href="/about/">About</Link>
            <Link href="/contact/">Contact</Link>
          </div>
          <div className={styles.col}>
            <h3 className="eyebrow">Elsewhere</h3>
            {socials.map((s) => (
              <a
                key={s.handle}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className={styles.col}>
            <h3 className="eyebrow">Based</h3>
            <span>{BIO.trajectory}</span>
            <span>Currently: {BIO.basedIn}</span>
            <span>Available worldwide</span>
          </div>
        </div>

        <div className={styles.meta}>
          <span>© {new Date().getFullYear()} {SITE_NAME}</span>
          <span>Made with care · {BIO.basedIn}</span>
        </div>
      </div>
    </footer>
  );
}
