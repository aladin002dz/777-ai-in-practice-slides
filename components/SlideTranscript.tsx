import type { Deck, Slide } from "@/lib/content";
import { renderInline } from "@/lib/inlineMarkdown";

/**
 * Plain-text rendering of every slide, visually hidden (`sr-only`: present
 * in the DOM and read by screen readers / search engine crawlers, but not
 * shown to sighted users). `<Slideshow>` only ever mounts the *current*
 * slide for the interactive deck — without this, a crawler that doesn't
 * click "next" would only ever see the first slide's text, and the rest of
 * the workshop content (Blocks 1–3) would be invisible to search engines.
 */
export default function SlideTranscript({ deck }: { deck: Deck }) {
  return (
    <section className="sr-only">
      {deck.slides.map((slide, i) => (
        <article key={i}>{renderSlide(slide)}</article>
      ))}
    </section>
  );
}

function renderSlide(slide: Slide) {
  switch (slide.type) {
    case "title":
      return (
        <>
          <h2>{slide.title}</h2>
          {slide.subtitle ? <p>{slide.subtitle}</p> : null}
          {slide.speaker ? <p>{slide.speaker}</p> : null}
        </>
      );

    case "block":
      return (
        <h2>
          {slide.label} — {slide.title}
        </h2>
      );

    case "content":
      return (
        <>
          <h2>{slide.title}</h2>
          <ul>
            {slide.lines.map((line, i) => (
              <li key={i}>
                {line.bold ? <strong>{line.bold} </strong> : null}
                {line.text ? renderInline(line.text) : null}
              </li>
            ))}
          </ul>
        </>
      );

    case "closing":
      return (
        <>
          <h2>{slide.title}</h2>
          <p>{slide.message}</p>
          <dl>
            {slide.items.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{renderInline(item.value)}</dd>
              </div>
            ))}
          </dl>
        </>
      );

    case "links":
      return (
        <>
          <h2>{slide.title}</h2>
          {slide.message ? <p>{slide.message}</p> : null}
          <ul>
            {slide.links.map((link) => (
              <li key={link.url}>
                <a href={link.url}>
                  {link.label} — {link.kind}
                </a>
              </li>
            ))}
          </ul>
        </>
      );
  }
}
