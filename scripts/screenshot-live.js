/* eslint-disable @typescript-eslint/no-require-imports */
const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const url = 'https://elkaza.at';
  const outDir = 'screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const browser = await chromium.launch({ headless: true });
  try {
    // Light
    const contextLight = await browser.newContext({ viewport: { width: 1280, height: 800 }, colorScheme: 'light' });
    const pageLight = await contextLight.newPage();
    await pageLight.goto(url, { waitUntil: 'networkidle' });
    await pageLight.screenshot({ path: `${outDir}/live-light.png`, fullPage: true });
    await contextLight.close();

    // Dark
    const contextDark = await browser.newContext({ viewport: { width: 1280, height: 800 }, colorScheme: 'dark' });
    const pageDark = await contextDark.newPage();
    await pageDark.goto(url, { waitUntil: 'networkidle' });
    await pageDark.screenshot({ path: `${outDir}/live-dark.png`, fullPage: true });
    await contextDark.close();

    console.log('Screenshots saved to', outDir);
  } catch (err) {
    console.error('Screenshot error:', err);
    process.exitCode = 2;
  } finally {
    await browser.close();
  }
})();
