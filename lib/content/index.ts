import type { Deck, Locale } from "./types";
import fr from "./fr";
import en from "./en";
import ar from "./ar";

export const decks: Record<Locale, Deck> = { fr, en, ar };

export const locales: Locale[] = ["ar", "en", "fr"];

export function getDeck(locale: Locale): Deck {
  return decks[locale];
}

export * from "./types";
