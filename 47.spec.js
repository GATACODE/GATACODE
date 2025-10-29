const { test, expect } = require('@playwright/test');

test('clickSortFromMonth', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://testautomationpractice.blogspot.com");

    // Accept cookies
    await page.waitForSelector(".cookie-choices-inner");
    await page.click("//a[@id='cookieChoiceDismiss']");
    console.log("Clicked on the 'Got It' button.");

    const fromAllOptions = await page.$$('//table[@name="BookTable"]//tbody/tr/td[1]');
    let foundJs = false;
    let foundSelenium = false;
    let foundJava = false;
    for (let x of fromAllOptions) {
        console.log(await x.textContent()); // text from locator
        let value = await x.textContent();
        if (value.includes("JS")) {
            foundJs = true;
        }
        if (value.includes("Selenium")) {
            foundSelenium = true;
        }
        if (value.includes("Java")) {
            foundJava = true;
        }
        if (foundJs && foundJava && foundSelenium)
            break;
    }

    await expect(foundJs).toBeTruthy();
    await expect(foundJava).toBeTruthy();
    await expect(foundSelenium).toBeTruthy();


});


//npx playwright test tests/47.spec.js --headed --project chromium