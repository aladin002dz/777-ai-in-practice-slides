// Set the complete deployment URL, including any GitHub Pages project path.
const configured = process.env.SITE_URL || "https://mahfoudh.dev/777-ai-in-practice-slides/";
export const siteUrl = configured ? new URL(configured.endsWith("/") ? configured : `${configured}/`) : undefined;
if (siteUrl && (!['https:', 'http:'].includes(siteUrl.protocol) || ['localhost','127.0.0.1'].includes(siteUrl.hostname) || siteUrl.search || siteUrl.hash)) {
  throw new Error("SITE_URL must be a public HTTP(S) deployment URL without query or fragment.");
}
