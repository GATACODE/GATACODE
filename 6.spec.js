const { test, expect } = require('@playwright/test'); //library
test('LogIn read user and pass', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/"); //pereiti po ccilke
    //let userFromSite = await page.locator("//div[@id='login_credentials']/text()[1]").textContent(); //sostavlen svoi locator!!!
    //console.log(userFromSite);
    let username = "standard_user";
    await page.locator("#user-name").fill("standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");
    await page.click("#react-burger-menu-btn");
    await expect(await page.locator("#logout_sidebar_link")).toBeVisible();
    await page.waitForTimeout(2000);
});
//npx playwright test tests/3.spec.js --headed --project chromium