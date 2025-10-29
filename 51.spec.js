const { test, expect } = require('@playwright/test');

test('sumStartFronSecond', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.producthunt.com");
    await page.waitForTimeout(3000); // Optional delay
    const fromAllOptions = await page.$$('//div[@data-sentry-component="Metadata"]/following-sibling::a')


    let arr = [];
    for (let x = 0; x < fromAllOptions.length; x++) {

        if (arr.length > 9) {
            break;
        }
        let value = await fromAllOptions[x].textContent();
        arr.push(value);

    }
    console.log(arr);
    await page.waitForTimeout(3000); // Optional delay

});




//npx playwright test tests/53.spec.js --headed --project chromium