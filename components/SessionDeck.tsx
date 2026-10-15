"use client";

import { useEffect, useRef, useState } from "react";
import ExplainerDiagram from "./ExplainerDiagram";
import QrCode from "./QrCode";
import { renderInline } from "@/lib/inlineMarkdown";
import slides from "@/lib/session-slides.json";

const stages = ["Title", "Speaker", "Welcome", "7.77 Program", "Goals", "Agenda", "Poll", "Real-life examples", "Workflow", "Prompting", "Prompting", "Quiz", "Skills & Gems", "Live demo", "Design & build", "Review", "Deploy", "Activity", "What’s next", "Q&A", "Stay connected"];

export default function SessionDeck() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [overview, setOverview] = useState(false);
  const [answerVisible, setAnswer] = useState(false);
  const [notice, setNotice] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touch = useRef<{x:number;y:number}|null>(null);
  useEffect(() => {
    const syncFullscreen = () => setIsFullscreen(document.fullscreenElement !== null);
    syncFullscreen();
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);
  const go = (n: number) => setIndex(Math.max(0, Math.min(slides.length - 1, n)));
  useEffect(() => {
    const read = () => {const n = Number(location.hash.slice(1));setIndex(Number.isInteger(n) && n >= 1 && n <= slides.length ? n - 1 : 0);};
    read();setReady(true);window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  useEffect(() => {if (ready) history.replaceState(null, "", `#${index + 1}`);setAnswer(false);}, [index, ready]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).matches("button,select,input,textarea") || e.altKey || e.ctrlKey || e.metaKey) return;
      if (["ArrowRight", "PageDown", " "].includes(e.key)) {e.preventDefault();setIndex(n => Math.min(slides.length - 1, n + 1));}
      if (["ArrowLeft", "PageUp"].includes(e.key)) {e.preventDefault();setIndex(n => Math.max(0, n - 1));}
      if (e.key === "Home") setIndex(0);
      if (e.key === "End") setIndex(slides.length - 1);
      if (e.key === "Escape") setOverview(false);
    };
    window.addEventListener("keydown", key);return () => window.removeEventListener("keydown", key);
  }, []);
  const fullscreen = async () => {
    try {if (document.fullscreenElement) await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
    catch {setNotice("Fullscreen is unavailable in this browser. You can use browser fullscreen instead.");}
  };
  const renderSlide = (index: number, printing = false) => {
    const slide = slides[index];
    const answer = printing || answerVisible;
    return <article key={index} className={`slide slide-${index+1}`} aria-label={`Slide ${index+1} of ${slides.length}`} onTouchStart={e => {touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY};}} onTouchEnd={e => {if(!touch.current)return;const dx=e.changedTouches[0].clientX-touch.current.x;const dy=e.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>45 && Math.abs(dx)>Math.abs(dy))go(index+(dx<0?1:-1));touch.current=null;}}>
      {index === 2 ? <><img className="welcome-template" src="session/welcome-template.png" alt="7.77 program — Welcome Everyone"/><h1 className="welcome-accessible">Welcome Everyone</h1></> : index === 0 ? <><div className="cover-speaker">Mahfoudh Arous</div><h1 className="cover-title">AI in Practice:<br/><span>Design, Build and Deploy your<br/>Personal Website &amp; Portfolio — Without Coding</span></h1><div className="cover-rule"><button type="button" onClick={() => go(index+1)} aria-label="Next slide">▶</button></div><div className="cover-logos" aria-label="Program partners"><img src="session/ministry-logo.png" alt="Algerian ministry emblem"/><img src="session/algerie-telecom-logo.png" alt="Algérie Télécom"/><img src="session/mobilis-logo.png" alt="Mobilis"/></div><div className="cover-meta">7.77 Program | Age: 24–30</div><div className="cover-date">October 15, 2026 · 19:30–20:45</div></> : <>
        <div className="program-label"><span>7.77</span> program</div>
        {index === 3 ? <div className="program-intro"><div><h1>7.77 Digital Skills<br/>for <span>Every Generation</span></h1><p>A national digital empowerment initiative led by Algeria’s <strong>Ministry of Post and Telecommunications</strong>, in partnership with <strong>Algérie Télécom</strong> and <strong>Mobilis</strong>.</p></div><aside><strong>7 → 77</strong><p>Age Range Covered (Years)</p><strong>07</strong><p>Skill Centers (Across Algeria)</p></aside><p className="program-purpose">It aims to strengthen digital skills for citizens aged 7 to 77 through practical, inclusive, and accessible training in areas such as artificial intelligence, cybersecurity, coding, data, cloud technologies, and digital entrepreneurship.</p></div> : index === 1 ? <div className="speaker-layout"><img className="speaker-photo" src="session/speaker.png" alt="Mahfoudh Arous"/><div><span className="eyebrow">Your session speaker</span><h1>Mahfoudh<br/>Arous</h1><p className="speaker-caption">Senior Software Engineer &amp; Mentor</p><ul>{slide.bullets.slice(2).map(b => <li key={b}>{b.startsWith("Website & contact:") ? <a href="https://mahfoudh.dev/" target="_blank" rel="noopener noreferrer">Website &amp; contact: mahfoudh.dev ↗</a> : b.startsWith("LinkedIn:") ? <a href="https://www.linkedin.com/in/mahfoudh-arous/" target="_blank" rel="noopener noreferrer">LinkedIn: in/mahfoudh-arous ↗</a> : b}</li>)}</ul></div></div> : <div className="slide-content"><span className="eyebrow">{stages[index]}</span><h1>{slide.title}</h1>
          {index === slides.length - 1 ? <div className="closing-layout"><p className="closing-thanks">Thank you for taking part in the 7.77 session.</p><div className="closing-links">{[
            {title: "Explore the 7.77 Program", url: "https://skillscenter.algerietelecom.dz/programs/777-program", display: "skillscenter.algerietelecom.dz", detail: "Official program information and digital learning opportunities"},
            {title: "Connect with Mahfoudh", url: "https://mahfoudh.dev/", display: "mahfoudh.dev", detail: "My work, projects and ways to get in touch"},
          ].map(link => <a className="closing-link" key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"><div><h2>{link.title} <span aria-hidden="true">↗</span></h2><p>{link.detail}</p><strong>{link.display}</strong></div><div className="closing-qr"><QrCode value={link.url} size={128} label={`Scan to open ${link.title}`}/></div></a>)}</div><p className="closing-action">Your next step: build one page, check it, then share it.</p></div> : [8,9,16].includes(index) ? <div className="explainer-layout" key={index}>
            <ExplainerDiagram kind={index === 8 ? "workflow" : index === 9 ? "prompt" : "publishing"}/>
            <div className="explainer-copy">
              {index === 8 ? <><div className="tools"><span><a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">Gemini</a> · Free account</span><span><a href="https://antigravity.google/download" target="_blank" rel="noopener noreferrer">Antigravity</a> · Free account</span></div><ul><li><a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">Gemini <span aria-hidden="true">↗</span></a>: plan the page, write copy and guide the design.</li><li><a href="https://antigravity.google/download" target="_blank" rel="noopener noreferrer">Antigravity <span aria-hidden="true">↗</span></a>: build, preview and improve.</li><li>AI produces a draft. You check the result.</li></ul></> : index === 9 ? <><h2>Before you press Send</h2><ul><li>Give AI a specific audience and goal.</li><li>Ask for the format you need.</li><li>Use supplied facts and mark missing details.</li></ul></> : <><h2>Different stages, different evidence</h2><ul><li><a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Git <span aria-hidden="true">↗</span></a> saves local versions — optional for today’s browser route.</li><li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a> hosts your source repository online.</li><li>Browser route: Add file → Upload files; add index.html and style.css to a separate project repository.</li><li>Settings → Pages: deploy from your branch and root folder. No terminal needed.</li><li>Check deployment status, then open and test your public website.</li><li>Upload reviewed files; never upload secrets.</li></ul></>}
            </div>
          </div> : index === 11 ? <div className="quiz-layout">
            <p className="quiz-goal">Which prompt best reduces invented professional claims?</p>
            <ol className="quiz-options" aria-label="Answer choices">
              {slide.bullets.slice(1,4).map((b,i) => <li key={b} className={answer && i === 1 ? "is-correct" : ""}><span className="quiz-letter">{"ABC"[i]}</span><span>{b.slice(3)}{answer && i === 1 && <strong className="correct-label">Correct answer</strong>}</span></li>)}
            </ol>
            <div className="quiz-actions"><p>Vote A, B or C in the poll or chat.</p><button onClick={() => setAnswer(!answer)} aria-expanded={answer} aria-controls={printing ? "print-quiz-explanation" : "quiz-explanation"}>{answer ? "Hide answer" : "Reveal answer"}</button></div>
            <div id={printing ? "print-quiz-explanation" : "quiz-explanation"} className="quiz-explanation" aria-live="polite">{answer ? <p><strong>B is the best choice.</strong> Clear limits reduce invention, but do not guarantee accuracy. Check every professional claim against the source.</p> : <p>Discuss after voting: what should you still check in the answer?</p>}</div>
          </div> : index === 6 ? <div className="quiz-layout poll-layout">
            <p className="quiz-goal">Which website would be most useful for you?</p>
            <ol className="quiz-options" aria-label="Poll choices">
              {slide.bullets.slice(0,3).map((b,i) => <li key={b}><span className="quiz-letter">{"ABC"[i]}</span><span>{b}</span></li>)}
            </ol>
            <div className="quiz-actions"><p>{slide.bullets[3]}.</p></div>
            <div className="quiz-explanation"><p>{slide.bullets[4]}</p></div>
          </div> : index === 5 ? <div className="agenda-layout">
            <div className="agenda-bar" aria-hidden="true">{slide.bullets.map(b => {const [, label, m] = b.split(" | ");return <span key={b} style={{flexGrow: parseInt(m)}} title={label}>{parseInt(m)}′</span>;})}</div>
            <ol className="agenda">{slide.bullets.map(b => {const [time, label, m] = b.split(" | ");return <li key={b}><time>{time}</time><span>{label}</span><small>{m}</small></li>;})}</ol>
          </div> : index === 7 ? <div className="examples-layout">
            <ol className="examples">{slide.bullets.slice(0,3).map((b,i) => {const [who, before, after] = b.split(" | ");return <li key={b}><span className="quiz-letter">{"ABC"[i]}</span><h2>{who}</h2><p className="before">{before}</p><span className="examples-arrow" aria-hidden="true">↓</span><p className="after">{after}</p></li>;})}</ol>
            <p className="examples-note">{slide.bullets[3]}.</p>
          </div> : index === 10 ? <div className="brief-compare">
            <h2>Vague request <small>Example</small></h2>
            <p className="brief-vague">{renderInline(slide.bullets[0].replace(/^Vague: /, ""))}</p>
            <h2>RCTFC brief <small>Example</small></h2>
            <ul className="compact">{slide.bullets.slice(1).map(b => <li key={b}>{renderInline(b)}</li>)}</ul>
          </div> : <ul>{slide.bullets.map(b => <li key={b}>{renderInline(b)}</li>)}</ul>}

        </div>}
      </>}
      <div className="slide-footer"><span>{index===0 ? "" : "AI in Practice · October 15, 2026"}</span><span>{String(index+1).padStart(2,"0")} / {slides.length}</span></div>
    </article>;
  };
  return <main className="deck-shell">
    <div className={`deck-stage${overview ? " is-overview" : ""}`}>
    <div className="presenter-bar"><span>7.77 · Online session · 15 October 2026</span><div><button onClick={() => setOverview(!overview)} aria-expanded={overview}>All slides</button><button onClick={fullscreen} aria-pressed={isFullscreen}>{isFullscreen ? "Exit fullscreen" : "Fullscreen"}</button><button onClick={() => window.print()}>Print</button></div></div>
    {notice && <p role="status">{notice}</p>}
    {overview ? <section className="overview" aria-label="Choose a slide">{slides.map((s,i) => <button key={s.title} onClick={() => {go(i);setOverview(false);}}><span>{String(i+1).padStart(2,"0")}</span>{s.title}</button>)}</section> : renderSlide(index)}
    <nav className="deck-controls" aria-label="Slide navigation"><button onClick={() => go(index-1)} disabled={index===0}>← Previous</button><label>Slide <select value={index} onChange={e => go(Number(e.target.value))}>{slides.map((s,i) => <option value={i} key={s.title}>{i+1}. {s.title}</option>)}</select></label><button onClick={() => go(index+1)} disabled={index===slides.length-1}>Next →</button></nav>
    </div>
    <p className="keyboard-hint">Use ← → arrow keys · Home / End · Space to continue</p>
    <div className="print-deck">{slides.map((_, i) => renderSlide(i, true))}</div>
  </main>;
}
