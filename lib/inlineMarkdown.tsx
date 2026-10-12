import type { ReactNode } from "react";

/**
 * Tiny inline markdown-lite parser used across slide content. Supports
 * **bold**, `code` and [text](url). Not a full markdown engine — nested
 * syntax (e.g. a link inside ** **) is not parsed (single-pass regex).
 */
export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(
        <a
          key={i++}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80"
        >
          {match[1]}
        </a>
      );
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={i++}>{match[3]}</strong>);
    } else if (match[4] !== undefined) {
      // Code is always LTR, isolated so it doesn't reorder Arabic text.
      nodes.push(
        <code
          key={i++}
          dir="ltr"
          className="rounded-md border border-line bg-surface px-1.5 py-0.5 font-mono text-[0.85em] not-italic text-fg [unicode-bidi:isolate]"
        >
          {match[4]}
        </code>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}
