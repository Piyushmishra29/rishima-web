import { tools } from "@/lib/content";
import styles from "./skills-strip.module.css";

const categoryOrder = ["Marketing", "Design", "Content", "Analytics"] as const;

export function SkillsStrip() {
  return (
    <section className={styles.section} aria-labelledby="skills-heading">
      <div className={`wrap ${styles.head}`}>
        <span className="eyebrow">Skills &amp; tools</span>
        <h2 id="skills-heading" className={styles.title}>
          Fluent in <span className="italic-display">the stack.</span>
        </h2>
        <p className={styles.lede}>
          Platforms, tools, and surfaces I work in day to day &mdash; for clients
          and for my own page.
        </p>
      </div>

      <div className={`wrap ${styles.grid}`}>
        {categoryOrder.map((cat) => {
          const items = tools.filter((t) => t.category === cat);
          if (!items.length) return null;
          return (
            <div key={cat} className={styles.col}>
              <h3 className={styles.colTitle}>{cat}</h3>
              <ul className={styles.list}>
                {items.map((t) => (
                  <li key={t.slug} className={styles.item}>
                    <img
                      src={`https://cdn.simpleicons.org/${t.slug}/1F1C18`}
                      alt=""
                      className={styles.icon}
                      loading="lazy"
                      decoding="async"
                      width={20}
                      height={20}
                    />
                    <span>{t.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
