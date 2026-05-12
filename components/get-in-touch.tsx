import Link from "next/link";
import { socials, BIO } from "@/lib/content";
import styles from "./get-in-touch.module.css";

export function GetInTouch() {
  return (
    <section
      className={styles.section}
      aria-labelledby="get-in-touch-headline"
    >
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.head}>
          <span className="eyebrow">{BIO.bookingStatus}</span>
          <h2 id="get-in-touch-headline" className={styles.headline}>
            <span className={`${styles.shout} italic-display`}>
              Get in touch!
            </span>
          </h2>
        </div>

        <div className={styles.row}>
          <figure className={styles.polaroid} aria-hidden="true">
            <span className={styles.tape} />
            <img
              src="/media/photos/portrait-cutout.png"
              alt=""
              className={styles.polaroidImg}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={styles.polaroidLabel}>
              <span>★</span>
              <span>est. 2025</span>
            </figcaption>
          </figure>

          <div className={styles.copyCol}>
            <p className={styles.lede}>
              Brief me on what you&rsquo;re launching. One short form &mdash;
              I read every enquiry myself and reply within 48 hours.
            </p>

            <Link href="/contact/" className={`btn ${styles.cta}`}>
              Send the brief <span>→</span>
            </Link>

            <ul className={styles.links}>
              {socials.map((s) => (
                <li key={s.handle}>
                  <a
                    href={s.url}
                    className={styles.link}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.url.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                  >
                    <span className={styles.linkLabel}>{s.label}</span>
                    <span className={styles.linkHandle}>{s.handle} →</span>
                  </a>
                </li>
              ))}
            </ul>

            <span className={styles.pill}>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
