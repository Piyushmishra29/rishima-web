import Link from "next/link";
import styles from "./nav.module.css";

const links = [
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.row}`}>
        <Link href="/" className={styles.brand} aria-label="Rishima Menon — home">
          <span className={styles.mark}>R</span>
          <span className={styles.wordmark}>Rishima Menon</span>
        </Link>
        <nav className={styles.links}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact/" className={styles.cta}>
            Work with me
          </Link>
        </nav>
      </div>
    </header>
  );
}
