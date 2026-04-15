import { test, expect } from '@playwright/test';

test.describe('Service Pages', () => {
  const servicePages = [
    { path: '/leistungen/ai-adoption', name: 'AI Adoption' },
    { path: '/leistungen/security-baseline', name: 'Security Baseline' },
    { path: '/leistungen/zero-trust', name: 'Zero Trust' },
  ];

  servicePages.forEach(({ path, name }) => {
    test(`${name} page loads and displays content`, async ({ page }) => {
      await page.goto(path);

      // Check page title exists
      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();

      // Check CTA is present
      const cta = page.getByRole('button', { name: /kontakt|contact|termin/i });
      await expect(cta.first()).toBeVisible();
    });

    test(`${name} page CTA leads to contact`, async ({ page }) => {
      await page.goto(path);

      const cta = page.getByRole('button', { name: /kontakt|contact|termin/i });
      await cta.first().click();

      // Should navigate to contact page
      await expect(page).toHaveURL(/\/(kontakt|contact)/);
    });

    test(`${name} page has proper metadata`, async ({ page }) => {
      await page.goto(path);

      // Check title tag
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(10);

      // Check meta description
      const metaDesc = page.locator('meta[name="description"]');
      await expect(metaDesc).toHaveAttribute('content');
    });
  });

  test('service pages are SEO crawlable', async ({ page }) => {
    // Robots.txt should not disallow service paths
    const response = await page.request.get('/robots.txt');
    const text = await response.text();
    
    // Should allow service paths
    expect(text).not.toMatch(/Disallow: \/leistungen/);
  });
});

test.describe('Service Navigation', () => {
  test('can navigate between service pages', async ({ page }) => {
    await page.goto('/leistungen/ai-adoption');

    // Look for navigation to other services
    const navLinks = page.locator('a[href*="/leistungen/"]');
    const count = await navLinks.count();

    // Should have links to other service pages
    expect(count).toBeGreaterThan(0);

    // Click first link to another service
    const firstLink = navLinks.first();
    await firstLink.click();

    // Should navigate to new service page
    expect(page.url()).toContain('/leistungen/');
  });
});
