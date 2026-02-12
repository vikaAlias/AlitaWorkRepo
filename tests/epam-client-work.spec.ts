import { test, expect } from '@playwright/test';

test('Verify Client Work page from Services > Explore Our Client Work', async ({ page }) => {
  // 1. Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForLoadState('networkidle');

  // 2. Select "Services" from the header menu
  await page.locator('a:has-text("Services")').first().click({ force: true });

  // 3. Click the "Explore Our Client Work" link
  const explore = page.locator('a:has-text("Explore Our Client Work")').first();
  await explore.click({ force: true });

  // 4. Verify that the "Client Work" text is visible on the page.
  await expect(page.locator('text=Client Work')).toBeVisible({ timeout: 10000 });
});
