import { writeFileSync, existsSync, unlinkSync } from "node:fs";
const configured=process.env.SITE_URL || "https://slides.mahfoudh.dev/";
const sitemap="out/sitemap.xml";
if(configured){
 const url=new URL(configured.endsWith("/")?configured:`${configured}/`);
 if(!["https:","http:"].includes(url.protocol)||["localhost","127.0.0.1"].includes(url.hostname)||url.search||url.hash)throw new Error("Invalid public SITE_URL");
 const esc=s=>s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll('"',"&quot;");
 writeFileSync(sitemap,`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${esc(url.href)}</loc></url></urlset>`);
 writeFileSync("out/robots.txt",`User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap.xml",url).href}\n`);
 console.log("SEO URLs generated for",url.href);
}else{
 if(existsSync(sitemap))unlinkSync(sitemap);
 console.log("SITE_URL unset: canonical, social image URLs and sitemap deferred until deployment URL is confirmed.");
}
