import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
} from "@/lib/site";
import { services, socials, BIO, sectors } from "@/lib/content";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        alternateName: "Rishima Menon",
        givenName: "Rishima",
        familyName: "Menon",
        jobTitle: "Digital Marketer & Content Creator",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/media/photos/portrait-about.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: BIO.basedIn,
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        nationality: "Indian",
        sameAs: socials
          .filter((s) => s.url.startsWith("http"))
          .map((s) => s.url),
        knowsAbout: [
          "Digital marketing",
          "Content creation",
          "Social media management",
          "Brand consulting",
          "Paid advertising",
          "Meta ads",
          "Google ads",
          "UGC content",
          "DVC acting",
          ...sectors.map((s) => `${s} marketing`),
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "International Business & Marketing program (UK)",
        },
        knowsLanguage: ["English", "Hindi", "Malayalam"],
        makesOffer: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.body,
            serviceType: s.title,
            provider: { "@id": `${SITE_URL}/#person` },
          },
        })),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Business enquiries",
          url: `${SITE_URL}/contact/`,
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        keywords: SITE_KEYWORDS.join(", "),
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${SITE_NAME} — Freelance marketing & content`,
        description:
          "Freelance marketing and content services for brands in F&B, skincare, fashion, lifestyle, and real estate. Social media, paid ads, content strategy, UGC.",
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: { "@type": "Country", name: "Worldwide" },
        priceRange: "₹₹",
        serviceType: services.map((s) => s.title),
        address: {
          "@type": "PostalAddress",
          addressLocality: BIO.basedIn,
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Breadcrumb schema for case-study pages. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
