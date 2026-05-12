import type { Service } from "@/lib/content";
import styles from "./service-card.module.css";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={styles.card} style={{ background: service.tint }}>
      <div className={styles.head}>
        <span className={styles.num}>{service.number}</span>
        <span className={styles.kind}>{service.kind}</span>
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.body}>{service.body}</p>
      <ul className={styles.list}>
        {service.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
