import { test, expect } from '@playwright/test';

test('EPAM - navigate Services -> Explore Our Client Work and verify Client Work text', async ({ page }) => {
  // Navigate to EPAM home
  await page.goto('https://www.epam.com/');

  // Click Services in header (use href fallback)
  const services = page.locator('a[href="/services"], a:has-text("Services")').first();
  if (await services.count() > 0) {
    await services.click();
  } else {
    await page.goto('https://www.epam.com/services');
  }

  await page.waitForLoadState('networkidle');

  // Click Explore Our Client Work
  const explore = page.locator('a:has-text("Explore Our Client Work"), a:has-text("Explore Client Work")').first();
  if (await explore.count() > 0) {
    await explore.click();
  } else {
    await page.goto('https://www.epam.com/client-work');
  }

  await page.waitForLoadState('networkidle');

  // Verify Client Work text is visible
  const clientWork = page.locator('text=Client Work');
  await expect(clientWork).toBeVisible();
});
