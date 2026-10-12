import type { Metadata } from "next";
import type { Deck } from "./content/types";
import { locales } from "./content";
import {
  DEFAULT_LOCALE,
  LIVE_PREVIEW_URL,
  OG_LOCALE,
  AUTHOR,
  EVENT,
  SITE_NAME,
  localeUrl,
  siteAsset,
} from "./site";

/**
 * Open Graph / Twitter Card image shared by all three locales — see
 * `scripts/generate-og-image.mjs` for how `public/og-image.png` is built
 * and why it must be a real `.png` file rather than a dynamic route.
 */
const OG_IMAGE = {
  url: siteAsset("og-image.png"),
  width: 1200,
  height: 630,
};

/**
 * Base metadata shared by every locale's root layout: resolves relative
 * URLs (Open Graph images, canonical links) against the live site, and
 * carries the icon/robots defaults common to all three pages.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(LIVE_PREVIEW_URL),
  // A root-relative icon href isn't rewritten with `basePath` by Next, so
  // it must be spelled out as an absolute URL here (see `siteAsset`) —
  // otherwise it 404s once the site is served from a GitHub Pages sub-path.
  icons: { icon: siteAsset("favicon.svg") },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,
  applicationName: SITE_NAME,
  formatDetection: { telephone: false },
};

/**
 * Full per-page metadata for a locale: title, description, canonical URL,
 * hreflang alternates (incl. `x-default`), Open Graph and Twitter Card.
 */
export function buildMetadata(deck: Deck): Metadata {
  const { locale, meta } = deck;
  const url = localeUrl(locale);

  const languages: Record<string, string> = { "x-default": localeUrl(DEFAULT_LOCALE) };
  for (const l of locales) languages[l] = localeUrl(l);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      type: "website",
      images: [{ ...OG_IMAGE, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
  };
}

/**
 * schema.org JSON-LD graph for a locale's page: the presenter (`Person`),
 * the workshop (`Event`) and the deck itself (`PresentationDigitalDocument`),
 * cross-linked so search engines associate the author's name with the deck.
 */
export function buildJsonLd(deck: Deck) {
  const { locale, meta } = deck;
  const url = localeUrl(locale);
  const personId = `${AUTHOR.url}#person`;
  const name = locale === "ar" ? AUTHOR.nameAr : AUTHOR.name;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name,
        alternateName: locale === "ar" ? AUTHOR.name : AUTHOR.nameAr,
        url: AUTHOR.url,
        jobTitle: AUTHOR.jobTitle,
        sameAs: AUTHOR.sameAs,
      },
      {
        "@type": "Event",
        name: meta.title,
        description: meta.description,
        startDate: EVENT.startDate,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        inLanguage: locale,
        location: {
          "@type": "Place",
          name: EVENT.venue,
          address: {
            "@type": "PostalAddress",
            addressLocality: EVENT.city,
            addressCountry: EVENT.country,
          },
        },
        organizer: { "@type": "Organization", name: EVENT.organizer },
        performer: { "@id": personId },
        image: OG_IMAGE.url,
        url,
      },
      {
        "@type": "PresentationDigitalDocument",
        "@id": `${url}#deck`,
        name: meta.title,
        description: meta.description,
        keywords: meta.keywords.join(", "),
        inLanguage: locale,
        url,
        image: OG_IMAGE.url,
        author: { "@id": personId },
        creator: { "@id": personId },
        numberOfPages: deck.slides.length,
      },
    ],
  };
}
