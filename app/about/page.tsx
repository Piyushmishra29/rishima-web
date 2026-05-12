import type { Metadata } from "next";
import { ServiceCard } from "@/components/service-card";
import { GetInTouch } from "@/components/get-in-touch";
import { SkillsStrip } from "@/components/skills-strip";
import { services, sectors, credentials, BIO } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — The marketer behind brands you've seen",
  description:
    "Rishima Menon, 24 — International Business & Marketing grad turned freelance marketer + creator. Started in London, now freelancing across India for brands in F&B, skincare, fashion, lifestyle, real estate.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Rishima Menon",
    description:
      "Marketer by training. Creator by accident. Behind the brands you've seen — and the camera, when they need it.",
    url: "/about/",
    type: "profile",
    images: [`${SITE_URL}/media/photos/portrait-about.jpg`],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.copy}>
            <span className="eyebrow">About · {BIO.name}</span>
            <h1 className={styles.headline}>
              I&rsquo;m chronically online.
              <br />
              <span className="italic-display">Professionally.</span>
            </h1>

            <div className={styles.bio}>
              {BIO.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className={styles.portrait}>
            <img
              src="/media/photos/portrait-about.jpg"
              alt={`Portrait of ${BIO.name}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className={`${styles.factGrid} reveal`} aria-label="At a glance">
        <div className={`wrap ${styles.factsInner}`}>
          <div className={styles.col}>
            <h2 className="eyebrow">Sectors</h2>
            <ul>
              {sectors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <h2 className="eyebrow">Credentials</h2>
            <ul>
              {credentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <h2 className="eyebrow">Currently</h2>
            <ul>
              <li>Based in {BIO.basedIn}</li>
              <li>Travelling for shoots</li>
              <li>Available worldwide</li>
              <li>{BIO.bookingStatus}</li>
            </ul>
          </div>
        </div>
      </section>

      <SkillsStrip />

      <section
        className={`${styles.servicesSection} reveal`}
        aria-labelledby="about-services"
      >
        <div className={`wrap ${styles.head}`}>
          <span className="eyebrow">What I do</span>
          <h2 id="about-services">
            Six things <span className="italic-display">I&rsquo;m good at.</span>
          </h2>
        </div>
        <div className={`wrap ${styles.servicesGrid} reveal-stagger`}>
          {services.map((s) => (
            <ServiceCard key={s.number} service={s} />
          ))}
        </div>
      </section>

      <div className="wrap reveal">
        <GetInTouch />
      </div>
    </>
  );
}
