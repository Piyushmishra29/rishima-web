import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
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
        <Link
          href="/"
          className={styles.brand}
          aria-label={`${SITE_NAME} — home`}
        >
          <span className={styles.mark} aria-hidden="true">
            R
          </span>
          <span className={styles.wordmark}>{SITE_NAME}</span>
        </Link>
        <nav className={styles.links} aria-label="Primary">
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
