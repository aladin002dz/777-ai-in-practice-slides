"use client";

import { useEffect, useRef, useState } from "react";
import ExplainerDiagram from "./ExplainerDiagram";
import QrCode from "./QrCode";
import slides from "@/lib/session-slides.json";

const stages = ["Title", "Speaker", "Welcome", "7.77 Program", "Goals", "Poll", "Workflow", "Prompting", "Prompting", "Skills & Gems", "Quiz", "Live demo", "Design & build", "Review", "Deploy", "Activity", "Q&A", "Stay connected"];

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
      {index === 2 ? <><img className="welcome-template" src="session/welcome-template.png" alt="7.77 program — Welcome Everyone"/><h1 className="welcome-accessible">Welcome Everyone</h1></> : index === 0 ? <><div className="cover-speaker">Mahfoudh Arous</div><h1 className="cover-title">AI in Practice:<br/><span>Design, Build and Deploy your<br/>Personal Website &amp; Portfolio — Without Coding</span></h1><div className="cover-rule" aria-hidden="true"><span>▶</span></div><div className="cover-logos" aria-label="Program partners"><img src="session/ministry-logo.png" alt="Algerian ministry emblem"/><img src="session/algerie-telecom-logo.png" alt="Algérie Télécom"/><img src="session/mobilis-logo.png" alt="Mobilis"/></div><div className="cover-meta">7.77 Program | Age: 31–45</div><div className="cover-date">October 15, 2026 · 19:30–20:45</div></> : <>
        <div className="program-label"><span>7.77</span> program</div>
        {index === 3 ? <div className="program-intro"><div><h1>7.77 Digital Skills<br/>for <span>Every Generation</span></h1><p>A national digital empowerment initiative led by Algeria’s <strong>Ministry of Post and Telecommunications</strong>, in partnership with <strong>Algérie Télécom</strong> and <strong>Mobilis</strong>.</p></div><aside><strong>7 → 77</strong><p>Age range covered (years)</p><strong>Today’s session</strong><p>Practical AI for your professional presence online</p></aside><p className="program-purpose">Practical, inclusive and accessible digital learning. Today, we will design, build and deploy a personal website and portfolio.</p></div> : index === 1 ? <div className="speaker-layout"><img className="speaker-photo" src="session/speaker.png" alt="Mahfoudh Arous"/><div><span className="eyebrow">Your session speaker</span><h1>Mahfoudh<br/>Arous</h1><p className="speaker-caption">Senior Software Engineer &amp; Mentor</p><ul>{slide.bullets.slice(2).map(b => <li key={b}>{b.startsWith("Website & contact:") ? <a href="https://mahfoudh.dev/" target="_blank" rel="noopener noreferrer">Website &amp; contact: mahfoudh.dev ↗</a> : b}</li>)}</ul></div></div> : <div className="slide-content"><span className="eyebrow">{stages[index]}</span><h1>{slide.title}</h1>
          {index === 17 ? <div className="closing-layout"><p className="closing-thanks">Thank you for taking part in the 7.77 session.</p><div className="closing-links">{[
            {title: "Explore the 7.77 Program", url: "https://skillscenter.algerietelecom.dz/programs/777-program", display: "skillscenter.algerietelecom.dz", detail: "Official program information and digital learning opportunities"},
            {title: "Connect with Mahfoudh", url: "https://mahfoudh.dev/", display: "mahfoudh.dev", detail: "My work, projects and ways to get in touch"},
          ].map(link => <a className="closing-link" key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"><div><h2>{link.title} <span aria-hidden="true">↗</span></h2><p>{link.detail}</p><strong>{link.display}</strong></div><div className="closing-qr"><QrCode value={link.url} size={128} label={`Scan to open ${link.title}`}/></div></a>)}</div><p className="closing-action">Your next step: build one page, check it, then share it.</p></div> : [6,7,14].includes(index) ? <div className="explainer-layout" key={index}>
            <ExplainerDiagram kind={index === 6 ? "workflow" : index === 7 ? "prompt" : "publishing"}/>
            <div className="explainer-copy">
              {index === 6 ? <><div className="tools"><span>Gemini · Free account</span><span>Antigravity · Free account</span></div><ul><li>Gemini: plan the page, write copy and guide the design.</li><li>Antigravity: build, preview and improve.</li><li>AI produces a draft. You check the result.</li></ul></> : index === 7 ? <><h2>Before you press Send</h2><ul><li>Give AI a specific audience and goal.</li><li>Ask for the format you need.</li><li>Use supplied facts and mark missing details.</li></ul></> : <><h2>Different stages, different evidence</h2><ul><li><a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Git <span aria-hidden="true">↗</span></a> saves versions of your project locally.</li><li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a> hosts your source repository online.</li><li>GitHub Pages publishes the website.</li><li>Open the public URL to verify success.</li><li>Upload reviewed files; never upload secrets.</li></ul></>}
            </div>
          </div> : index === 10 ? <div className="quiz-layout">
            <p className="quiz-goal">Which prompt best reduces invented professional claims?</p>
            <ol className="quiz-options" aria-label="Answer choices">
              {slide.bullets.slice(1,4).map((b,i) => <li key={b} className={answer && i === 1 ? "is-correct" : ""}><span className="quiz-letter">{"ABC"[i]}</span><span>{b.slice(3)}{answer && i === 1 && <strong className="correct-label">Correct answer</strong>}</span></li>)}
            </ol>
            <div className="quiz-actions"><p>Vote A, B or C in the poll or chat.</p><button onClick={() => setAnswer(!answer)} aria-expanded={answer} aria-controls={printing ? "print-quiz-explanation" : "quiz-explanation"}>{answer ? "Hide answer" : "Reveal answer"}</button></div>
            <div id={printing ? "print-quiz-explanation" : "quiz-explanation"} className="quiz-explanation" aria-live="polite">{answer ? <p><strong>B is the best choice.</strong> Clear limits reduce invention, but do not guarantee accuracy. Check every professional claim against the source.</p> : <p>Discuss after voting: what should you still check in the answer?</p>}</div>
          </div> : <ul className={index===8 ? "compact" : ""}>{slide.bullets.map(b => <li key={b}>{b}</li>)}</ul>}

        </div>}
      </>}
      <div className="slide-footer"><span>{index===0 ? "English slides · Darja delivery" : "AI in Practice · October 15, 2026"}</span><span>{String(index+1).padStart(2,"0")} / {slides.length}</span></div>
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
