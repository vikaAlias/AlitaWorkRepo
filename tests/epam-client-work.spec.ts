import { test, expect } from '@playwright/test';

test('EPAM - Client Work visible after navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Click Services link
  const services = page.getByRole('link', { name: /^Services$/i }).first();
  await services.click();

  // Click Explore Our Client Work link
  const explore = page.getByRole('link', { name: /Explore Our Client Work/i }).first();
  await explore.click();

  // Expect 'Client Work' text to be visible
  await expect(page.getByText('Client Work')).toBeVisible();
});
