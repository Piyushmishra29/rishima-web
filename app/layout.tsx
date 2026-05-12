import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { fraunces, inter } from "./fonts";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PersonJsonLd } from "@/components/json-ld";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Freelance Marketer & Creator, Bengaluru`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: SITE_KEYWORDS,
  category: "Marketing & Content",
  alternates: { canonical: "/" },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    title: `${SITE_NAME} — Freelance Marketer & Creator`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Hire Rishima Menon. Reels people actually watch. Campaigns that move the needle. Reply in 48h.",
    creator: "@rishimamenon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
