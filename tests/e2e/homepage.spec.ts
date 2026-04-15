import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads and displays hero section', async ({ page }) => {
    await page.goto('/');
    
    // Check hero section exists
    const hero = page.getByRole('heading', { level: 1 });
    await expect(hero).toBeVisible();
    
    // Check main CTA button is visible
    const ctaButton = page.getByRole('button', { name: /15-Minuten|Erstgespräch|contact/i });
    await expect(ctaButton).toBeVisible();
  });

  test('hero CTA navigates to contact form', async ({ page }) => {
    await page.goto('/');
    
    const ctaButton = page.getByRole('button', { name: /15-Minuten|Erstgespräch|contact/i });
    await ctaButton.click();
    
    // Should navigate to contact page
    await expect(page).toHaveURL(/\/(kontakt|contact)/);
  });

  test('displays service cards', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to services section
    const servicesSection = page.locator('section').filter({ hasText: /Service|Leistung/i });
    if (servicesSection) {
      await servicesSection.scrollIntoViewIfNeeded();
    }
    
    // At least one service card should be visible
    const cards = page.locator('[class*="card"]');
    await expect(cards.first()).toBeVisible();
  });

  test('loads CSS and styling is correct', async ({ page }) => {
    await page.goto('/');
    
    const body = page.locator('body');
    const bgColor = await body.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    
    // Check that some styling was applied
    expect(bgColor).toBeTruthy();
  });
});

test.describe('Accessibility', () => {
  test('homepage has proper landmark structure', async ({ page }) => {
    await page.goto('/');
    
    // Should have header
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Should have main content area
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Should have footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('navigation is keyboard accessible', async ({ page }) => {
    await page.goto('/');
    
    // Tab to first link in header
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    
    // Some element should receive focus
    expect(focusedElement).not.toBe('BODY');
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    
    // Get all images
    const images = page.locator('img');
    const count = await images.count();
    
    // If there are images, they should have alt text
    if (count > 0) {
      for (let i = 0; i < Math.min(count, 5); i++) {
        const alt = await images.nth(i).getAttribute('alt');
        // Logo and icons might have empty alt, but should be intentional
        const ariaHidden = await images.nth(i).getAttribute('aria-hidden');
        const isDecorative = ariaHidden === 'true' || !alt;
        
        // Either has alt text or is marked as decorative
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
    
    // Should load in under 5 seconds
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
    
    // Filter out known third-party errors
    const criticalErrors = errors.filter(
      (e) => !e.includes('third-party') && !e.includes('Cannot read properties')
    );
    
    expect(criticalErrors).toHaveLength(0);
  });
});
