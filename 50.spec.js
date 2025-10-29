const { test, expect } = require('@playwright/test');

test('sumFromFive', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.producthunt.com");
    await page.waitForTimeout(3000); // Optional delay
    const fromAllOptions = await page.$$("//button[@data-test='vote-button']//p");
    let sum = 0;
    let arr = [];
    for (let x = 0; x < fromAllOptions.length; x++) {

        if (arr.length > 4) {
            break;
        }
        let value = await fromAllOptions[x].textContent();
        arr.push(parseInt(value));

    }
    console.log(arr);
    await page.waitForTimeout(3000); // Optional delay

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
});




//npx playwright test tests/50.spec.js --headed --project chromium