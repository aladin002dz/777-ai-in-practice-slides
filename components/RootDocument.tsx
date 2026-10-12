import { inter, notoSansArabic } from "@/lib/fonts";
import type { Locale } from "@/lib/content";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

/**
 * The `<html>`/`<body>` shell shared by the three locale root layouts
 * (`app/(fr)`, `app/(en)`, `app/(ar)`). Each locale needs its own root
 * layout — not a single shared one — so that `lang`/`dir` are correct in
 * the static HTML from the first byte, instead of being patched in by
 * client-side JS after hydration (see git history for the previous
 * `HtmlLangSetter` approach).
 *
 * `suppressHydrationWarning` on <html> is required because the inline
 * theme script may add `data-theme` before React hydrates.
 */
export default function RootDocument({
  locale,
  dir,
  children,
}: {
  locale: Locale;
  dir: "ltr" | "rtl";
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${notoSansArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
