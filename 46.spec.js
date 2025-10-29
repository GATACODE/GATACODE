const { test, expect } = require('@playwright/test');

test('clickSortFromMonth', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://testautomationpractice.blogspot.com");

    // Accept cookies
    await page.waitForSelector(".cookie-choices-inner");
    await page.click("//a[@id='cookieChoiceDismiss']");
    console.log("Clicked on the 'Got It' button.");

    const fromAllOptions = await page.$$('//table[@name="BookTable"]//tbody/tr/td[4]');
    let sum = 0;
    for (let x of fromAllOptions) {
        console.log(await x.textContent()); // text from locator
        sum = sum + parseInt(await x.textContent());
    }
    console.log(sum);

    const avr = sum / fromAllOptions.length; // remember use .length
    console.log(avr);
});


//npx playwright test tests/46.spec.js --headed --project chromium

