export type Locale = "fr" | "en" | "ar";

/** One visual line inside the body of a content slide. */
export interface SlideLine {
  /** How the line is prefixed. */
  marker?: "bullet" | "number" | "quote" | "none";
  /** Only used with marker "number". */
  number?: number;
  /** Indentation level (0 = top level, 1 = nested under the previous line). */
  indent?: 0 | 1;
  /** Bold lead-in, e.g. "Règle absolue :" */
  bold?: string;
  /** Regular text following the bold lead-in (or the whole line if no bold). */
  text?: string;
}

export interface TitleSlide {
  type: "title";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  speaker?: string;
}

export interface BlockSlide {
  type: "block";
  label: string;
  title: string;
}

/** Audience level badge shown next to a content slide's eyebrow. */
export type Level = "beginner" | "advanced";

export interface ContentSlide {
  type: "content";
  eyebrow?: string;
  /** Optional badge so mixed audiences know who a slide is aimed at. */
  level?: Level;
  title: string;
  lines: SlideLine[];
}

export interface ClosingSlide {
  type: "closing";
  title: string;
  message: string;
  items: { label: string; value: string }[];
}

/** Final slide: follow-up links, each shown with a scannable QR code. */
export interface LinksSlide {
  type: "links";
  title: string;
  message?: string;
  links: { label: string; kind: string; url: string }[];
}

export type Slide =
  | TitleSlide
  | BlockSlide
  | ContentSlide
  | ClosingSlide
  | LinksSlide;

export interface UiStrings {
  langName: string;
  prev: string;
  next: string;
  switchLanguage: string;
  swipeHint: string;
  keyboardHint: string;
  home: string;
  fullscreen: string;
  exitFullscreen: string;
  scanToOpen: string;
  /** Accessible label for the theme toggle while the dark theme is active. */
  lightMode: string;
  /** Accessible label for the theme toggle while the light theme is active. */
  darkMode: string;
  levelBeginner: string;
  levelAdvanced: string;
  /** Word used in the screen-reader announcement "Slide 3 / 30". */
  slide: string;
}

export interface Deck {
  locale: Locale;
  dir: "ltr" | "rtl";
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  ui: UiStrings;
  slides: Slide[];
}
