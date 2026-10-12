// Regenerates public/og-image.png — the Open Graph / Twitter Card image
// shared by all three locales.
//
// Run with: node scripts/generate-og-image.mjs
//
// Why a committed static file instead of Next's `opengraph-image.tsx`
// per-locale route convention: `next build` with `output: "export"`
// pre-renders those dynamic routes to a file with NO extension (e.g.
// `out/opengraph-image-35za9p`). Static hosts (GitHub Pages included) pick
// the Content-Type from the file extension, so an extension-less file gets
// served as `application/octet-stream` — link previews on
// Facebook/LinkedIn/WhatsApp then show no image at all. A real `.png` file
// under `public/` is served with the correct MIME type everywhere.
//
// Deliberately locale-agnostic (see the same note that used to live in
// lib/og.tsx): it carries only the brand mark and the untranslated
// programme name, never deck-specific copy. `ImageResponse` renders with a
// bundled Latin-only font and no network access, so any Arabic text baked
// into the raster would render as tofu — the real localized title/
// description already reach crawlers as plain <meta> text (lib/metadata.ts),
// which is what matters for SEO.
import { writeFile } from "node:fs/promises";
import { ImageResponse } from "next/og.js";

const OG_SIZE = { width: 1200, height: 630 };

function ogImageElement() {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        background: "#030712",
        backgroundImage:
          "radial-gradient(circle at 50% 40%, rgba(139,92,246,0.35), rgba(3,7,18,0) 60%)",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              width: 168,
              height: 168,
              borderRadius: 999,
              background: "linear-gradient(135deg, #8b5cf6, #0ea5e9, #10b981)",
              alignItems: "center",
              justifyContent: "center",
            },
            children: {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  width: 148,
                  height: 148,
                  borderRadius: 999,
                  background: "#030712",
                },
              },
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              fontSize: 56,
              fontWeight: 700,
              color: "#f3f4f6",
              letterSpacing: -1,
            },
            children: "Practical AI Workshop",
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", fontSize: 30, color: "#9ca3af" },
            children: "Tamkeen Club · Chlef",
          },
        },
      ],
    },
  };
}

const response = new ImageResponse(ogImageElement(), OG_SIZE);
const buffer = Buffer.from(await response.arrayBuffer());
await writeFile(new URL("../public/og-image.png", import.meta.url), buffer);
console.log(`Wrote public/og-image.png (${buffer.length} bytes)`);
