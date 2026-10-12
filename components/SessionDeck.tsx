"use client";

import { useEffect, useRef, useState } from "react";
import ExplainerDiagram from "./ExplainerDiagram";
import slides from "@/lib/session-slides.json";

const stages = ["Welcome", "7.77 Program", "Speaker", "Goals", "Poll", "Workflow", "Prompting", "Prompting", "Skills & Gems", "Quiz", "Live demo", "Design & build", "Review", "Deploy", "Activity", "Q&A"];

export default function SessionDeck() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [overview, setOverview] = useState(false);
  const [answer, setAnswer] = useState(false);
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
  const slide = slides[index];
  return <main className="deck-shell">
    <div className={`deck-stage${overview ? " is-overview" : ""}`}>
    <div className="presenter-bar"><span>7.77 · Online session · 15 October 2026</span><div><button onClick={() => setOverview(!overview)} aria-expanded={overview}>All slides</button><button onClick={fullscreen} aria-pressed={isFullscreen}>{isFullscreen ? "Exit fullscreen" : "Fullscreen"}</button><button onClick={() => window.print()}>Print</button></div></div>
    {notice && <p role="status">{notice}</p>}
    {overview ? <section className="overview" aria-label="Choose a slide">{slides.map((s,i) => <button key={s.title} onClick={() => {go(i);setOverview(false);}}><span>{String(i+1).padStart(2,"0")}</span>{s.title}</button>)}</section> : <article key={index} className={`slide slide-${index+1}`} aria-label={`Slide ${index+1} of ${slides.length}`} onTouchStart={e => {touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY};}} onTouchEnd={e => {if(!touch.current)return;const dx=e.changedTouches[0].clientX-touch.current.x;const dy=e.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>45 && Math.abs(dx)>Math.abs(dy))go(index+(dx<0?1:-1));touch.current=null;}}>
      {index === 0 ? <><div className="cover-speaker">Mahfoudh Arous</div><h1 className="cover-title">AI in Practice:<br/><span>Design, Build and Deploy your<br/>Personal Website &amp; Portfolio</span></h1><div className="cover-rule" aria-hidden="true"><span>▶</span></div><div className="cover-logos" aria-label="Program partners"><img src="session/ministry-logo.png" alt="Algerian ministry emblem"/><img src="session/algerie-telecom-logo.png" alt="Algérie Télécom"/><img src="session/mobilis-logo.png" alt="Mobilis"/></div><div className="cover-meta">7.77 Program | Age: 31–45</div><div className="cover-date">October 15, 2026 · 19:30–20:45</div></> : <>
        <div className="program-label"><span>7.77</span> program</div>
        {index === 1 ? <div className="program-intro"><div><h1>7.77 Digital Skills<br/>for <span>Every Generation</span></h1><p>A national digital empowerment initiative led by Algeria’s <strong>Ministry of Post and Telecommunications</strong>, in partnership with <strong>Algérie Télécom</strong> and <strong>Mobilis</strong>.</p></div><aside><strong>7 → 77</strong><p>Age range covered (years)</p><strong>Today’s session</strong><p>Practical AI for your professional presence online</p></aside><p className="program-purpose">Practical, inclusive and accessible digital learning. Today, we will design, build and deploy a personal website and portfolio.</p></div> : index === 2 ? <div className="speaker-layout"><img className="speaker-photo" src="session/speaker.png" alt="Mahfoudh Arous"/><div><span className="eyebrow">Your session speaker</span><h1>Mahfoudh<br/>Arous</h1><p className="speaker-caption">AI in Practice</p><ul>{slide.bullets.slice(1).map(b => <li key={b}>{b}</li>)}</ul></div></div> : <div className="slide-content"><span className="eyebrow">{stages[index]}</span><h1>{slide.title}</h1>
          {[5,6,13].includes(index) ? <div className="explainer-layout" key={index}>
            <ExplainerDiagram kind={index === 5 ? "workflow" : index === 6 ? "prompt" : "publishing"}/>
            <div className="explainer-copy">
              {index === 5 ? <><div className="tools"><span>Gemini · Free account</span><span>Antigravity · Free account</span></div><ul><li>Gemini: plan the page, write copy and guide the design.</li><li>Antigravity: build, preview and improve.</li><li>AI produces a draft. You check the result.</li></ul></> : index === 6 ? <><h2>Before you press Send</h2><ul><li>Give AI a specific audience and goal.</li><li>Ask for the format you need.</li><li>Use supplied facts and mark missing details.</li></ul></> : <><h2>Different stages, different evidence</h2><ul><li>A local preview stays on your device.</li><li>A GitHub repository holds the source.</li><li>GitHub Pages publishes the website.</li><li>Open the public URL to verify success.</li><li>Upload reviewed files; never upload secrets.</li></ul></>}
            </div>
          </div> : index === 9 ? <div className="quiz-layout">
            <p className="quiz-goal">Which prompt best reduces invented professional claims?</p>
            <ol className="quiz-options" aria-label="Answer choices">
              {slide.bullets.slice(1,4).map((b,i) => <li key={b} className={answer && i === 1 ? "is-correct" : ""}><span className="quiz-letter">{"ABC"[i]}</span><span>{b.slice(3)}{answer && i === 1 && <strong className="correct-label">Correct answer</strong>}</span></li>)}
            </ol>
            <div className="quiz-actions"><p>Vote A, B or C in the poll or chat.</p><button onClick={() => setAnswer(!answer)} aria-expanded={answer} aria-controls="quiz-explanation">{answer ? "Hide answer" : "Reveal answer"}</button></div>
            <div id="quiz-explanation" className="quiz-explanation" aria-live="polite">{answer ? <p><strong>B is the best choice.</strong> Clear limits reduce invention, but do not guarantee accuracy. Check every professional claim against the source.</p> : <p>Discuss after voting: what should you still check in the answer?</p>}</div>
          </div> : <ul className={index===7 ? "compact" : ""}>{slide.bullets.map(b => <li key={b}>{b}</li>)}</ul>}

        </div>}
      </>}
      <div className="slide-footer"><span>{index===0 ? "English slides · Darja delivery" : "AI in Practice · October 15, 2026"}</span><span>{String(index+1).padStart(2,"0")} / {slides.length}</span></div>
    </article>}
    <nav className="deck-controls" aria-label="Slide navigation"><button onClick={() => go(index-1)} disabled={index===0}>← Previous</button><label>Slide <select value={index} onChange={e => go(Number(e.target.value))}>{slides.map((s,i) => <option value={i} key={s.title}>{i+1}. {s.title}</option>)}</select></label><button onClick={() => go(index+1)} disabled={index===slides.length-1}>Next →</button></nav>
    </div>
    <p className="keyboard-hint">Use ← → arrow keys · Home / End · Space to continue</p>
    <div className="print-deck">{slides.map((s,i)=><section className="print-slide" key={s.title}><div className="program-label"><span>7.77</span> program</div><h1>{s.title}</h1><ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul><footer>{i+1} / {slides.length}</footer></section>)}</div>
  </main>;
}
