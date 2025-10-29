const { test, expect } = require('@playwright/test'); //library
test('clickTwelveChoose', async ({ page }) => {
    // Open the website
    await page.goto("https://wise.jobs/jobs");
    await page.waitForTimeout(1000);
    await page.click("#twcc__accept-button");
    await page.waitForTimeout(3000);
    let resultPage = await page.locator("(//a[@aria-label='12 results per page'][normalize-space()='12'])[2]").textContent();
    console.log(resultPage);
    let blocks = await page.$$("(//div[@class='attrax-vacancy-tile__logo-wrapper'])");


    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength);
    await expect(blocksLength == resultPage).toBeTruthy();
    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.*/
});



//npx playwright test tests/17.spec.js --headed --project chromium