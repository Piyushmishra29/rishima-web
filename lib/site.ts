export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://rishimamenon.com";

export const SITE_NAME = "Rishima Menon";

/** Default meta description for the home page + base layout. Aim ≤ 160 chars. */
export const SITE_DESCRIPTION =
  "Hire Rishima Menon — freelance marketer & creator. Reels people actually watch, UGC that performs, campaigns that move the needle. London → Bengaluru. Reply in 48h.";

/** Comma-separated keywords for the keywords meta tag. */
export const SITE_KEYWORDS = [
  "Rishima Menon",
  "hire Rishima Menon",
  "freelance marketer India",
  "freelance digital marketer Bengaluru",
  "freelance content creator India",
  "UGC creator India",
  "Instagram reels marketing",
  "social media manager Bengaluru",
  "paid ads freelancer",
  "Meta ads freelancer",
  "Google ads freelancer",
  "brand consultant India",
  "content strategist India",
  "DVC actor India",
  "F&B marketing",
  "skincare marketing",
  "fashion marketing",
  "real estate marketing",
];

export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
