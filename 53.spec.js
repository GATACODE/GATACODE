const { test, expect } = require('@playwright/test');
test('firstTenCheck', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.producthunt.com/forums");
    await page.waitForTimeout(3000); // Optional delay

    const fromAllOptions = await page.$$("//a[@class='text-16 font-semibold text-dark-gray !text-primary']")
    await page.waitForTimeout(500); // Optional delay
    let arr = [];
    for (let x = 0; x < fromAllOptions.length; x++) {

        if (arr.length > 9) {
            break;
        }
        let value = await fromAllOptions[x].textContent();
        arr.push(value);

    }
    console.log(arr);
    await page.waitForTimeout(500);
    let count = 0;
    for (let f of fromAllOptions) {
        let value1 = await f.textContent();//schitat text kazdogo znachenija
        if (value1.includes("AI")) {
            //await f.click();
            count++
            console.log(value1);
        }
    }
    console.log(count);
});
