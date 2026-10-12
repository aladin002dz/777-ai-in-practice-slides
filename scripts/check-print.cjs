const { chromium } = require('C:/Users/LENOVO THINKPAD T15/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async () => {
 const browser = await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 await page.goto('file:///'+process.cwd().replaceAll('\\','/')+'/slides-usb/index.html');
 await page.emulateMedia({media:'print'}); await page.evaluate(()=>document.fonts.ready);
 console.log(await page.locator('.print-deck > .slide').count());
 await page.locator('.print-deck > .slide').first().screenshot({path:'../review/print-cover-check.png'});
 await page.locator('.print-deck > .slide').nth(6).screenshot({path:'../review/print-diagram-check.png'});
 console.log(await page.locator('.print-deck > .slide').evaluateAll(els=>els.map(e=>({width:e.clientWidth,height:e.clientHeight,overflow:e.scrollHeight>e.clientHeight}))));
 await browser.close();
})();
