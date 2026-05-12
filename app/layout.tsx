import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { fraunces, inter } from "./fonts";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PersonJsonLd } from "@/components/json-ld";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Marketer & Creator`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — Marketer & Creator`,
    description: "Content people actually want to watch.",
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Marketer & Creator. Content people actually want to watch.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4ECDF" },
    { media: "(prefers-color-scheme: dark)", color: "#F4ECDF" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        <Link href="#main" className="skipLink">
          Skip to content
        </Link>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <PersonJsonLd />
      </body>
    </html>
  );
}
