const { test, expect } = require('@playwright/test'); //library
test('LogIn read user and pass', async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/login"); //pereiti po ccilke

    let userFromSite = await page.locator("(//li/b)[1]").textContent(); //sostavlen svoi locator!!!
    console.log(userFromSite);
    let userPass = await page.locator("(//li/b)[2]").textContent();
    console.log(userPass);
    await page.locator("#username").fill(userFromSite);
    await page.fill("#password", userPass);
    await page.click("button[type='submit']");
    let logoutText = await page.locator("(//a/i)[1]").textContent();
    console.log(logoutText);
    //await expect(await page.locator("(//a/i)[1])")).toBeVisible();
    //let noteLoggedIn = await page.locator("#flash").textContent();
    //console.log(noteLoggedIn);
    //await expect(await page.getByText("You logged into a secure area!")).toBeVisible();// if text not same: test failed!
    await expect(logoutText == " Logout").toBeTruthy();
    await page.waitForTimeout(2000);
});
//npx playwright test tests/5.spec.js --headed --project chromium