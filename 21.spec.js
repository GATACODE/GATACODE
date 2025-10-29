const { test, expect } = require('@playwright/test'); //library
test('clickFourtyeightChoose', async ({ page }) => {
    // Open the website
    await page.goto("https://wise.jobs/jobs");
    await page.waitForTimeout(1000);
    await page.click("#twcc__accept-button");
    await page.waitForTimeout(3000);
    await page.click("(//a[contains(@aria-label,'48 results per page')][normalize-space()='48'])[2]");
    await page.waitForTimeout(3000);
    let resultPage = await page.locator("(//a[contains(@aria-label,'48 results per page')][normalize-space()='48'])[2]").textContent();
    console.log(resultPage);

    let blocks = await page.$$("(//div[@class='attrax-vacancy-tile__logo-wrapper'])");
    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength);
    //await expect(blocksLength).toBeTruthy();
    let randomVacancy = blocks;
    let randomIndex = Math.floor(Math.random() * blocksLength);
    console.log("random index " + randomIndex);
    let randomElement = [randomIndex];
    console.log(randomElement);
    //await page.click(randomVacancy);

    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.*/
});



//npx playwright test tests/21.spec.js --headed --project chromium