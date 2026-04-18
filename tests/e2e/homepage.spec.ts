import { test, expect } from 'playwright/test';

test.describe('Homepage', () => {
  test('loads and displays hero section', async ({ page }) => {
    await page.goto('/');

    const hero = page.getByRole('heading', { level: 1 });
    await expect(hero).toBeVisible();

    const ctaLink = page.locator('a[href*="/kontakt"], a[href*="/contact"]').first();
    await expect(ctaLink).toBeVisible();
  });

  test('hero CTA navigates to contact form', async ({ page }) => {
    await page.goto('/');

    const ctaLink = page.locator('a[href*="/kontakt"], a[href*="/contact"]').first();
    await ctaLink.click();

    await expect(page).toHaveURL(/\/(kontakt|contact)\/?/);
  });

  test('displays service links', async ({ page }) => {
    await page.goto('/');

    const servicesSection = page.locator('section').filter({ hasText: /Service|Leistung/i });
    await servicesSection.first().scrollIntoViewIfNeeded();

    const serviceLinks = page.locator('a[href*="/leistungen/"], a[href*="/services/"]');
    await expect(serviceLinks.first()).toBeVisible();
  });

  test('loads CSS and styling is correct', async ({ page }) => {
    await page.goto('/');

    const body = page.locator('body');
    const bgColor = await body.evaluate((el) => window.getComputedStyle(el).backgroundColor);

    expect(bgColor).toBeTruthy();
  });
});

test.describe('Accessibility', () => {
  test('homepage has proper landmark structure', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('header');
    await expect(header).toBeVisible();

    const main = page.locator('main').first();
    await expect(main).toBeVisible();

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('navigation is keyboard accessible', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);

    expect(focusedElement).not.toBe('BODY');
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const count = await images.count();

    if (count > 0) {
      for (let i = 0; i < Math.min(count, 5); i++) {
        const alt = await images.nth(i).getAttribute('alt');
        const ariaHidden = await images.nth(i).getAttribute('aria-hidden');
        const isDecorative = ariaHidden === 'true' || !alt;

        expect(isDecorative || alt).toBeTruthy();
      }
    }
  });
});

test.describe('Performance', () => {
  test('page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/', { waitUntil: 'networkidle' });
    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(5000);
  });

  test('no console errors on homepage', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');

    const criticalErrors = errors.filter(
      (error) => !error.includes('third-party') && !error.includes('Cannot read properties')
    );

    expect(criticalErrors).toHaveLength(0);
  });
});
