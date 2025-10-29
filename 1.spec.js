// @ts-check
const { test, expect } = require('@playwright/test'); //library
//3 diffrent browsers: chromium,webkit(safari), firefox
//po ymolchanijy v playwright test zapuskaetsja v headless rezime
test('has title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //pereiti po ccilke
    let logo = await page.getByAltText("company-branding");
    await expect(logo).toBeVisible();

    await page.getByPlaceholder("Username").fill("Admin");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Password").fill("admin123");
    await page.waitForTimeout(3000);
    await page.click("button[type='submit']");
    await page.waitForTimeout(3000);
    let name = await page.locator(".oxd-userdropdown-name").textContent();//.textContent pacpechatat text s HTML
    console.log(name);
    await expect(await page.getByText(name)).toBeVisible();//expect ybeditsja chto element viden
});

//npx playwright test tests/1.spec.js --headed --project chromium
