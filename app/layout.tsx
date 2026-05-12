import type { Metadata } from "next";
import { fraunces, inter } from "./fonts";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rishimamenon.com"),
  title: {
    default: "Rishima Menon — Marketer & Creator",
    template: "%s · Rishima Menon",
  },
  description:
    "Rishima Menon — freelance marketer & creator. F&B, skincare, fashion, lifestyle. London → India. Content people actually want to watch.",
  keywords: [
    "Rishima Menon",
    "digital marketer India",
    "content creator",
    "social media manager",
    "freelance marketing",
    "UGC creator",
  ],
  openGraph: {
    title: "Rishima Menon — Marketer & Creator",
    description: "Content people actually want to watch.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishima Menon",
    description: "Marketer & Creator. Content people actually want to watch.",
  },
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
