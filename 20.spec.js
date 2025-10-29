const { test, expect } = require('@playwright/test'); //library
test('selectRandomVacancy', async ({ page }) => {
    // Open the website
    await page.goto("https://wise.jobs/jobs");
    await page.waitForTimeout(1000);
    await page.click("#twcc__accept-button");
    await page.waitForTimeout(3000);
    let randomVacancy = await page.$$("(//div[@class='attrax-vacancy-tile__logo-wrapper'])");;
    let randomIndex = Math.floor(Math.random() * randomVacancy.length);
    console.log("random index " + randomIndex);

    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.*/
});



//npx playwright test tests/20.spec.js --headed --project chromium