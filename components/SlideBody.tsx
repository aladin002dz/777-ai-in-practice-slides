import type { SlideLine } from "@/lib/content";
import { ACCENT as a } from "@/lib/accent";
import { renderInline } from "@/lib/inlineMarkdown";

function Marker({ line }: { line: SlideLine }) {
  const marker = line.marker ?? "bullet";

  if (marker === "number") {
    return (
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${a.border} ${a.text} ${a.bg}`}
        aria-hidden
      >
        {line.number}
      </span>
    );
  }

  if (marker === "quote") {
    return (
      <span
        className={`mt-1 shrink-0 text-2xl leading-none ${a.text}`}
        aria-hidden
      >
        “
      </span>
    );
  }

  if (marker === "none") return null;

  return (
    <span
      className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.solid}`}
      aria-hidden
    />
  );
}

export default function SlideBody({ lines }: { lines: SlideLine[] }) {
  // Denser slides (5+ lines) step the type down a notch so they still fit
  // a projector without scrolling.
  const dense = lines.length >= 5;

  return (
    <ul
      className={`flex w-full flex-col ${dense ? "gap-2.5 sm:gap-3" : "gap-3.5 sm:gap-4"}`}
    >
      {lines.map((line, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 text-fg-muted sm:gap-3.5 ${
            line.indent ? "ms-6 sm:ms-10" : ""
          } ${line.marker === "quote" ? "italic" : ""}`}
        >
          <Marker line={line} />
          <span
            className={
              dense
                ? "text-[1rem] leading-relaxed sm:text-lg sm:leading-relaxed"
                : "text-[1.05rem] leading-relaxed sm:text-xl sm:leading-relaxed"
            }
          >
            {line.bold ? (
              <span className={`font-semibold not-italic ${a.text}`}>
                {renderInline(line.bold)}{" "}
              </span>
            ) : null}
            {line.text ? renderInline(line.text) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
