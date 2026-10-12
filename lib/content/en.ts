import type { Deck } from "./types";

const en: Deck = {
  locale: "en",
  dir: "ltr",
  meta: {
    title: "Practical AI: Build Your Personal Website",
    description:
      "Interactive workshop presentation by Mahfoudh Arous: Plan, design, build and publish your personal portfolio on GitHub Pages using Gemini and Antigravity — with prompting, design, SEO and accessibility tips. Tamkeen Club for Media Skills, Chlef.",
    keywords: ["Mahfoudh Arous", "Practical AI workshop", "personal website", "portfolio", "GitHub Pages", "Gemini", "Antigravity", "Nano Banana", "prompt engineering", "Chlef", "Algeria", "Tamkeen Club"],
  },
  ui: {
    langName: "English",
    prev: "Previous",
    next: "Next",
    switchLanguage: "Language",
    swipeHint: "Swipe to navigate",
    keyboardHint: "Use the ← → arrow keys",
    home: "Home",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit fullscreen",
    scanToOpen: "Scan to open online",
    lightMode: "Switch to light theme",
    darkMode: "Switch to dark theme",
    levelBeginner: "Beginner",
    levelAdvanced: "Advanced",
    slide: "Slide",
  },
  slides: [
    {
      type: "title",
      title: "Practical AI: From Idea to Personal Website",
      subtitle:
        "Plan, design, build and deploy your portfolio on GitHub Pages without complex setup",
      speaker: "Mahfoudh Arous — Tamkeen Club for Media Skills · Chlef",
    },
    {
      type: "content",
      eyebrow: "Our Goal",
      title: "A Live Website on Your Phone",
      lines: [
        {
          marker: "bullet",
          bold: "A concrete outcome:",
          text: "Leave today with a clear path to a live one-page personal website you can open on any smartphone.",
        },
        {
          marker: "bullet",
          bold: "Guided in plain language:",
          text: "Directing modern AI tools with structured human briefs instead of memorizing complex coding syntax.",
        },
        {
          marker: "bullet",
          bold: "Human responsibility:",
          text: "AI generates the draft and code, but you verify every claim, test the layout, and approve the result.",
        },
        {
          marker: "bullet",
          bold: "For every level:",
          text: "Slides tagged Beginner give you the essentials; slides tagged Advanced give you the pro techniques.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "The Roadmap",
      title: "The 4 Practical Stages",
      lines: [
        {
          marker: "number",
          number: 1,
          bold: "Planning & Content:",
          text: "Define your audience, structure key sections, and brief Gemini with the RCTFC prompting framework.",
        },
        {
          marker: "number",
          number: 2,
          bold: "Visual Design:",
          text: "Generate mockups with Nano Banana, then fix layout hierarchy, typography and color contrast.",
        },
        {
          marker: "number",
          number: 3,
          bold: "Building with Antigravity:",
          text: "Produce clean HTML, CSS and JavaScript that is responsive, accessible and SEO-ready.",
        },
        {
          marker: "number",
          number: 4,
          bold: "Publishing on GitHub Pages:",
          text: "Deploy to a free public URL, test on mobile, and share it with the world.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Today's Toolkit",
      title: "Four Free Tools, One Workflow",
      level: "beginner",
      lines: [
        {
          marker: "bullet",
          bold: "Gemini:",
          text: "Plan and write your content, save reusable Gems, and design visuals with Nano Banana image generation.",
        },
        {
          marker: "bullet",
          bold: "Antigravity:",
          text: "Google's AI coding agent: it plans, writes the files, and previews your site in a built-in browser.",
        },
        {
          marker: "bullet",
          bold: "GitHub + GitHub Pages:",
          text: "Stores every version of your code and hosts your website for free at `username.github.io`.",
        },
        {
          marker: "bullet",
          bold: "Chrome DevTools & Lighthouse:",
          text: "Test phone sizes and get scores for performance, accessibility and SEO — already in your browser.",
        },
      ],
    },
    {
      type: "block",
      label: "Stage 1",
      title: "Planning & Content Structuring",
    },
    {
      type: "content",
      eyebrow: "Stage 1 · Audience & Purpose",
      title: "Audience First: Why Build a Website?",
      lines: [
        {
          marker: "bullet",
          bold: "Who is your visitor?",
          text: "Potential clients, future employers, academic collaborators, or student community peers.",
        },
        {
          marker: "bullet",
          bold: "What is their action?",
          text: "Contacting you directly, exploring your portfolio samples, or learning about your specific skills.",
        },
        {
          marker: "bullet",
          bold: "Essential sections:",
          text: "Hero headline ('I am … I help …'), About summary, Core skills, 2 featured project cards, and Contact.",
        },
        {
          marker: "bullet",
          bold: "Simplicity wins:",
          text: "A polished, honest single-page website is vastly more effective than an unfinished multi-page site.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 1 · Prompting Framework",
      title: "The RCTFC Prompting Framework",
      lines: [
        {
          marker: "bullet",
          bold: "R — Role:",
          text: "Define AI's persona (e.g. 'Patient website content strategist for beginners').",
        },
        {
          marker: "bullet",
          bold: "C — Context:",
          text: "Background scenario (e.g. 'One-page portfolio for a learner in Chlef seeking project collaborations').",
        },
        {
          marker: "bullet",
          bold: "T — Task:",
          text: "Exact requested action (e.g. 'Structure the 5 page sections and draft concise copy for each').",
        },
        {
          marker: "bullet",
          bold: "F — Format:",
          text: "Output layout (e.g. 'A markdown table with Section, Purpose, Draft Copy, and Facts to Verify').",
        },
        {
          marker: "bullet",
          bold: "C — Constraints:",
          text: "Strict guardrails (e.g. 'Use only supplied facts; never invent credentials or fake testimonials; keep copy brief').",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 1 · Before & After",
      title: "From a Vague Wish to a Precise Brief",
      lines: [
        {
          marker: "quote",
          text: "Make me a portfolio website.",
        },
        {
          marker: "none",
          indent: 1,
          bold: "Result:",
          text: "a generic template, an invented biography, the wrong language — and lots of rework.",
        },
        {
          marker: "quote",
          text: "You are a content planner. I'm a design student in Chlef looking for collaborators. Draft 5 sections as a table, in Arabic. Use only the facts below and mark gaps as [TO CONFIRM].",
        },
        {
          marker: "none",
          indent: 1,
          bold: "Result:",
          text: "a structured, honest draft that is ready for your review in one shot.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 1 · Prompting Tips",
      title: "5 Habits for Better Answers",
      level: "beginner",
      lines: [
        {
          marker: "bullet",
          bold: "One task per message:",
          text: "Plan first, then write the copy, then the code — not everything in a single prompt.",
        },
        {
          marker: "bullet",
          bold: "Let the AI ask first:",
          text: "'Before answering, ask me up to 5 questions about my goals and audience.'",
        },
        {
          marker: "bullet",
          bold: "Show an example:",
          text: "Paste a sentence or a site you like — one example beats a paragraph of description.",
        },
        {
          marker: "bullet",
          bold: "Iterate precisely:",
          text: "'Keep everything, only shorten the About section to 3 lines.' Say what to keep, not just what to change.",
        },
        {
          marker: "bullet",
          bold: "State language & length:",
          text: "'Answer in Arabic, maximum 60 words per section, simple vocabulary.'",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 1 · Prompting Tips",
      title: "Pro Prompting Techniques",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "Separate data from instructions:",
          text: "Wrap pasted material in tags like `<profile>…</profile>` so the model never confuses your CV with your orders.",
        },
        {
          marker: "bullet",
          bold: "Plan → review → execute:",
          text: "Ask for a plan, correct it, and only then approve the work. Cheap to fix a plan, costly to fix a result.",
        },
        {
          marker: "bullet",
          bold: "Explain the why:",
          text: "'Keep it short because visitors read on phones' generalizes better than a bare 'be short'.",
        },
        {
          marker: "bullet",
          bold: "Built-in self-check:",
          text: "'Before finishing, verify every constraint and list any you could not meet.'",
        },
        {
          marker: "bullet",
          bold: "Build a prompt library:",
          text: "Save prompts that worked as templates with [placeholders] — your personal toolkit grows every project.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 1 · Data & Privacy",
      title: "Reliable Facts, Protected Privacy",
      lines: [
        {
          marker: "bullet",
          bold: "LinkedIn without scraping:",
          text: "On your profile: More → Save to PDF, then upload that PDF to Gemini as your source of facts.",
        },
        {
          marker: "bullet",
          bold: "Fact-check every line:",
          text: "AI fills gaps with confident fiction. Ask it to mark unknowns as [TO CONFIRM] and verify each one.",
        },
        {
          marker: "bullet",
          bold: "Label training exercises:",
          text: "Never pass off academic exercises as real commercial clients. Honesty builds lasting professional trust.",
        },
        {
          marker: "bullet",
          bold: "Protect your privacy:",
          text: "Never paste passwords, national ID numbers, home addresses, or secret API keys into AI prompts.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 1 · Reusable Instructions",
      title: "Gems & Skills: Write Your Rules Once",
      lines: [
        {
          marker: "bullet",
          bold: "Gem (in Gemini):",
          text: "A custom assistant with a name, standing instructions and knowledge files — e.g. your CV and tone guide.",
        },
        {
          marker: "bullet",
          bold: "Skill (in coding agents):",
          text: "A folder with a `SKILL.md` file — name, description, steps — that the agent loads only when the task matches.",
        },
        {
          marker: "bullet",
          bold: "Same idea:",
          text: "Your quality rules travel with you, instead of being retyped in every new conversation.",
        },
        {
          marker: "bullet",
          bold: "Where to find them:",
          text: "Gems: gemini.google.com → Gems. Skills: supported by a growing list of agents — check your tool's docs.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 1 · Reusable Instructions",
      title: "How to Write a Great Skill or Gem",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "One job per skill:",
          text: "'portfolio-copy-reviewer' beats 'do-everything'. Small skills are easier to trigger, test and fix.",
        },
        {
          marker: "bullet",
          bold: "The description is the trigger:",
          text: "Say what it does AND when to use it — agents choose which skill to load from that one line.",
        },
        {
          marker: "bullet",
          bold: "Steps, then a checklist:",
          text: "A numbered procedure followed by a final quality checklist the agent must pass before answering.",
        },
        {
          marker: "bullet",
          bold: "Show one good output:",
          text: "A short example of the expected result teaches more than a page of rules.",
        },
        {
          marker: "bullet",
          bold: "Test and version it:",
          text: "Run it on 3 real requests, fix where it drifts, and keep it in Git like any other code.",
        },
      ],
    },
    {
      type: "block",
      label: "Stage 2",
      title: "Visual Design & Layout Reference",
    },
    {
      type: "content",
      eyebrow: "Stage 2 · Principles",
      title: "Design Essentials for Modern Portfolios",
      level: "beginner",
      lines: [
        {
          marker: "bullet",
          bold: "Readable typography:",
          text: "Maximum 2 fonts, body text at least 16px, line height about 1.6, lines of 60–75 characters.",
        },
        {
          marker: "bullet",
          bold: "The 60-30-10 color rule:",
          text: "60% neutral background, 30% primary color, 10% accent reserved for buttons and links.",
        },
        {
          marker: "bullet",
          bold: "Contrast you can measure:",
          text: "At least 4.5:1 for text and 3:1 for large text and icons — check it with a free contrast checker.",
        },
        {
          marker: "bullet",
          bold: "Whitespace & hierarchy:",
          text: "A consistent spacing scale (8, 16, 24, 32px…) and one clear focal point per section.",
        },
        {
          marker: "bullet",
          bold: "Reading direction:",
          text: "Right-to-left (RTL) for Arabic, left-to-right (LTR) for English/French — mirror the layout, not just the text.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 2 · Nano Banana",
      title: "Prompting Nano Banana for Web Mockups",
      lines: [
        {
          marker: "bullet",
          bold: "Use a recipe:",
          text: "Subject + layout + style + palette + mood: 'Portfolio homepage screenshot, desktop 16:9, minimal, warm white, navy text, green accent'.",
        },
        {
          marker: "bullet",
          bold: "Be concrete:",
          text: "Hex codes (#0F766E), font styles ('geometric sans-serif') and section names beat 'nice colors'.",
        },
        {
          marker: "bullet",
          bold: "Edit, don't restart:",
          text: "'Keep everything, make the header navy.' Conversational edits keep the design consistent.",
        },
        {
          marker: "bullet",
          bold: "Use reference images:",
          text: "Upload a site you admire, or your photo to get a matching avatar or hero illustration.",
        },
        {
          marker: "bullet",
          bold: "Generate assets, too:",
          text: "Profile illustration, hero background, favicon — then compress them before using them on the site.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 2 · Visual Reference",
      title: "From Image Mockup to Working Website",
      lines: [
        {
          marker: "bullet",
          bold: "An image is not code:",
          text: "Generated images cannot be clicked, copied, indexed by Google, or adapted across screen sizes.",
        },
        {
          marker: "bullet",
          bold: "Separate visuals from copy:",
          text: "Keep your approved text stored separately; AI-rendered text in images is often misspelled.",
        },
        {
          marker: "bullet",
          bold: "Iterate before building:",
          text: "Refine design decisions ('simplify layout', 'increase text contrast') before asking for implementation.",
        },
        {
          marker: "bullet",
          bold: "Hand over the image:",
          text: "Attach the final mockup to the coding agent as a visual reference, together with your approved copy.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 2 · Design Systems",
      title: "Design Systems, DESIGN.md & Templates",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "A system, not a picture:",
          text: "Color tokens, type scale, spacing, components and their states (hover, focus, disabled).",
        },
        {
          marker: "bullet",
          bold: "DESIGN.md:",
          text: "One markdown file that describes your system so coding agents follow it — browse examples on designmd.ai.",
        },
        {
          marker: "bullet",
          bold: "Extract it from your mockup:",
          text: "'Extract this image's palette, fonts and spacing as CSS variables and a DESIGN.md file.'",
        },
        {
          marker: "bullet",
          bold: "Templates, legally:",
          text: "Start from a gallery template and customize it — check the license and credit the author.",
        },
        {
          marker: "bullet",
          bold: "Light & dark from day one:",
          text: "Define both palettes as tokens and verify contrast in each theme, like these slides do.",
        },
      ],
    },
    {
      type: "block",
      label: "Stage 3",
      title: "Building with Antigravity",
    },
    {
      type: "content",
      eyebrow: "Stage 3 · Code Generation",
      title: "The Web Trio: HTML, CSS & JavaScript",
      lines: [
        {
          marker: "bullet",
          bold: "Clear roles for each file:",
          text: "index.html defines semantic structure, styles.css styles visual presentation, script.js adds interaction.",
        },
        {
          marker: "bullet",
          bold: "Lightweight static stack:",
          text: "No complex frameworks, npm build chains, or backend servers needed — simple files run in any browser.",
        },
        {
          marker: "bullet",
          bold: "Briefing Antigravity:",
          text: "Feed the agent the approved content table + design reference image + strict responsive rules.",
        },
        {
          marker: "bullet",
          bold: "Instant local preview:",
          text: "Verify the working page immediately in the built-in browser preview before uploading anywhere.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 3 · Working with an Agent",
      title: "Getting the Best from Antigravity",
      lines: [
        {
          marker: "bullet",
          bold: "Plan first:",
          text: "Use Planning mode, read the implementation plan, and comment on it before any code is written.",
        },
        {
          marker: "bullet",
          bold: "Small steps:",
          text: "One feature per request, checked in the preview each time. Big-bang requests hide big bugs.",
        },
        {
          marker: "bullet",
          bold: "Checkpoints with Git:",
          text: "Commit every working version, so a bad change is one click away from being undone.",
        },
        {
          marker: "bullet",
          bold: "Project rules:",
          text: "Write your stack, style and 'never do' rules in a rules file (e.g. `AGENTS.md`) the agent reads every time.",
        },
        {
          marker: "bullet",
          bold: "Debug with evidence:",
          text: "Paste the exact error, a screenshot, and what you expected versus what you saw.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 3 · Responsive Design",
      title: "Responsive: One Site, Every Screen",
      lines: [
        {
          marker: "bullet",
          bold: "Mobile-first:",
          text: "Style for a 360px phone first, then add `@media (min-width: …)` rules for larger screens.",
        },
        {
          marker: "bullet",
          bold: "The viewport tag:",
          text: "`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` — without it, phones zoom out.",
        },
        {
          marker: "bullet",
          bold: "Fluid layout:",
          text: "Flexbox and Grid, `rem` and `%` units, and `clamp()` for font sizes instead of fixed pixels.",
        },
        {
          marker: "bullet",
          bold: "Flexible images:",
          text: "`max-width: 100%` so nothing overflows, and `srcset` to serve smaller files to phones.",
        },
        {
          marker: "bullet",
          bold: "Test for real:",
          text: "DevTools device mode at 360 / 768 / 1280px, plus a real phone. Tap targets of 44px or more.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 3 · Accessibility",
      title: "Accessible to Everyone",
      lines: [
        {
          marker: "bullet",
          bold: "Semantic HTML:",
          text: "`header`, `nav`, `main`, `section`, `footer`; one `h1`, headings in order, real `button` and `a` elements.",
        },
        {
          marker: "bullet",
          bold: "Text alternatives:",
          text: "Meaningful `alt` text on informative images; `alt=\"\"` on decorative ones.",
        },
        {
          marker: "bullet",
          bold: "Contrast & color:",
          text: "4.5:1 minimum for text, and never convey meaning by color alone (add an icon or label).",
        },
        {
          marker: "bullet",
          bold: "Keyboard first:",
          text: "Tab through every link and button; the focus outline must always be visible.",
        },
        {
          marker: "bullet",
          bold: "Language & preferences:",
          text: "Set `lang` and `dir` on `<html>`; respect `prefers-reduced-motion` and `prefers-color-scheme`.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 3 · SEO",
      title: "SEO: Help People Find You",
      lines: [
        {
          marker: "bullet",
          bold: "Title & description:",
          text: "A unique `<title>` under 60 characters (name + role) and a meta description of about 155 characters.",
        },
        {
          marker: "bullet",
          bold: "Real, relevant text:",
          text: "Write what people search for — your name, skills and city — as text, never inside an image.",
        },
        {
          marker: "bullet",
          bold: "Social previews:",
          text: "Open Graph tags (`og:title`, `og:description`, `og:image` 1200×630) for rich WhatsApp/LinkedIn cards.",
        },
        {
          marker: "bullet",
          bold: "Structured data:",
          text: "A JSON-LD `Person` block with your name, job title and `sameAs` links (LinkedIn, GitHub).",
        },
        {
          marker: "bullet",
          bold: "Get indexed:",
          text: "Canonical URL, `sitemap.xml` and `robots.txt`, then submit the site in Google Search Console.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 3 · Performance",
      title: "Fast Sites & AI-Powered Audits",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "Light images:",
          text: "WebP/AVIF, resized to their display size (ideally under 200 KB), with `width`/`height` to avoid layout shift.",
        },
        {
          marker: "bullet",
          bold: "Load only what's seen:",
          text: "`loading=\"lazy\"` on images below the fold; no heavy libraries for a one-page site.",
        },
        {
          marker: "bullet",
          bold: "Fonts with care:",
          text: "System fonts or at most 2 weights, with `font-display: swap`.",
        },
        {
          marker: "bullet",
          bold: "Measure with Lighthouse:",
          text: "DevTools → Lighthouse: aim for 90+ in Performance, Accessibility, Best Practices and SEO.",
        },
        {
          marker: "bullet",
          bold: "Let AI audit AI:",
          text: "'Audit this site against our checklist, report the 3 worst issues, then fix only those.'",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 3 · Quality Checklist",
      title: "Review Before You Publish",
      lines: [
        {
          marker: "bullet",
          bold: "Mobile responsiveness:",
          text: "Test at smartphone widths (360px): no horizontal scrolling, readable text, comfortable tap targets.",
        },
        {
          marker: "bullet",
          bold: "Accessibility & structure:",
          text: "One logical H1, ordered headings, visible keyboard focus, descriptive alt text, sufficient contrast.",
        },
        {
          marker: "bullet",
          bold: "Real links, no fake forms:",
          text: "Use a real mailto: or public LinkedIn link. Avoid forms that pretend to send emails without a backend.",
        },
        {
          marker: "bullet",
          bold: "Security audit:",
          text: "Confirm no passwords, private credentials, or API keys exist in client-side HTML, CSS, or JS files.",
        },
      ],
    },
    {
      type: "block",
      label: "Stage 4",
      title: "Publishing on GitHub Pages",
    },
    {
      type: "content",
      eyebrow: "Stage 4 · Version Control",
      title: "Git: Track and Save Your Work",
      lines: [
        {
          marker: "bullet",
          bold: "Download Git:",
          text: "Free installer for Windows, macOS and Linux at [git-scm.com/downloads](https://git-scm.com/downloads).",
        },
        {
          marker: "bullet",
          bold: "Start tracking:",
          text: "`git init` — turns your project folder into a Git repository.",
        },
        {
          marker: "bullet",
          bold: "Stage your files:",
          text: "`git add .` — selects every changed file for the next save point.",
        },
        {
          marker: "bullet",
          bold: "Save a snapshot:",
          text: "`git commit -m \"first version\"` — records the staged files with a short message.",
        },
        {
          marker: "bullet",
          bold: "Upload to GitHub:",
          text: "`git push` — sends your commits to the repository online.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 4 · Free Hosting",
      title: "GitHub: Publish Your Site in 4 Steps",
      lines: [
        {
          marker: "number",
          number: 1,
          bold: "Create repository:",
          text: "On [GitHub](https://github.com), create a public repository named `username.github.io` (replace username with your exact handle).",
        },
        {
          marker: "number",
          number: 2,
          bold: "Add your files:",
          text: "Push from Antigravity or upload index.html, styles.css and script.js to the root of the main branch.",
        },
        {
          marker: "number",
          number: 3,
          bold: "Enable Pages:",
          text: "In Settings → Pages: set Source to 'Deploy from a branch', choose 'main' and '/(root)', then Save.",
        },
        {
          marker: "number",
          number: 4,
          bold: "Visit your live site:",
          text: "After a minute or two, open `https://username.github.io` on your phone!",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 4 · After Launch",
      title: "Going Further After Launch",
      level: "advanced",
      lines: [
        {
          marker: "bullet",
          bold: "Custom domain:",
          text: "Settings → Pages → Custom domain, a DNS CNAME record pointing to `username.github.io`, then Enforce HTTPS.",
        },
        {
          marker: "bullet",
          bold: "Google Search Console:",
          text: "Verify the site, submit your sitemap, and watch the indexing and page-experience reports.",
        },
        {
          marker: "bullet",
          bold: "Check your link preview:",
          text: "Paste your URL in WhatsApp or LinkedIn to confirm the Open Graph card looks right.",
        },
        {
          marker: "bullet",
          bold: "A README is part of the portfolio:",
          text: "Explain the project, the tools used and what you learned — recruiters read repositories too.",
        },
        {
          marker: "bullet",
          bold: "Automate later:",
          text: "When you outgrow plain files, GitHub Actions can build and deploy on every push.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Stage 4 · Ethical Responsibility",
      title: "You Are the Editor and Publisher",
      lines: [
        {
          marker: "bullet",
          bold: "Own your content:",
          text: "AI can draft code and sentences, but you are legally and professionally accountable for what goes live.",
        },
        {
          marker: "bullet",
          bold: "Public repositories are open:",
          text: "Anyone can read source code in a public GitHub repository. Never commit private notes or API secrets.",
        },
        {
          marker: "bullet",
          bold: "Factual accuracy:",
          text: "Regularly audit your live portfolio to ensure all project links, descriptions, and contact info stay up to date.",
        },
        {
          marker: "bullet",
          bold: "Continuous improvement:",
          text: "Your website is a living project. Update it monthly as you complete new training exercises and projects.",
        },
      ],
    },
    {
      type: "closing",
      title: "Your Next Step: Build Your Own",
      message:
        "AI provides the leverage and speed. Your personal voice, honesty, and consistent practice create the real value.",
      items: [
        {
          label: "Plan",
          value: "Brief Gemini with RCTFC, using only verified facts about you.",
        },
        {
          label: "Design",
          value: "One mockup, a 60-30-10 palette, contrast of 4.5:1 or more.",
        },
        {
          label: "Build & Check",
          value: "Responsive, accessible, SEO-ready — then a Lighthouse score of 90+.",
        },
        {
          label: "Publish",
          value: "Free hosting on GitHub Pages at `username.github.io`.",
        },
      ],
    },
    {
      type: "links",
      title: "Stay in Touch",
      message: "Keep learning after the workshop — scan a code to follow along.",
      links: [
        {
          label: "مركز التسلية العلمية الغلام محمد",
          kind: "Facebook page",
          url: "https://www.facebook.com/profile.php?id=100093977586577",
        },
        {
          label: "نادي تمكين للمهارات الإعلامية",
          kind: "Facebook page",
          url: "https://www.facebook.com/profile.php?id=61587196953545",
        },
        {
          label: "mahfoudh.dev",
          kind: "Website",
          url: "https://mahfoudh.dev/",
        },
        {
          label: "Mahfoudh Tech",
          kind: "YouTube channel",
          url: "https://www.youtube.com/@mahfoudh-tech-ar",
        },
      ],
    },
  ],
};

export default en;
