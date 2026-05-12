import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ padding: "120px 0", minHeight: "60vh" }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span className="eyebrow">404 · Not here</span>
        <h1>
          You found a page that <span className="italic-display">isn't.</span>
        </h1>
        <p>The link is broken, the page was retired, or it never lived here.</p>
        <Link href="/" className="btn" style={{ alignSelf: "flex-start" }}>
          Back home →
        </Link>
      </div>
    </section>
  );
}
