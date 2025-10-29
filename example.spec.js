// @ts-check
const { test, expect } = require('@playwright/test'); //library
//3 diffrent browsers: chromium,webkit(safari), firefox
//po ymolchanijy v playwright test zapuskaetsja v headless rezime
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/'); //pereiti po ccilke

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); // assert proverki
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
