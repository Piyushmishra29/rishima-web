import Link from "next/link";
import { BIO } from "@/lib/content";
import styles from "./cta-band.module.css";

export function CtaBand() {
  return (
    <section className={styles.band} aria-labelledby="cta-headline">
      <div className={`wrap ${styles.inner}`}>
        <span className="eyebrow">{BIO.bookingStatus}</span>
        <h2 id="cta-headline" className={styles.headline}>
          Brief me on what you&rsquo;re{" "}
          <span className="italic-display">launching.</span>
        </h2>
        <p className={styles.sub}>
          One short form. I read every enquiry myself.
        </p>
        <Link href="/contact/" className="btn">
          Send the brief →
        </Link>
      </div>
    </section>
  );
}
