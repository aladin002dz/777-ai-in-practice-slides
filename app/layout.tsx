import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";
import "./closing-slide.css";
import "./prompt-notes.css";
const title = "AI in Practice: Personal Website & Portfolio | 7.77";
const description = "Learn to design, build and deploy a personal website with Gemini, Antigravity and GitHub Pages. English slides by Mahfoudh Arous, 15 October 2026.";
const image = siteUrl ? new URL("session/social-preview.png", siteUrl).href : undefined;
export const metadata: Metadata = {
  title, description,
  applicationName: "7.77 AI in Practice",
  authors: [{ name: "Mahfoudh Arous" }],
  creator: "Mahfoudh Arous",
  robots: { index: true, follow: true },
  ...(siteUrl ? { metadataBase: siteUrl, alternates: { canonical: siteUrl.href } } : {}),
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "7.77 AI in Practice", ...(siteUrl ? {url: siteUrl.href} : {}), ...(image ? {images:[{url:image,width:1200,height:630,alt:"AI in Practice — Personal Website & Portfolio, 7.77, 15 October 2026"}]} : {}) },
  twitter: { card: image ? "summary_large_image" : "summary", title, description, ...(image ? {images:[image]} : {}) },
};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="en" dir="ltr"><body>{children}</body></html>}
