import type { Locale } from "./content/types";

/** Public URL of the deployed GitHub Pages preview (see README.md). */
export const LIVE_PREVIEW_URL =
  "https://mahfoudh.dev/workshop-practical-ai/";

export const SITE_NAME = "Practical AI · Personal Website Workshop · Chlef";

/** Route segment (relative to {@link LIVE_PREVIEW_URL}) that serves each locale. */
export const LOCALE_PATH: Record<Locale, string> = {
  ar: "",
  en: "en/",
  fr: "fr/",
};

/** BCP 47 / Open Graph locale tag for each site locale. */
export const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
  ar: "ar_DZ",
};

/** The presenter — surfaced in author metadata and JSON-LD so searches for the name find the deck. */
export const AUTHOR = {
  name: "Mahfoudh Arous",
  nameAr: "محفوظ عروس",
  url: "https://mahfoudh.dev/",
  sameAs: ["https://github.com/aladin002dz", "https://mahfoudh.dev/"],
  jobTitle: "Software Developer",
};

/** The workshop itself (Chlef, Algeria — Africa/Algiers, UTC+1). */
export const EVENT = {
  startDate: "2026-10-10T09:30:00+01:00",
  venue: "Ghlam Mohamed Scientific Leisure Center",
  city: "Chlef",
  country: "DZ",
  organizer: "Tamkeen Club for Media Skills",
};

/** The default locale served with no path prefix (`/`). */
export const DEFAULT_LOCALE: Locale = "ar";

/** Absolute, canonical URL for a given locale's page. */
export function localeUrl(locale: Locale): string {
  return new URL(LOCALE_PATH[locale], LIVE_PREVIEW_URL).toString();
}

/**
 * Absolute URL for a static file under `public/`, resolved against the
 * deployed GitHub Pages path (`LIVE_PREVIEW_URL`). Metadata fields (icons,
 * Open Graph/Twitter images) must use this instead of a root-relative
 * string like "/favicon.svg": Next does not rewrite plain metadata strings
 * with `basePath`, so a root-relative href 404s once the site is served
 * from a sub-path.
 */
export function siteAsset(path: string): string {
  return new URL(path, LIVE_PREVIEW_URL).toString();
}
