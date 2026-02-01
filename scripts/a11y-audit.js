/* eslint-disable @typescript-eslint/no-require-imports */
const playwright = require('playwright');
const fs = require('fs');

(async () => {
  const pages = ['/', '/impressum', '/datenschutz', '/en/imprint', '/en/privacy'];
  const port = process.env.PORT || 3000;
  const base = `http://localhost:${port}`;
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const results = [];

  for (const path of pages) {
    const page = await context.newPage();
    const url = base + path;
    console.log('Auditing', url);
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 30000 });

      // inject axe-core from CDN
      await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.6.3/axe.min.js' });

      const res = await page.evaluate(async () => {
        const results = await axe.run();
        return results;
      });

      results.push({ url, violations: res.violations, passes: res.passes.length, incomplete: res.incomplete.length });

      // save page screenshot for reference
      const safe = path === '/' ? 'home' : path.replace(/[^a-z0-9]/gi, '_').replace(/^_+/, '');
      await page.screenshot({ path: `screenshots/a11y_${safe}.png`, fullPage: true });

      await page.close();
    } catch (err) {
      console.error('Error auditing', url, err.message || err);
      results.push({ url, error: String(err) });
    }
  }

  await browser.close();
  const out = { timestamp: new Date().toISOString(), results };
  fs.writeFileSync('screenshots/a11y-report.json', JSON.stringify(out, null, 2));
  console.log('Audit complete. Report saved to screenshots/a11y-report.json');
})();
