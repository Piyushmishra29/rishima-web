import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { socials } from "@/lib/content";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Hire Rishima — Brief me on what you're launching",
  description:
    "Hire Rishima Menon. One short form. I read every enquiry myself and reply within 48 hours — usually sooner. Available worldwide from Bengaluru. Now booking.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Hire Rishima Menon",
    description:
      "Brief me on what you're launching. One short form. Replies within 48 hours — usually sooner.",
    url: "/contact/",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.intro}>
          <span className="eyebrow">Get in touch · Now booking</span>
          <h1 className={styles.headline}>
            Brief me on what you&rsquo;re <span className="italic-display">launching.</span>
          </h1>
          <p className={styles.sub}>
            One short form. I read every enquiry myself and reply within 48
            hours &mdash; usually sooner. Prefer email? That works too.
          </p>

          <div className={styles.elsewhere}>
            <h2 className="eyebrow">Or reach me</h2>
            {socials.map((s) => (
              <a
                key={s.handle}
                href={s.url}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
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
