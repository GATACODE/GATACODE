const { test, expect } = require('@playwright/test');

test('clickSort', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-01-01/2025-01-02/2adults;map?ucs=1bj5om6&sort=rank_a");
    await page.waitForSelector('//button/div/div[text()="Accept all"]');
    await page.click('//button/div/div[text()="Accept all"]');
    console.log("Clicked on the 'Accept all' button.");

    await page.waitForSelector("//div[contains(@class, 'resultInner')]");
    let blocks = await page.$$("//div[contains(@class, 'resultInner')]");
    console.log(`Number of hotel blocks found: ${blocks.length}`);

    await page.click("//div[@role='combobox']/span");

    const fromAllOptions = await page.$$("//div[contains(@class, 'Tf9o-text-label')]//span[@class='Tf9o-title']");
    for (let f of fromAllOptions) {
        let value = await f.textContent();
        if (value === "Price (high to low)") {
            await f.click();
            console.log("Selected 'Price (high to low)' option.");
            break;
        }
    }

    let price = await page.$$("//div[contains(@class, 'c1XBO')]");
    console.log(`Number of prices found: ${price.length}`);

    let arrayOfPrices = [];
    for (let a of price) {
        let value = await a.textContent();
        let numericValue = parseFloat(value.replace(/[^0-9.]/g, '')); // Convert price to number
        arrayOfPrices.push(numericValue);
    }
    console.log("Prices:", arrayOfPrices);

    await page.waitForTimeout(3000); // Optional delay
});
//npx playwright test tests/41.spec.js --headed --project chromium