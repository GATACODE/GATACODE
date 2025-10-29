const { test, expect } = require('@playwright/test');
test('clickSortByTime', async ({ page }) => {
    await page.goto("https://news.ycombinator.com/newest");
    await page.waitForTimeout(1000);

    let arrayOfTime = [];
    for (let x = 0; x < 4; x++) {                //meaning of double : await page.click("//th[@class='header headerSortUp']");
        let time = await page.$$(".age");
        let timeLength = time.length;   //property without ()
        console.log(timeLength);
        for (let f of time) {
            let value = await f.getAttribute("title");//schitat text kazdogo znachenija
            arrayOfTime.push(value);
            if (arrayOfTime.length >= 100) {
                break;
            }

        }
        await page.locator("//a[normalize-space()='More']").click();  // klikni po jacheike
    }
    console.log(arrayOfTime.length);  //== paspechatal pervije vse (100)!!!


    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.
});
/*let arrayOfPrices = [];
    for (let itemsP of itemsPrice) {
        let value = await itemsP.textContent();
        let value2 = value.replace("$", "").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number
        arrayOfPrices.push(value3);
        console.log(` ${value3}`);
    }
    console.log(arrayOfPrices);
//await elementHandle.getAttribute(name);
//span[@class='age']//a[contains(text(),'')] 30 first .age
//for (let x = 0; x < arrayScore.length; x++) {}
//await page.selectOption('.product_sort_container', 'lohi');     //это value option делается выборка  так !!! "selectOption()"
//npx playwright test tests/35.spec.js --headed --project chromium*/