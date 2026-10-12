import type { Slide } from "@/lib/content";

/**
 * One accent per workshop stage, plus the brand accent for the title and
 * closing slides. The actual colors live in `app/globals.css` as CSS
 * variables keyed by `[data-accent]`, with separate light/dark values that
 * were checked for WCAG AA contrast against their background.
 */
export type Accent = "brand" | "plan" | "design" | "build" | "publish";

/** Utility classes that resolve to the active accent (see globals.css). */
export const ACCENT = {
  text: "text-accent",
  border: "border-accent-line",
  bg: "bg-accent-soft",
  solid: "bg-accent-solid",
  glow: "from-accent-glow",
} as const;

const STAGE_ACCENTS: Accent[] = ["plan", "design", "build", "publish"];

/**
 * Slides don't carry a locale-specific "section" field (block titles are
 * translated text), so the accent is derived purely from position: how many
 * "block" divider slides have appeared before this index. Order and count
 * of slides is identical across every locale.
 */
export function getAccent(slides: Slide[], index: number): Accent {
  const current = slides[index];
  if (current?.type === "title" ||
    current?.type === "closing" ||
    current?.type === "links") {
    return "brand";
  }

  let blockCount = 0;
  for (let i = 0; i <= index; i++) {
    if (slides[i]?.type === "block") blockCount++;
  }

  return STAGE_ACCENTS[blockCount - 1] ?? "brand";
}
