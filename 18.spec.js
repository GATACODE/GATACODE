const { test, expect } = require('@playwright/test'); //library
const { type } = require('os');
test('clickTwentyfourCheck', async ({ page }) => {
    // Open the website
    await page.goto("https://wise.jobs/jobs");
    await page.waitForTimeout(1000);
    await page.click("#twcc__accept-button");
    await page.waitForTimeout(3000);
    await page.click("(//a[@aria-label='24 results per page'][normalize-space()='24'])[2]");
    await page.waitForTimeout(3000);
    let resultPage = await page.locator("(//a[@aria-label='24 results per page'][normalize-space()='24'])[2]").textContent();
    console.log(resultPage);
    console.log(typeof resultPage);
    let blocks = await page.$$("(//div[@class='attrax-vacancy-tile__logo-wrapper'])");

    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength == resultPage);// == compare values === compares type and value
    console.log(typeof blocksLength);

    await expect(blocksLength).toBeTruthy();
    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.*/
});



//npx playwright test tests/18.spec.js --headed --project chromium