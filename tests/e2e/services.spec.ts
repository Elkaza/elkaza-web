import { test, expect } from 'playwright/test';

test.describe('Service Pages', () => {
  const servicePages = [
    { path: '/leistungen/ai-adoption', name: 'AI Adoption' },
    { path: '/leistungen/security-baseline', name: 'Security Baseline' },
    { path: '/leistungen/zero-trust', name: 'Zero Trust' },
  ];

  servicePages.forEach(({ path, name }) => {
    test(`${name} page loads and displays content`, async ({ page }) => {
      await page.goto(path);

      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();

      const cta = page.locator('a[href*="/kontakt"], a[href*="/contact"]');
      await expect(cta.first()).toBeVisible();
    });

    test(`${name} page CTA leads to contact`, async ({ page }) => {
      await page.goto(path);

      const cta = page.locator('a[href*="/kontakt"], a[href*="/contact"]');
      await cta.first().click();

      await expect(page).toHaveURL(/\/(kontakt|contact)\/?/);
    });

    test(`${name} page has proper metadata`, async ({ page }) => {
      await page.goto(path);

      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(10);

      const metaDesc = page.locator('meta[name="description"]');
      await expect(metaDesc).toHaveAttribute('content');
    });
  });

  test('service pages are SEO crawlable', async ({ page }) => {
    const response = await page.request.get('/robots.txt');
    const text = await response.text();

    expect(text).not.toMatch(/Disallow: \/leistungen/);
  });
});

test.describe('Service Navigation', () => {
  test('can navigate between service pages', async ({ page }) => {
    await page.goto('/leistungen/ai-adoption');

    const navLinks = page.locator('a[href*="/leistungen/"]');
    const count = await navLinks.count();

    expect(count).toBeGreaterThan(0);

    const firstLink = navLinks.first();
    await firstLink.click();

    expect(page.url()).toContain('/leistungen/');
  });
});
