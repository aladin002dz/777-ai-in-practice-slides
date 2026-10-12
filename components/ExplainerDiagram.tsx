import type { CSSProperties } from "react";

type Node = { title: string; detail: string; icon: string };
const icons: Record<string, string> = {
  plan: "M5 4h14v16H5z M8 8h8 M8 12h8 M8 16h5",
  design: "m4 17 1 3 3-1L20 7l-4-4z M13 6l4 4",
  build: "m8 6-6 6 6 6 M16 6l6 6-6 6 M14 3l-4 18",
  review: "M20 11a8 8 0 1 1-5-7 M8 11l4 4 9-10",
  deploy: "M7 18H5a4 4 0 0 1-1-8 7 7 0 0 1 13-2 5 5 0 0 1 2 10h-2 M12 21V11 m-4 4 4-4 4 4",
  role: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-3a8 8 0 0 1 16 0v3",
  context: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0 M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  task: "M4 5h16v16H4z M8 3v4 M16 3v4 M8 14l3 3 6-6",
  format: "M3 4h18v16H3z M3 10h18 M10 4v16",
  constraints: "m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6z M8 12l3 3 5-6",
  git: "M7 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6 M7 23a3 3 0 1 1 0-6 3 3 0 0 1 0 6 M17 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6 M7 7v10 M7 9h6l4-2",
  repo: "M4 3h16v18H4z M8 3v18 M12 7h5 M12 11h5",
  web: "M2 4h20v16H2z M2 9h20 M5 6h1 M8 6h1 M10 14l2 2 4-4"
};
const content: Record<string, { hub: string; caption: string; nodes: Node[] }> = {
  workflow: { hub: "Your website", caption: "Plan → Design → Build → Review → Deploy.", nodes: [
    {title:"Plan",detail:"Audience & goal",icon:"plan"},
    {title:"Design",detail:"Structure & clarity",icon:"design"},
    {title:"Build",detail:"Generate the page",icon:"build"},
    {title:"Review",detail:"Facts, mobile, links",icon:"review"},
    {title:"Deploy",detail:"Publish & verify",icon:"deploy"}
  ]},
  prompt: { hub: "A clear brief", caption: "RCTFC is a checklist. Always review the answer.", nodes: [
    {title:"Role",detail:"Who should AI act as?",icon:"role"},
    {title:"Context",detail:"For whom, and why?",icon:"context"},
    {title:"Task",detail:"What should it produce?",icon:"task"},
    {title:"Format",detail:"How to organize it?",icon:"format"},
    {title:"Constraints",detail:"What must it avoid?",icon:"constraints"}
  ]},
  publishing: { hub: "Your project", caption: "Save versions → host the source → publish and check the public URL.", nodes: [
    {title:"Git",detail:"Save local versions",icon:"git"},
    {title:"GitHub",detail:"Host the repository",icon:"github"},
    {title:"GitHub Pages",detail:"Public URL · open and check it",icon:"github"}
  ]}
};
const five = [[50,10],[85,37],[72,82],[28,82],[15,37]];
const four = [[25,20],[75,20],[75,77],[25,77]];
export default function ExplainerDiagram({ kind }: { kind: keyof typeof content }) {
  const data = content[kind];
  if (kind === "publishing") return <figure className="explainer publishing-flow" aria-label="Git to GitHub to GitHub Pages">
    <div className="publishing-steps">
      {data.nodes.map((n,i) => <div className="publishing-step" tabIndex={0} key={n.title}>
        <span className="icon-badge">{n.icon === "github" ? <GitHubMark/> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icons[n.icon]}/></svg>}</span>
        <div><strong>{n.title === "Git" || n.title === "GitHub" ? <a href={n.title === "Git" ? "https://git-scm.com/downloads" : "https://github.com"} target="_blank" rel="noopener noreferrer">{n.title} <span aria-hidden="true">↗</span></a> : n.title}</strong><span>{n.detail}</span></div><small>0{i+1}</small>
        {i < data.nodes.length-1 && <span className="publishing-arrow" aria-hidden="true">↓</span>}
      </div>)}
    </div><figcaption>{data.caption}</figcaption>
  </figure>;
  const positions = data.nodes.length === 5 ? five : four;
  return <figure className={`explainer${kind === "workflow" ? " explainer-cycle" : ""}`} aria-label={data.hub}>
    <div className="explainer-map">
      <svg className="explainer-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {kind === "workflow" ? <>
          <defs><marker id="workflow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M1 1 9 5 1 9Z" fill="#239b4b"/></marker></defs>
          {["M66 12 Q82 12 86 23", "M91 52 Q94 64 86 71", "M59 95 Q50 100 41 95", "M14 71 Q6 64 9 52"].map((d,i) => <path key={i} d={d} fill="none" stroke="#239b4b" strokeWidth=".65" markerEnd="url(#workflow-arrow)"/>)}
        </> : positions.map(([x,y],i) => <line key={i} x1="50" y1="47" x2={x} y2={y} />)}
      </svg>
      <div className="explainer-hub"><span>◎</span><strong>{data.hub}</strong></div>
      {data.nodes.map((n,i) => <div className="explainer-node" tabIndex={0} key={n.title} style={{"--x":`${positions[i][0]}%`,"--y":`${positions[i][1]}%`,"--delay":`${i*90}ms`} as CSSProperties}>
        <span className="icon-badge">{n.icon === "github" ? <GitHubMark/> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icons[n.icon]} /></svg>}</span>
        <strong>{n.title}</strong><span>{n.detail}</span>
      </div>)}
    </div><figcaption>{data.caption}</figcaption>
  </figure>;
}

function GitHubMark() { return <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>; }
