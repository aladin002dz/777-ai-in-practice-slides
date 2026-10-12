import SessionDeck from "@/components/SessionDeck";
import slides from "@/lib/session-slides.json";
import { siteUrl } from "@/lib/site-url";
export default function Page(){
  const resource = {
    "@context":"https://schema.org", "@type":"LearningResource",
    name:slides[0].title,
    description:"English presentation for the 7.77 online session on 15 October 2026, 19:30–20:45 Algeria time, with spoken delivery in Algerian Darja.",
    inLanguage:"en", learningResourceType:"Presentation", educationalLevel:"Beginner",
    author:{"@type":"Person",name:"Mahfoudh Arous"},
    about:["AI prompting","Personal websites","Portfolios","Git","GitHub Pages"],
    ...(siteUrl ? {url:siteUrl.href} : {})
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(resource).replace(/</g,"\\u003c")}}/>
    <SessionDeck/>
    <section className="session-transcript" aria-label="Session content">
      <details><summary>Read the session overview and all {slides.length} slides</summary>
        <h2>{slides[0].title}</h2>
        <p>Mahfoudh Arous · 7.77 online session · 15 October 2026 · 19:30–20:45 Algeria time. English slides with Algerian Darja delivery.</p>
        <p>Learn RCTFC prompting, reusable instructions, website design and review, Git, GitHub and GitHub Pages through a professional LinkedIn-to-portfolio example.</p>
        {slides.slice(1).map((s,i)=><section key={s.title}><h3>{i+2}. {s.title}</h3><ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul></section>)}
      </details>
    </section></>;
}
