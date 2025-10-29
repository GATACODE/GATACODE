// @ts-check
const { test, expect } = require('@playwright/test'); //library
//3 diffrent browsers: chromium,webkit(safari), firefox
//po ymolchanijy v playwright test zapuskaetsja v headless rezime
test('has logged in', async ({ page }) => {
    let username = "playwright79";
    await page.goto("https://demoblaze.com/index.html"); //pereiti po ccilke
    await page.click("#login2");
    await page.locator("#loginusername").fill("playwright79");
    await page.fill("#loginpassword", "1979");
    await page.click("button[onclick='logIn()']");
    await page.waitForSelector("#nameofuser");  // dali instruction ozidanije elementa na strannitse
    let userFromSite = await page.locator("#nameofuser").textContent();
    console.log(userFromSite);
    await expect(userFromSite == "Welcome " + username).toBeTruthy();     // means it must to be true
    await page.waitForTimeout(3000);
});
test.skip('has logged in 2', async ({ page }) => {
    let username = "playwright79";
    await page.goto("https://demoblaze.com/index.html"); //pereiti po ccilke
    await page.click("#login2");
    await page.locator("#loginusername").fill("playwright79");
    await page.fill("#loginpassword", "1979");
    await page.click("button[onclick='logIn()']");
    await page.waitForSelector("#nameofuser");  // dali instruction ozidanije elementa na strannitse
    let userFromSite = await page.locator("#nameofuser").textContent();
    console.log(userFromSite);
    await expect(userFromSite == "Welcome " + username).toBeTruthy();     // means it must to be true
    await expect(await page.locator("#logout2")).toBeVisible();
    await page.waitForTimeout(3000);
});

//npx playwright test tests/2.spec.js --headed --project chromium