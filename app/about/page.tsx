import type { Metadata } from "next";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { services, sectors, credentials } from "@/lib/content";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rishima Menon — 24, International Business & Marketing grad. London → India. Freelance marketer and creator across F&B, skincare, fashion, lifestyle, and real estate.",
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.copy}>
            <span className="eyebrow">About · Rishima Menon</span>
            <h1 className={styles.headline}>
              I'm chronically online.
              <br />
              <span className="italic-display">Professionally.</span>
            </h1>

            <div className={styles.bio}>
              <p>
                I'm Rishima Menon, 24 — an International Business & Marketing
                grad who accidentally turned being chronically online into a
                career.
              </p>
              <p>
                I started at a marketing agency in London, moved to India, and
                now freelance with brands across F&B, skincare, fashion,
                lifestyle, and real estate. My client roster runs across
                markets, but the brief never changes: content people actually
                want to watch.
              </p>
              <p>
                When I'm not building other people's brands, I'm building my
                own page around fashion, skincare, and lifestyle. Having acted
                in a few DVCs, I'm equally at home behind the camera and in
                front of it.
              </p>
            </div>
          </div>

          <div className={styles.portrait}>
            <img src="/media/photos/portrait-about.jpg" alt="Rishima Menon" />
          </div>
        </div>
      </section>

      <section className={styles.factGrid}>
        <div className={`wrap ${styles.factsInner}`}>
          <div className={styles.col}>
            <span className="eyebrow">Sectors</span>
            <ul>
              {sectors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <span className="eyebrow">Credentials</span>
            <ul>
              {credentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <span className="eyebrow">Currently</span>
            <ul>
              <li>Based in Bengaluru</li>
              <li>Travelling for shoots</li>
              <li>Available worldwide</li>
              <li>Now booking · Q3</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={`wrap ${styles.head}`}>
          <span className="eyebrow">What I do</span>
          <h2>
            Six things <span className="italic-display">I'm good at.</span>
          </h2>
        </div>
        <div className={`wrap ${styles.servicesGrid}`}>
          {services.map((s) => (
            <ServiceCard key={s.number} service={s} />
          ))}
        </div>
      </section>

      <div className="wrap">
        <CtaBand />
      </div>
    </>
  );
}
