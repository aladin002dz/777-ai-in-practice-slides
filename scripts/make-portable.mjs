import {cpSync,existsSync,mkdirSync,readFileSync,writeFileSync,readdirSync} from "node:fs";
import {join} from "node:path";
const src="out",dest="slides-usb";
if(!existsSync(join(src,"index.html")))throw new Error("Build first");
mkdirSync(dest,{recursive:true});cpSync(join(src,"_next"),join(dest,"_next"),{recursive:true});cpSync(join(src,"session"),join(dest,"session"),{recursive:true});
let page=readFileSync(join(src,"index.html"),"utf8").replaceAll('"/_next/','"./_next/');
writeFileSync(join(dest,"index.html"),page);
function walk(p){for(const e of readdirSync(p,{withFileTypes:true})){const q=join(p,e.name);if(e.isDirectory())walk(q);else if(q.endsWith(".css")){const s=readFileSync(q,"utf8").replaceAll("/session/","../../../session/");writeFileSync(q,s);}}}
walk(join(dest,"_next"));console.log("Offline folder ready: slides-usb/index.html");
