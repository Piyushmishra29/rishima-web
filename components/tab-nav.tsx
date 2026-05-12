import Link from "next/link";
import styles from "./tab-nav.module.css";

const tabs = [
  { href: "/about/", label: "About" },
  { href: "/work/", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

export function TabNav() {
  return (
    <nav className={styles.wrap} aria-label="Section tabs">
      <div className={styles.row}>
        {tabs.map((t, i) => (
          <span key={t.href} className={styles.tabWrap}>
            <Link href={t.href} className={styles.tab}>
              {t.label}
            </Link>
            {i < tabs.length - 1 && (
              <span className={styles.dot} aria-hidden="true">
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
