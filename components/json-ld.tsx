import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/site";
import { services, socials, BIO } from "@/lib/content";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    alternateName: "Rishima Menon",
    jobTitle: "Digital Marketer & Content Creator",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: BIO.basedIn,
      addressCountry: "IN",
    },
    sameAs: socials
      .filter((s) => s.url.startsWith("http"))
      .map((s) => s.url),
    knowsAbout: [
      "Digital marketing",
      "Content creation",
      "Social media management",
      "Brand consulting",
      "Paid advertising",
      "UGC",
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.body,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
