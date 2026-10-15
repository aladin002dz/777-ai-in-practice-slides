"use client";

import { useRef, useState } from "react";
import { sessionPrompts } from "@/lib/session-prompts";

/** Synchronous copy first so it runs inside the click gesture (works on file:// USB copies
 *  and in browsers that deny the async Clipboard API); the Clipboard API is the fallback. */
async function copyText(text: string) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch {}
  area.remove();
  if (ok) return true;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export default function PromptNotes({ printing = false }: { printing?: boolean }) {
  const list = useRef<HTMLOListElement>(null);
  const [copied, setCopied] = useState<number | null>(null);
  const [failed, setFailed] = useState<number | null>(null);
  const copy = async (i: number, button: HTMLButtonElement) => {
    if (await copyText(sessionPrompts[i].text)) {
      setFailed(null);
      setCopied(i);
      setTimeout(() => setCopied(c => (c === i ? null : c)), 2000);
      return;
    }
    // Copy blocked: open the prompt and select its text so Ctrl+C still works.
    const details = button.parentElement?.querySelector("details");
    const pre = details?.querySelector("pre");
    if (!details || !pre) return;
    details.open = true;
    window.getSelection()?.selectAllChildren(pre);
    setFailed(i);
  };
  const toggleAll = (open: boolean) => list.current?.querySelectorAll("details").forEach(d => { d.open = open; });

  return <div className="notes-layout">
    <div className="notes-toolbar">
      <p>Open a prompt to read it, or press <strong>Copy</strong> and paste. Replace the <code>[brackets]</code> with your own details.</p>
      {!printing && <div><button type="button" onClick={() => toggleAll(true)}>Expand all</button><button type="button" onClick={() => toggleAll(false)}>Collapse all</button></div>}
    </div>
    <ol className="prompt-list" ref={list}>
      {sessionPrompts.map((p, i) => <li key={p.title} className="prompt-item">
        <details open={printing || undefined}>
          <summary>
            <span className="prompt-number">{String(i + 1).padStart(2, "0")}</span>
            <span className="prompt-heading"><small>{p.step}</small>{p.title}</span>
            <span className={`prompt-tool tool-${p.tool.split(" ")[0].toLowerCase()}`}>{p.tool}</span>
          </summary>
          <div className="prompt-body">
            {(p.mode || p.model || p.attach) && <dl className="prompt-before">
              {p.mode && <div><dt>Use</dt><dd>{p.mode}</dd></div>}
              {p.model && <div><dt>Model</dt><dd>{p.model}</dd></div>}
              {p.attach && <div><dt>Attach</dt><dd>{p.attach.map(f => <code key={f}>{f}</code>)}</dd></div>}
            </dl>}
            {p.tip && <p className="prompt-tip">{p.tip}</p>}
            <pre>{p.text}</pre>
            {p.save && <p className="prompt-save"><span>Save as</span><code>{p.save.file}</code>{p.save.note}</p>}
          </div>
        </details>
        {!printing && <button type="button" className={`prompt-copy${copied === i ? " is-copied" : ""}`} onClick={e => copy(i, e.currentTarget)} aria-label={`Copy prompt: ${p.title}`}>
          {copied === i ? <CheckIcon/> : <CopyIcon/>}
          <span aria-live="polite">{copied === i ? "Copied" : failed === i ? "Press Ctrl+C" : "Copy"}</span>
        </button>}
      </li>)}
    </ol>
  </div>;
}

function CopyIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="12" height="12" rx="2"/>
    <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>
  </svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5"/>
  </svg>;
}
