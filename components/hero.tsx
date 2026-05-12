import Link from "next/link";
import { Fragment } from "react";
import { BIO } from "@/lib/content";
import styles from "./hero.module.css";

const HEADLINE_LINE_1: { text: string; italic?: boolean }[] = [
  { text: "Content" },
  { text: "people" },
  { text: "actually", italic: true },
];

const HEADLINE_LINE_2: { text: string }[] = [
  { text: "want" },
  { text: "to" },
  { text: "watch." },
];

function Words({
  list,
  startIndex,
}: {
  list: { text: string; italic?: boolean }[];
  startIndex: number;
}) {
  return (
    <>
      {list.map((w, i) => (
        <Fragment key={w.text}>
          <span
            className={`hero-word${w.italic ? " italic-display" : ""}`}
            style={{ ["--word-i" as string]: startIndex + i } as React.CSSProperties}
          >
            {w.text}
          </span>
          {i < list.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">
            Marketer · Creator · {BIO.trajectory}
          </span>
          <h1 className={styles.headline}>
            <Words list={HEADLINE_LINE_1} startIndex={0} />
            <br />
            <Words list={HEADLINE_LINE_2} startIndex={HEADLINE_LINE_1.length} />
          </h1>
          <p className={styles.sub}>
            I&rsquo;m {BIO.name} &mdash; freelance marketer and creator. I
            build content and campaigns for brands in F&amp;B, skincare,
            fashion, lifestyle, and real estate. Equally at home behind the
            camera and in front of it.
          </p>
          <div className={styles.actions}>
            <Link href="/contact/" className="btn">
              Work with me <span>→</span>
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
            alt={`Portrait of ${BIO.name}`}
            className={styles.photo}
            width={900}
            height={1200}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className={styles.tag} aria-hidden="true">
            <span className="italic-display">est.</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}
