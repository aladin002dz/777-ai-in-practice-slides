import type { Slide, UiStrings } from "@/lib/content";
import { ACCENT as a } from "@/lib/accent";
import { renderInline } from "@/lib/inlineMarkdown";
import QrCode from "./QrCode";
import SlideBody from "./SlideBody";

export default function SlideView({
  slide,
  ui,
}: {
  slide: Slide;
  ui: UiStrings;
}) {
  if (slide.type === "title") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        {slide.eyebrow ? (
          <span
            className={`mb-5 text-sm font-semibold uppercase tracking-[0.25em] ${a.text}`}
          >
            {slide.eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-4xl text-[clamp(1.9rem,6vw,3.75rem)] font-extrabold leading-tight tracking-tight text-fg">
          {slide.title}
        </h1>
        {slide.subtitle ? (
          <p className="mt-6 max-w-2xl text-[clamp(1rem,2.4vw,1.4rem)] text-fg-muted">
            {slide.subtitle}
          </p>
        ) : null}
        {slide.speaker ? (
          <p
            className={`mt-10 rounded-full border px-5 py-2 text-sm font-medium sm:text-base ${a.border} ${a.text} ${a.bg}`}
          >
            {slide.speaker}
          </p>
        ) : null}
      </div>
    );
  }

  if (slide.type === "block") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <span
          className={`text-sm font-semibold uppercase tracking-[0.3em] sm:text-base ${a.text}`}
        >
          {slide.label}
        </span>
        <h2 className="mt-5 max-w-4xl text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold leading-tight tracking-tight text-fg">
          {slide.title}
        </h2>
        <span
          className={`mt-8 h-1.5 w-24 rounded-full ${a.solid}`}
          aria-hidden
        />
      </div>
    );
  }

  if (slide.type === "closing") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <h2 className="max-w-3xl text-[clamp(1.8rem,5.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-fg">
          {slide.title}
        </h2>
        <p className="mt-5 max-w-xl text-[clamp(1rem,2.2vw,1.3rem)] text-fg-muted">
          {slide.message}
        </p>
        <dl className="mt-10 grid w-full max-w-2xl gap-4 text-start sm:grid-cols-2">
          {slide.items.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border p-4 ${a.border} ${a.bg}`}
            >
              <dt className={`text-xs font-semibold uppercase tracking-wide ${a.text}`}>
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-snug text-fg sm:text-base">
                {renderInline(item.value)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  if (slide.type === "links") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <h2 className="max-w-3xl text-[clamp(1.8rem,5.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-fg">
          {slide.title}
        </h2>
        {slide.message ? (
          <p className="mt-4 max-w-xl text-[clamp(1rem,2.2vw,1.3rem)] text-fg-muted">
            {slide.message}
          </p>
        ) : null}
        <ul className="mt-8 grid w-full max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {slide.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-full flex-col items-center gap-2 rounded-2xl border p-3 transition hover:-translate-y-0.5 sm:p-4 ${a.border} ${a.bg}`}
              >
                <span className={`text-[0.7rem] font-semibold uppercase tracking-wide sm:text-xs ${a.text}`}>
                  {link.kind}
                </span>
                <span
                  className={`flex min-h-[2.5rem] items-center justify-center gap-1.5 text-sm font-semibold leading-snug underline decoration-2 underline-offset-4 sm:text-base ${a.text}`}
                >
                  {link.label}
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M14 4h6v6" />
                    <path d="M20 4 10 14" />
                    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
                  </svg>
                </span>
                <span className="mt-auto rounded-xl bg-white p-1.5">
                  <QrCode value={link.url} size={120} label={link.label} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // content
  const levelLabel =
    slide.level === "advanced"
      ? ui.levelAdvanced
      : slide.level === "beginner"
        ? ui.levelBeginner
        : null;

  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        {slide.eyebrow || levelLabel ? (
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            {slide.eyebrow ? (
              <span
                className={`text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm ${a.text}`}
              >
                {slide.eyebrow}
              </span>
            ) : null}
            {levelLabel ? (
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider sm:text-xs ${
                  slide.level === "advanced"
                    ? `${a.border} ${a.bg} ${a.text}`
                    : "border-line bg-surface text-fg-muted"
                }`}
              >
                {levelLabel}
              </span>
            ) : null}
          </div>
        ) : null}
        <h2 className="mb-6 text-[clamp(1.5rem,4.2vw,2.5rem)] font-bold leading-tight text-fg sm:mb-8">
          {slide.title}
        </h2>
        <SlideBody lines={slide.lines} />
      </div>
    </div>
  );
}
