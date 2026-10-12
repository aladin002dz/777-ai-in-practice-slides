"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Deck, Locale } from "@/lib/content";
import { locales } from "@/lib/content";
import { getAccent, ACCENT as a } from "@/lib/accent";
import { LIVE_PREVIEW_URL } from "@/lib/site";
import SlideView from "./SlideView";
import SlideTranscript from "./SlideTranscript";
import QrCode from "./QrCode";
import ThemeToggle from "./ThemeToggle";

const LOCALE_HREF: Record<Locale, string> = {
  ar: "/",
  en: "/en/",
  fr: "/fr/",
};

/** Minimum horizontal drag, in px, before a touch gesture counts as a swipe. */
const SWIPE_THRESHOLD = 45;

function slideIndexFromHash(total: number): number {
  if (typeof window === "undefined") return 0;
  const n = Number.parseInt(window.location.hash.replace("#", ""), 10);
  if (Number.isFinite(n) && n >= 1 && n <= total) return n - 1;
  return 0;
}

export default function Slideshow({ deck }: { deck: Deck }) {
  const total = deck.slides.length;
  const [index, setIndex] = useState(0);
  // Don't write the hash until it has been read once, otherwise the initial
  // index 0 overwrites a deep link like #9 (notably under Strict Mode,
  // which re-runs the read effect after the write).
  const [hashRead, setHashRead] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setIndex(slideIndexFromHash(total));
    setHashRead(true);
  }, [total]);

  useEffect(() => {
    if (!hashRead) return;
    window.history.replaceState(null, "", `#${index + 1}`);
  }, [index, hashRead]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.min(Math.max(next, 0), total - 1));
    },
    [total],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  // RTL (Arabic): "forward" points left, so the arrow keys and swipes mirror
  // the on-screen buttons, which already flip via flex-row + rtl: chevrons.
  const isRtl = deck.locale === "ar";

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const forwardKey = isRtl ? "ArrowLeft" : "ArrowRight";
      const backKey = isRtl ? "ArrowRight" : "ArrowLeft";
      if (e.key === forwardKey || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === backKey || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev, goTo, total, isRtl]);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(document.fullscreenElement !== null);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch(() => {
        // Fullscreen can be denied (e.g. no user gesture, iOS Safari) —
        // fail silently, the button simply has no effect that time.
      });
    }
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    // LTR: swipe left -> next, swipe right -> previous. Mirrored for RTL.
    if (isRtl ? dx > 0 : dx < 0) next();
    else prev();
  }

  const accent = getAccent(deck.slides, index);
  const slide = deck.slides[index];
  const progress = ((index + 1) / total) * 100;

  return (
    <div
      data-accent={accent}
      className="slide-viewport relative flex h-dvh w-full flex-col overflow-hidden bg-bg text-fg"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${a.glow} to-transparent`}
        aria-hidden
      />

      {/* progress bar */}
      <div
        role="progressbar"
        aria-label={deck.meta.title}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={index + 1}
        className="relative z-10 h-1 w-full bg-surface"
      >
        <div
          className={`h-full ${a.solid} transition-all duration-300 ease-out motion-reduce:transition-none`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* top bar: theme, fullscreen, language switcher */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-3 sm:px-8">
        <span className="text-xs font-semibold tracking-wide text-fg-subtle sm:text-sm">
          Practical AI · Chlef
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle
            lightLabel={deck.ui.lightMode}
            darkLabel={deck.ui.darkMode}
          />
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? deck.ui.exitFullscreen : deck.ui.fullscreen}
            title={isFullscreen ? deck.ui.exitFullscreen : deck.ui.fullscreen}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-fg-muted transition hover:bg-surface-hover hover:text-fg sm:flex"
          >
            {isFullscreen ? <CompressIcon /> : <ExpandIcon />}
          </button>
          <nav
            aria-label={deck.ui.switchLanguage}
            className="flex gap-1 rounded-full border border-line bg-surface p-1"
          >
            {locales.map((loc) => (
              <Link
                key={loc}
                href={LOCALE_HREF[loc]}
                hrefLang={loc}
                lang={loc}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition-colors sm:text-sm ${
                  loc === deck.locale
                    ? `${a.bg} ${a.text}`
                    : "text-fg-subtle hover:text-fg"
                }`}
                aria-current={loc === deck.locale ? "page" : undefined}
              >
                {loc}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* slide */}
      {/* m-auto (not items-center) so a slide taller than a phone screen
          scrolls from its top instead of being clipped above the fold. */}
      <main className="relative z-10 flex flex-1 overflow-y-auto px-6 py-6 sm:px-12">
        <div key={index} className="m-auto w-full max-w-5xl animate-slide-in">
          <SlideView slide={slide} ui={deck.ui} />
        </div>
      </main>

      {/* bottom bar: prev / counter / next */}
      <div className="relative z-10 flex items-center justify-between gap-4 px-4 pb-5 pt-2 sm:px-8">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          aria-label={deck.ui.prev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg transition hover:bg-surface-hover disabled:opacity-35 disabled:hover:bg-surface"
        >
          <ChevronLeft />
        </button>

        <div className="flex flex-col items-center gap-1">
          <span
            dir="ltr"
            className="text-sm font-medium tabular-nums text-fg-muted sm:text-base"
          >
            {index + 1} / {total}
          </span>
          <span className="hidden text-xs text-fg-subtle sm:block">
            {deck.ui.swipeHint} · {deck.ui.keyboardHint}
          </span>
        </div>

        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          aria-label={deck.ui.next}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg transition hover:bg-surface-hover disabled:opacity-35 disabled:hover:bg-surface"
        >
          <ChevronRight />
        </button>
      </div>

      {index === 0 ? (
        <div className="pointer-events-none absolute bottom-24 end-4 z-10 flex flex-col items-center gap-1.5 sm:bottom-28 sm:end-8">
          <div className="pointer-events-auto rounded-2xl border border-line bg-[var(--qr-frame)] p-2.5 shadow-lg shadow-black/10 backdrop-blur [&>svg]:h-32 [&>svg]:w-32 sm:[&>svg]:h-44 sm:[&>svg]:w-44">
            <QrCode value={LIVE_PREVIEW_URL} label={deck.ui.scanToOpen} size={176} />
          </div>
          <span className="max-w-[11rem] text-center text-xs leading-tight text-fg-subtle">
            {deck.ui.scanToOpen}
          </span>
        </div>
      ) : null}

      {/* Announce slide changes to screen readers without re-reading the UI. */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {deck.ui.slide} {index + 1} / {total}: {slide.title}
      </p>

      <SlideTranscript deck={deck} />
    </div>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CompressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M4 9h5V4M4 15h5v5M20 9h-5V4M20 15h-5v5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 rtl:-scale-x-100" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 rtl:-scale-x-100" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
