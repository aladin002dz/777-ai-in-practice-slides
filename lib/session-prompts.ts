/** Copy-ready prompts for the final "Session prompts" notes slide, in workflow order. */
export interface SessionPrompt {
  step: string;
  title: string;
  tool: "Gemini" | "Antigravity" | "Any AI chat";
  /** Gemini model to pick before sending (labels vary by plan; checked October 2026). */
  model?: string;
  /** Files to attach to the message before sending. */
  attach?: string[];
  /** Short presenter hint shown above the prompt; not copied. */
  tip?: string;
  text: string;
  /** File to save the answer to, shown after the prompt; not copied. */
  save?: { file: string; note: string };
}

export const sessionPrompts: SessionPrompt[] = [
  {
    step: "Plan",
    title: "Extract facts from my LinkedIn PDF (RCTFC)",
    tool: "Gemini",
    model: "Pro — most careful reading of the PDF (Flash if Pro isn't available)",
    attach: ["LinkedIn profile PDF"],
    tip: "LinkedIn: Profile → Resources → Save to PDF. Gemini can't open LinkedIn links, so the PDF is the source.",
    text: `Role: Act as a careful profile editor.
Context: I attached my LinkedIn profile as a PDF. I want to build my one-page personal portfolio website from it.
Task: Extract the facts I can use on my website: name, headline, city/country, about, experience (role, company, dates), education, skills, projects, certifications and languages.
Format: One table: category | exact fact from the PDF | notes.
Constraints:
- Use only the PDF; copy facts exactly and keep names and dates as written.
- If something is missing or unreadable, write [MISSING]; do not guess.
- Do not add achievements, numbers or clients that are not in the PDF.
- Leave out private details (phone number, personal email, home address).
- No marketing copy and no code yet.`,
    save: { file: "facts.md", note: "Paste Gemini's table, correct it against the PDF and add your public links (LinkedIn URL…)." },
  },
  {
    step: "Plan",
    title: "Turn the facts into website copy (RCTFC)",
    tool: "Gemini",
    model: "Flash — fast and good at writing",
    attach: ["facts.md"],
    text: `Role: Act as a website content planner.
Context: I attached facts.md with my approved facts. I checked every fact myself. This is for my one-page personal portfolio. My visitors are [recruiters / clients / collaborators]. After reading, they should [contact me on LinkedIn / view my projects].
Task: Write the copy for these sections: hero (name + one-line headline), about, skills, experience, projects, contact.
Format: A table: section | heading | copy | source fact from the file. Then a short list of missing information.
Constraints:
- Use only the facts in the attached file; do not invent anything.
- Under 250 words in total. Friendly and professional.
- For contact, use only the public links in the file — no phone number and no contact form.`,
    save: { file: "copy.md", note: "Paste the copy table and check every line before you design." },
  },
  {
    step: "Design",
    title: "Desktop + mobile design in one image (Nano Banana)",
    tool: "Gemini",
    model: "Nano Banana 2.1 — Gemini's image model (Create image)",
    attach: ["copy.md"],
    tip: "Ask for small changes in follow-ups (e.g. \"make the accent color warmer\").",
    text: `Create ONE high-fidelity UI mockup image (16:9) of a modern one-page personal portfolio website, showing the SAME design on two devices side by side:
- Left (about two-thirds of the width): a desktop browser window.
- Right: a mobile phone screen showing the top of the same page.

Sections from top to bottom:
1. Navigation bar with my name and links: About, Skills, Experience, Projects, Contact (a hamburger menu on mobile)
2. Hero: name "[Your Name]", headline "[Your headline]", one button "View my work"
3. About: two short lines
4. Skills: shown as rounded tags
5. Experience: a simple vertical timeline
6. Projects: three cards with a title and one line each (one column on mobile)
7. Contact: a LinkedIn button

Style: clean and minimal, lots of white space, off-white background, dark text, ONE accent color [teal #0F766E], rounded cards, modern sans-serif font, clear visual hierarchy.
Both screens must use exactly the same colors, font, content and components; only the layout adapts (one column, full-width cards and easy-to-tap buttons on mobile).
Use the real headings and short text from the attached copy.md; keep the text short and readable.
Use a simple circle placeholder for the profile photo — no stock photos of people.`,
    save: { file: "design.png", note: "Download the image you approve." },
  },
  {
    step: "Build",
    title: "Gemini writes the Antigravity prompt",
    tool: "Gemini",
    model: "Pro — best at reading the design and writing precise instructions",
    attach: ["copy.md", "design.png"],
    text: `Act as a senior front-end developer who writes prompts for an AI coding agent.
I will use Google Antigravity to build my website. Using the attached copy.md (approved copy) and design.png (desktop + mobile design), write ONE complete prompt for Antigravity.
Both files will be in my website folder, so the prompt should tell Antigravity to read them from there.

The prompt must ask Antigravity to:
- Build a static one-page website with only index.html and style.css (no frameworks, no build step, no external libraries).
- Use exactly my approved copy — no new claims and no lorem ipsum.
- Match the design image for both desktop and mobile: layout, colors (give exact hex codes), font, spacing, cards and buttons.
- Be responsive: one column on phones, readable from 360px wide, with a menu that works on mobile.
- Use semantic HTML, alt text, good color contrast and visible keyboard focus.
- Add a page <title> and a meta description.
- Use only my real public links; no contact form.
- Open a preview when finished and list what it checked.

Return only the final prompt inside one code block, ready to paste.`,
    save: { file: "antigravity-prompt.md", note: "Put it in your website folder with copy.md and design.png — you paste it in the next step." },
  },
  {
    step: "Build",
    title: "Build the website in Antigravity",
    tool: "Antigravity",
    attach: ["design.png"],
    tip: "File → Open Folder: open your website folder (with copy.md, design.png and antigravity-prompt.md inside). In the Agent panel, paste this, replace the last line with the content of antigravity-prompt.md, and attach design.png.",
    text: `Build my website by following the instructions below.
The approved copy is in copy.md in this folder. The attached design.png shows the design on desktop and mobile — match it.

[paste the content of antigravity-prompt.md here]`,
  },
  {
    step: "Review",
    title: "Review before changing anything",
    tool: "Antigravity",
    text: `Review the website you just built. Do not change any files yet.

Check:
1. True — every text matches my approved copy; nothing is invented.
2. Mobile — no horizontal scroll or overlapping text at 375px wide.
3. Links — every menu link and button goes to the right place.
4. Accessible — headings in order, alt text, enough contrast, visible keyboard focus.
5. Safe — no private information, no fake forms, no placeholder text.

Return a table: issue | where | suggested fix. Then tell me the ONE most important fix.`,
  },
  {
    step: "Review",
    title: "Apply one precise fix",
    tool: "Antigravity",
    tip: "Describe what you saw and what you want — one fix at a time.",
    text: `Apply only this fix: [describe the problem and the result you want — e.g. "On a 375px phone the project cards overflow the screen. Stack them in one column."]

Do not change anything else: keep the copy, colors and layout.
Then tell me which files changed and re-check the affected part on mobile.`,
  },
  {
    step: "Deploy",
    title: "Push to GitHub from Antigravity",
    tool: "Antigravity",
    tip: "Needs Git installed. First create an empty public repository on github.com and copy its URL. When Antigravity pushes, sign in to GitHub in the window that opens.",
    text: `Help me put this website on GitHub. Explain each step in one sentence before you run it, and ask me before you push.

1. Initialize Git in this folder (if it isn't already).
2. Create a .gitignore so my working files (facts.md, copy.md, design.png, antigravity-prompt.md) are not published.
3. Add only index.html, style.css and the images the site uses.
4. Commit with a clear message.
5. Connect to my repository: [paste your repository URL]
6. Push to the main branch.

Make sure no secrets or private files are included.
Then tell me how to turn on GitHub Pages (Settings → Pages → Deploy from a branch → main → / root) and what my public URL will be.`,
  },
  {
    step: "Level up",
    title: "SEO: title, description and link preview",
    tool: "Antigravity",
    text: `Act as an SEO specialist. Improve my website's search basics without changing its visible content or design.
Apply in index.html:
- a clear <title> under 60 characters with my name and role
- a meta description under 155 characters
- Open Graph tags (title, description, image) so links look good on LinkedIn and WhatsApp
- exactly one H1, logical H2s and descriptive alt text
Use only facts from my approved copy. List every change you made.`,
  },
  {
    step: "Level up",
    title: "Fix the top Lighthouse issues",
    tool: "Antigravity",
    tip: "Chrome → right-click → Inspect → Lighthouse → Analyze page load.",
    text: `I ran a Lighthouse audit in Chrome on my website. Here are the results:
[paste the scores and the list of issues]

Explain the top 3 issues in simple words, then fix them in my files.
Do not change the content or the design style. When done, tell me what to re-test.`,
  },
  {
    step: "Challenge",
    title: "Mini challenge: your website brief",
    tool: "Any AI chat",
    tip: "Start with Context, Task and one Constraint — the rest is a bonus.",
    text: `Role: Act as a website content planner.
Context: I am [who you are]. My visitors are [who]. After reading, they should [one action].
Task: Outline one [portfolio / service / small-business] page with [sections].
Format: A table: section | suggested copy. Then a list of missing information.
Constraints: Use only the facts below. Under 180 words. Do not invent qualifications, clients, results, prices or contact details. No code.
Facts: [paste your facts]`,
  },
];
