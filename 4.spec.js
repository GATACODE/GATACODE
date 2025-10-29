//Убедиться, что ты залогинена через метод toHaveURL()  https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-url
const { test, expect } = require('@playwright/test'); //library

test('Loging by URL', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/"); //pereiti po ccilke = navigate to URL
    let userFromSite = await page.locator("(//li//b)[1]").textContent();
    console.log(userFromSite);
    let userPass = await page.locator("(//li//b)[2]").textContent();
    console.log(userPass);
    await page.locator("#username").fill(userFromSite);
    await page.fill("#password", userPass);
    await page.click("#submit");
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
    console.log(page.url());
    await page.waitForTimeout(2000);
});

//npx playwright test tests/4.spec.js --headed --project chromium