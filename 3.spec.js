const { test, expect } = require('@playwright/test'); //library
test('read user and pass', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/"); //pereiti po ccilke

    let userFromSite = await page.locator("(//li//b)[1]").textContent();
    console.log(userFromSite);
    let userPass = await page.locator("(//li//b)[2]").textContent();
    console.log(userPass);
    await page.locator("#username").fill(userFromSite);
    await page.fill("#password", userPass);
    await page.click("#submit");
    //await expect(await page.locator("//div/a[contains(@class, 'wp-block-button__link has-text-color')]")).toBeVisible();
    let noteLoggedIn = await page.locator(".post-title").textContent();
    console.log(noteLoggedIn);
    //await expect(await page.getByText("Logged In Successfully")).toBeVisible();
    await expect(noteLoggedIn == "Logged In Successfully").toBeTruthy();
    await page.waitForTimeout(2000);
});
//npx playwright test tests/3.spec.js --headed --project chromium