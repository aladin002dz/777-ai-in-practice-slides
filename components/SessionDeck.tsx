"use client";

import { useEffect, useRef, useState } from "react";
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
    <div className="presenter-bar"><span>7.77 · Online session · 15 October 2026</span><div><button onClick={() => setOverview(!overview)} aria-expanded={overview}>All slides</button><button onClick={fullscreen} aria-pressed={isFullscreen}>{isFullscreen ? "Exit fullscreen" : "Fullscreen"}</button><button onClick={() => window.print()}>Print</button></div></div>
    {notice && <p role="status">{notice}</p>}
    {overview ? <section className="overview" aria-label="Choose a slide">{slides.map((s,i) => <button key={s.title} onClick={() => {go(i);setOverview(false);}}><span>{String(i+1).padStart(2,"0")}</span>{s.title}</button>)}</section> : <article className={`slide slide-${index+1}`} aria-label={`Slide ${index+1} of ${slides.length}`} onTouchStart={e => {touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY};}} onTouchEnd={e => {if(!touch.current)return;const dx=e.changedTouches[0].clientX-touch.current.x;const dy=e.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>45 && Math.abs(dx)>Math.abs(dy))go(index+(dx<0?1:-1));touch.current=null;}}>
      {index === 0 ? <><div className="cover-speaker">Mahfoudh Arous</div><h1 className="cover-title">AI in Practice:<br/><span>Design, Build and Deploy your<br/>Personal Website &amp; Portfolio</span></h1><div className="cover-rule" aria-hidden="true"><span>▶</span></div><div className="cover-logos" aria-label="Program partners"><img src="session/ministry-logo.png" alt="Algerian ministry emblem"/><img src="session/algerie-telecom-logo.png" alt="Algérie Télécom"/><img src="session/mobilis-logo.png" alt="Mobilis"/></div><div className="cover-meta">7.77 Program | Age: 31–45</div><div className="cover-date">October 15, 2026 · 19:30–20:45</div></> : <>
        <div className="program-label"><span>7.77</span> program</div>
        {index === 1 ? <div className="program-intro"><div><h1>7.77 Digital Skills<br/>for <span>Every Generation</span></h1><p>A national digital empowerment initiative led by Algeria’s <strong>Ministry of Post and Telecommunications</strong>, in partnership with <strong>Algérie Télécom</strong> and <strong>Mobilis</strong>.</p></div><aside><strong>7 → 77</strong><p>Age range covered (years)</p><strong>Today’s session</strong><p>Practical AI for your professional presence online</p></aside><p className="program-purpose">Practical, inclusive and accessible digital learning. Today, we will design, build and deploy a personal website and portfolio.</p></div> : index === 2 ? <div className="speaker-layout"><img className="speaker-photo" src="session/speaker.png" alt="Mahfoudh Arous"/><div><span className="eyebrow">Your session speaker</span><h1>Mahfoudh<br/>Arous</h1><p className="speaker-caption">AI in Practice</p><ul>{slide.bullets.slice(1).map(b => <li key={b}>{b}</li>)}</ul></div></div> : <div className="slide-content"><span className="eyebrow">{stages[index]}</span><h1>{slide.title}</h1>
          {index === 6 ? <div className="rctfc-grid">{slide.bullets.slice(0,5).map((b,i) => <div key={b}><strong>{"RCTFC"[i]}</strong><p>{b}</p></div>)}<p className="wide">{slide.bullets[5]}</p></div> : index === 5 ? <><div className="tools"><span>Gemini · Free account</span><span>Antigravity · Free account</span></div><div className="workflow">{["Plan", "Design", "Build", "Review", "Deploy"].map((t,i) => <div key={t}><small>0{i+1}</small><strong>{t}</strong></div>)}</div><ul className="compact">{slide.bullets.filter(b => !b.startsWith("Our AI tools") && !b.startsWith("Repeat:")).map(b => <li key={b}>{b}</li>)}</ul></> : <ul className={index===7 || index===13 ? "compact" : ""}>{slide.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
          {index === 9 && <div className="quiz"><button onClick={() => setAnswer(!answer)} aria-expanded={answer}>{answer ? "Hide answer" : "Reveal answer"}</button>{answer && <p><b>B.</b> Use only supplied facts and mark missing information. Still check the answer.</p>}</div>}
        </div>}
      </>}
      <div className="slide-footer"><span>{index===0 ? "English slides · Darja delivery" : "AI in Practice · October 15, 2026"}</span><span>{String(index+1).padStart(2,"0")} / {slides.length}</span></div>
    </article>}
    <nav className="deck-controls" aria-label="Slide navigation"><button onClick={() => go(index-1)} disabled={index===0}>← Previous</button><label>Slide <select value={index} onChange={e => go(Number(e.target.value))}>{slides.map((s,i) => <option value={i} key={s.title}>{i+1}. {s.title}</option>)}</select></label><button onClick={() => go(index+1)} disabled={index===slides.length-1}>Next →</button></nav>
    <p className="keyboard-hint">Use ← → arrow keys · Home / End · Space to continue</p>
    <div className="print-deck">{slides.map((s,i)=><section className="print-slide" key={s.title}><div className="program-label"><span>7.77</span> program</div><h1>{s.title}</h1><ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul><footer>{i+1} / {slides.length}</footer></section>)}</div>
  </main>;
}
