import Link from "next/link";
import styles from "./cta-band.module.css";

export function CtaBand() {
  return (
    <section className={styles.band}>
      <div className={`wrap ${styles.inner}`}>
        <span className="eyebrow">Now booking · Q3</span>
        <h2 className={styles.headline}>
          Brief me on what you're <span className="italic-display">launching.</span>
        </h2>
        <p className={styles.sub}>
          One short form. I read every enquiry myself and reply within 48 hours.
        </p>
        <Link href="/contact/" className="btn">
          Send the brief →
        </Link>
      </div>
    </section>
  );
}
