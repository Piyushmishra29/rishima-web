import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { socials } from "@/lib/content";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Brief Rishima Menon on what you're launching. One short form. Replies within 48 hours.",
};

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.intro}>
          <span className="eyebrow">Get in touch</span>
          <h1 className={styles.headline}>
            Brief me on what you're <span className="italic-display">launching.</span>
          </h1>
          <p className={styles.sub}>
            One short form. I read every enquiry myself and reply within 48
            hours — usually sooner. Prefer email? That works too.
          </p>

          <div className={styles.elsewhere}>
            <span className="eyebrow">Or reach me</span>
            {socials.map((s) => (
              <a
                key={s.handle}
                href={s.url}
                className={styles.social}
                target="_blank"
                rel="noreferrer"
              >
                <span>{s.label}</span>
                <span>{s.handle} →</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.formCol}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
