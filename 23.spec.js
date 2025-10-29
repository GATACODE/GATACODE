const { test, expect } = require('@playwright/test'); //library
test('clickChooseCar', async ({ page }) => {
    // Open the website
    await page.goto("https://rus.auto24.ee/");
    await page.waitForTimeout(1000);
    await page.click("#onetrust-accept-btn-handler");
    await page.waitForTimeout(1000);
    await page.click("(//div[@class='fieldset'])[1]");
    await page.waitForTimeout(1000);
    await page.click("//div[@class='select-items-container']//div[2]//div[2]//span[2]//span[1]")
    await page.waitForTimeout(1000);
    await page.click("//div[@class='select-items-container']//div[@class='select-multi'][normalize-space()='OK']")
    await page.waitForTimeout(1000);    // Wait for 3 seconds, but ideally, wait for some next action or element.
    await page.click("//div[@id='item-searchParam-cmm-1-make']//span[@class='select-arrow-container']")
    await page.waitForTimeout(2000);
    await page.click("//div[@class='select-items-container']//span[@class='option-value'][normalize-space()='BMW']");
    await page.locator("//input[@id='searchParam-year']").fill("2007");
    await page.locator("//input[@name='f2']").fill("2008");
    await page.click("//input[@name='otsi']");
    await page.waitForTimeout(3000);
});



//npx playwright test tests/23.spec.js --headed --project chromium