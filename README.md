# 7.77 online session - English web slides

AI in Practice: Design, Build and Deploy your Personal Website & Portfolio

October 15, 2026, 19:30-20:45 Algeria time. Ages 31-45. English slides; spoken delivery in Darja.

## Local preview

Run `npm install` if dependencies are missing, then `npm run dev`. Open the local address printed by Next.js. The root page is the English deck. No external fonts or services are required by the presentation.

## Navigation

Arrow keys, PageUp/PageDown, Space, Home/End, previous/next buttons, slide selector, touch swipes, slide overview and fullscreen. Slide 10 has an answer reveal. Hash links such as #7 open a specific slide. Print produces all 16 slides.

## Content and assets

- `slides.md`: approved Markdown and preparation notes.
- `lib/session-slides.json`: projected English content.
- `components/SessionDeck.tsx`: session layout and navigation.
- `app/globals.css`: 16:9 official-template styling.
- `public/session/`: actual PDF graphics, texture, program label and supplied photos. Cover artwork retains the supplied three logos. Placeholder text was removed from the PDF content stream before rendering.

The program introduction summarizes the supplied template; no center-count claim is added. Final organizer confirmation of program wording remains a rehearsal item. Free Gemini and Antigravity accounts are specified on slide 6. Education offers stay in the Markdown presenter notes and are optional, country-dependent follow-up information.

The older copied components and language dictionaries are retained as source reference but are not routed or displayed. Original workshop files are untouched. No publication or email was performed.

## Build and offline copy

`npm run build` creates `out/` for a local web server. `npm run build:usb` also creates `slides-usb/`; open its index.html directly with the full folder beside it. This session is local-only; it has no verified public URL. Old deployment workflows were excluded from the session adaptation.

## Responsive template reconstruction

Desktop layouts now use native text, CSS name pills, labels, dividers, arrow motif and independent logo images. No full template page or composite cover image is used as a slide background. Colors and spacing follow the supplied document; the supplied PDF uses Codec Pro Bold, which is not provided as a complete licensed web font, so system font fallbacks remain. Exact typography parity is not claimed. Ministry and Mobilis logos are extracted from the PDF; the Algérie Télécom artwork is cropped from its rendered vector region.

Below 800px, slides reflow to an auto-height reading page with 18px body text, stacked portrait/program columns, single-column RCTFC cards, wrapping logo row and accessible navigation controls. Phones can scroll the content vertically. Desktop retains the 16:9 presentation layout.

Build/type checks verify implementation; browser visual comparison remains outstanding because automated file-URL access is blocked by browser policy. No publication was performed.
