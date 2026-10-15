# Workshop prompt & skill guide

15 October 2026 · 7.77 online session · 19:30–20:45 (Algiers)

Companion to the public repository https://github.com/aladin002dz/777-ai-in-practice-slides, source `lib/session-slides.json` (21 slides). The local checkout folder is named `workshop-practical-ai-slides-ii`. Prepared examples for rehearsal; these prompts and skill templates have not been run or installed. English is the copy-and-paste master; you can explain each step aloud in Darja. Replace bracketed fields before use.

## 1. Presenter route

| Slides | Moment | What to use |
|---|---|---|
| 7–8 | Poll and everyday examples | Translator, tutor and bakery briefs below |
| 9–11 | Workflow and RCTFC | Compare the vague request with Prompt 2 |
| 12 | Quiz | Ask which instruction reduces invented claims; answer B, then remind participants to verify |
| 13 | Skills & Gems | Reusable instructions and the content-planner skill |
| 14 | Profile to portfolio | Prompt 1, then Prompt 2; approve the copy |
| 15 | Design and build | Prompts 3 and 4 |
| 16 | Review and improve | Prompts 5 and 6 |
| 17 | Git, GitHub and deployment | Prompt 7: prepare a walkthrough |
| 18 | Ten-minute challenge | Participant template and fictional examples |
| 19–21 | Next steps | Reuse the checklist and review before sharing |

Use one design direction and one useful revision. Prepare source text, approved copy and a working local page before the session. At about 60 seconds without a usable generation, say “This is the prepared checkpoint” and open the corresponding saved result. Keep the activity at 20:25 and Q&A at 20:35. No account creation or installation during the demonstration. Complete the brief review and one revision by 20:15 within the build block; reserve 20:15–20:25 for GitHub and deployment. Switch to Checkpoint B if needed.

## 2. Prepare the source

Main demonstration: Mahfoudh Arous’s approved public professional profile. Obtain the profile PDF or copied text before rehearsal. If a PDF export is unavailable, use manually prepared text. A profile URL alone is not evidence that the AI has read the profile. Supply the confirmed public URL separately rather than relying on the PDF to preserve links; treat it as a link destination, not evidence of profile claims.

Include only information you intend to share with the AI and audience. Remove private email addresses, phone numbers, addresses and unrelated information. Do not silently substitute claims from the slide biography for claims missing from the supplied profile. The existing `demo/index.html` is the fictional Amel backup, not Mahfoudh’s portfolio.

### Prompt 1 — Extract facts from the profile (Gemini, slide 14)

```text
Act as a careful profile editor. Read the attached profile PDF or the source text below. Extract facts for my personal website: name, professional headline, experience, skills, education, projects and confirmed public professional links.
Return a table: category | exact source fact | page or source section | uncertainty. Preserve dates and names. Distinguish explicit facts from your interpretation. If text is unreadable or information is absent, say so. Do not infer clients, achievements, metrics, availability or contact details. Do not write promotional copy or code yet.
SOURCE: [attach the approved PDF or paste the prepared text]
CONFIRMED PUBLIC LINK: [paste the exact public LinkedIn or portfolio URL you approve, or write none]
```

Check: compare every extracted fact with the original, especially dates, roles and project outcomes. Save a corrected fact table as Checkpoint A1.

## 3. Reusable instructions for the live demo (slide 13)

Paste this before the task in a normal Gemini chat, or use it as the instructions of a Gem prepared before rehearsal:

```text
You are a careful website content planner for nontechnical people. Use only the supplied approved facts. Write concise English. Keep the intended audience and visitor goal visible in your decisions. Never invent qualifications, clients, projects, metrics, testimonials, rates, availability or contact details. Clearly separate proposed copy, missing information and questions. Preserve the meaning of source facts. Use the requested output format. End with a short review checklist. Do not generate code unless requested. Do not publish anything.
```

Live teaching focus: save one reusable checklist in a note or Gem and apply it once. Mention SKILL.md as the builder equivalent; leave package setup and the detailed comparisons for later reading.

A prompt requests one task. Reusable instructions guide repeated tasks. A Gem stores custom instructions and supporting knowledge in Gemini. A Skill packages instructions and sometimes resources in tools that support Skills. Pasting the text above into a chat does not install a Skill. The same intent can be adapted to either mechanism, but their setup and capabilities differ.

## 4. The main demo: copy-ready prompts

### Prompt 2 — Turn facts into approved copy (Gemini, slides 10–11 and 14)

```text
Role: Act as a website content planner.
Context: I am Mahfoudh Arous. Use only the corrected fact table below from my approved public professional profile. My audience is people who want to understand my professional work. The main visitor goal is to understand my experience and find my confirmed public professional link.
Task: Draft one personal portfolio page: introduction, experience/skills, supported projects, about and next step. Omit sections that have no supporting facts.
Format: Return a table: section | suggested English copy | supporting source fact. Then list missing information and a five-point review checklist.
Constraints: Keep website copy under 220 words. Give one direction. Do not invent qualifications, clients, results, testimonials, rates, availability or contact details. Use only an approved public link for the next step; if none is supplied, flag this instead of adding a link or form. Do not generate code or publish.
APPROVED FACT TABLE: [paste Checkpoint A1]
```

For comparison, first show “Make me a professional website.” Ask: what audience, facts and output are missing? Explain that RCTFC is a practical checklist, not a guarantee of correctness.

Check: approve each sentence against its source. Save the selected copy as Checkpoint A2; do not build directly from an unchecked first draft.

### Prompt 3 — Choose one design direction (Gemini, slide 15)

```text
Using the approved copy below, describe one responsive website direction for a nontechnical audience. Use an off-white background, dark teal text/accent, system sans-serif fonts, readable spacing and clear headings. Include introduction, experience/skills, supported projects, about and next step only where approved copy exists. Use selectable text and section navigation. Stack the page in one column on a phone.
Return a short design brief and implementation checklist. Do not change the approved copy or invent content. No external fonts/images, animation, tracking or forms. Do not generate an image or code. Note anything that requires my decision.
APPROVED COPY: [paste Checkpoint A2]
```

Check: headings, contrast and mobile structure should be understandable before implementation.

### Prompt 4 — Build the local website (Antigravity, slide 15)

Open a separate disposable demo folder before running this prompt. Supply the approved copy and design brief together.

```text
Build a static responsive English one-page portfolio using only the approved copy and design brief below. Create index.html and style.css in the currently selected demo folder only. If those files already exist, inspect them and preserve unrelated work; do not overwrite unrelated content.
Use semantic HTML, a correct page title and language, local relative paths, system fonts, an off-white background and dark teal accent. Include a skip link, clear headings, section navigation, visible keyboard focus and a mobile single-column layout. Use real text, not a screenshot of text. Include only approved public links and make every control functional.
No forms, external dependencies, network requests, tracking or invented facts. Do not install packages, initialize Git, push, deploy or modify other folders.
Explain the changed files and how to open the local preview. Report checks actually performed separately from checks still needing a browser or human review.
APPROVED COPY: [paste Checkpoint A2]
DESIGN BRIEF: [paste the approved Prompt 3 result]
```

Check: open the local page; inspect the text, phone-width layout, anchors and keyboard focus. Save the reviewed page as Checkpoint B. File creation alone does not prove the page works.

### Prompt 5 — Review before improving (Antigravity, slide 16)

```text
Review the current demo against the approved copy below. Do not edit files yet. Check source fidelity, headings, local paths, real link destinations, mobile overflow, keyboard navigation, visible focus and the absence of fake forms or private information.
Return a concise table: issue | evidence or location | impact | suggested fix | verification method. Distinguish code inspection from behavior observed in a browser. If you cannot open a browser, say which checks remain unverified. Prioritize the single most useful improvement. Do not invent a defect or claim a check passed without evidence. Do not publish.
APPROVED COPY: [paste Checkpoint A2]
```

Check: demonstrate the top finding visibly before requesting a change. If there is no useful issue, explain that the review found no change to make.

### Prompt 6 — Make one precise revision (Antigravity, slide 16)

```text
Apply only this reviewed improvement: [state one observed issue and the desired result]. Preserve all approved facts, the design direction and unrelated files. Do not add claims, contact information, dependencies or forms. Summarize what changed and repeat the checks affected by this edit. Clearly separate observed results from checks still pending. Do not publish.
```

Example, only if observed: “The introduction runs beyond the screen at 375 px wide. Make it wrap within the viewport while preserving its wording.” A useful revision has a visible reason and an observable result. If no defect is observed, use this optional design preference: “Increase the main link’s vertical padding by 4 px to make it feel more spacious on a phone. Preserve its wording and destination; check at 375 px for overflow and keyboard focus.” Explain that this is a preference, not a discovered defect.

### Prompt 7 — Prepare the deployment walkthrough (slide 17)

```text
Explain how these two static files could be published to a separate GitHub Pages project repository. This is preparation only: do not run commands, change settings, create a repository, upload files or publish.
Explain Git as local version history, GitHub as repository hosting and GitHub Pages as static website hosting. List the intended public files and anything that must remain private. Describe how to check deployment status and then open and test the public URL. Explain how project-relative paths affect assets. Preserve existing repositories and websites. Mark account-specific settings and any steps needing current documentation verification.
Prioritize the browser route: in a separate public project repository, use Add file → Upload files for index.html and style.css at the repository root, then commit the upload. In Settings → Pages, choose Deploy from a branch and the intended branch/root. No terminal is required for this route. Explain that the usual project URL includes /repository-name/ and publication may take up to 10 minutes; keep a verified prepared public page ready.
Return a short beginner-friendly walkthrough and a pre-publication review checklist. A URL pattern is not proof of a live website.
```

Use the session’s official reference when rehearsing: [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart). This guide does not claim that publishing settings or account availability have been rechecked. Actual publishing is a separate explicitly authorized action; afterward check both deployment status and the public page.

## 5. Example Skills to demonstrate or prepare

These are proposed custom Skill contents, not installed or tested Antigravity packages. Use the supported Skill format and location documented by your chosen tool; do not assume a shared installation path across tools. For the live session, the prepared reusable instruction set is enough. No extra plugin or Skill installation is needed for participants.

### Skill A — Approved-facts website planner

Best match for slide 13. Inputs: approved fact table, audience and visitor goal. Output: traceable copy and missing information. Example SKILL.md body:

```markdown
---
name: approved-facts-website-planner
description: Draft a one-page website brief and copy from an approved professional fact table.
---
# Approved-facts website planner
1. Read the supplied fact table, audience and visitor goal. If a critical input is missing, ask one concise question before drafting.
2. Propose only sections supported by the facts: introduction, experience/skills, supported projects, about and next step.
3. Write concise copy under 220 words unless another limit is requested.
4. Never invent credentials, clients, metrics, projects, testimonials, prices, availability or contact details.
5. Return section | proposed copy | supporting source fact, followed by missing information.
6. Flag interpretations and unsupported claims. Use only confirmed public links.
7. End with a short human review checklist. Do not build or publish.
```

Invocation example: “Use the approved-facts website planner instructions with this fact table. Audience: potential collaborators. Goal: understand my work and follow my approved professional link.” Attach the facts; naming a Skill does not make it available if it has not been installed.

### Skill B — Simple static portfolio builder

Use after content approval, for slide 15. Example SKILL.md body:

```markdown
---
name: simple-static-portfolio-builder
description: Build a local responsive HTML and CSS portfolio from approved copy and a design brief.
---
# Simple static portfolio builder
1. Confirm the selected demo folder from the environment and inspect existing files.
2. Require approved copy and a design brief. Do not treat raw profile text as approved copy.
3. Create or update only index.html and style.css within the selected folder; preserve unrelated work.
4. Use semantic HTML, system fonts, relative paths, clear headings, a skip link, visible focus and a mobile layout.
5. Use only approved links and facts. No fake forms, tracking, external dependencies or invented content.
6. Inspect the result and open a local preview if supported. Report completed checks and pending browser checks separately.
7. Summarize changes. Do not install packages, initialize Git, push or publish.
```

Invocation example: “Use the simple static portfolio builder instructions in the selected demo folder with this approved copy and design brief.”

### Skill C — Website review coach

Use for slide 16. Example SKILL.md body:

```markdown
---
name: website-review-coach
description: Review a small static website for source fidelity and basic usability before one focused revision.
---
# Website review coach
1. Read the approved copy and inspect the website without editing it.
2. Compare every public claim with the source. Flag unsupported content.
3. Check links, headings, phone-width layout, keyboard access, visible focus and private information.
4. Distinguish file inspection, observed browser behavior and checks that remain pending.
5. Return issue | evidence | impact | suggested fix | verification method.
6. Recommend one useful revision. Do not invent issues if none are found.
7. Edit only when requested, then repeat the affected checks. Do not publish.
```

Invocation example: “Use the website review coach instructions to compare this local page with the approved copy. Report findings first; do not edit.”

## 6. Participant challenge (slide 18)

Timing: 2 minutes for audience and goal, 4 minutes to write, 3 minutes for two volunteer examples, 1 minute to improve. Paper or chat is sufficient. Paste the template into chat at 20:25. Beginners may complete only Context, Task and one Constraint, keeping the supplied Role and Format, or adapt Lina, Karim or Nour Bakery. Completing all five fields from scratch is optional.

```text
Role: Act as a website content planner.
Context: My [fictional / approved public] profile is [facts]. My audience is [specific visitors]. Their goal is [one action].
Task: Outline one [portfolio / service / small-business] page with [supported sections].
Format: Return section | suggested copy | supporting source fact, then missing information.
Constraints: Use only the facts below. Keep the copy under 180 words. Do not invent qualifications, clients, results, testimonials, prices, schedules or contact details. Mark missing information. No code and no publishing.
FACTS: [paste facts]
```

### Example A — Freelance translator

```text
Role: Act as a website content planner.
Context: This is a fictional workshop exercise. Lina translates French and Arabic. She has two self-created practice samples, not client projects. Her audience is small associations that want to understand her language services.
Task: Outline a portfolio with introduction, language services, practice samples and next step.
Format: Section | suggested copy | source fact, then missing information.
Constraints: Under 180 words. Label samples as practice work. Do not invent certifications, clients, testimonials, prices or contact information. No contact link has been supplied: flag the missing next step. No code or publishing.
```

### Example B — Private tutor

```text
Role: Act as a website content planner.
Context: This is a fictional workshop exercise. Karim offers mathematics revision for middle-school students. His audience is parents seeking an explanation of the lessons. Only the subject and school level are confirmed.
Task: Outline a service page with introduction, subject/level, lesson information and next step.
Format: Section | suggested copy | source fact, then questions to resolve.
Constraints: Under 180 words. Do not invent qualifications, exam results, prices, availability, location or booking links. Ask for missing lesson and contact details. No booking form, code or publishing.
```

### Example C — Local bakery

```text
Role: Act as a website content planner.
Context: This is a fictional workshop exercise. Nour Bakery makes bread and pastries. The intended visitors are nearby residents who want to learn what the bakery offers. No address, hours, prices, photos or contact details are supplied.
Task: Outline a small-business page with introduction, product categories and visit/contact information pending confirmation.
Format: Section | suggested copy | source fact, then missing information.
Constraints: Under 180 words. Do not invent an address, map, hours, prices, dietary claims, reviews or phone number. Mark missing details explicitly. No code or publishing.
```

## 7. Quick presenter checklist

- Prepare the source, corrected facts, approved copy and local build as separate checkpoints.
- Rehearse with the actual accounts and selected folder; verify available tools before the session.
- Demonstrate the instruction set, not account setup; use one design and one revision.
- Compare claims with the source and observe the mobile layout, keyboard access and links.
- Explain the distinction between a local file, a local preview, a deployment and a checked public URL.
- If a generation stalls, name the prepared checkpoint before opening it.
- Leave participants with one audience, one goal and one clear next action.

## Local source notes

Aligned to the current 21-slide `workshop-practical-ai-slides-ii/lib/session-slides.json`, plus `05-demo-prompts-and-checkpoints.md` and `06-participant-activity.md`. The older demo notes use earlier slide numbers; the mapping in this guide follows the current deck. Include services only if the approved source supports them; otherwise use experience/skills. The local folder name differs from the public repository name intentionally.
