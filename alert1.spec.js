const { test, expect } = require('@playwright/test'); //library
test('clickChooseCar', async ({ page }) => {
    // Open the website
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(1000);

    let blocks = await page.$$("//div[@class='card-block']");
    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength);
    //await expect(blocksLength).toBeTruthy();*/
    let product = await page.$$("//h4[@class='card-title']");
    let arrayProduct = [];
    for (let f of product) {
        let value = await f.textContent();
        arrayProduct.push(value);
    }
    console.log(arrayProduct);
    let randomProduct = arrayProduct;
    let randomIndex = Math.floor(Math.random() * arrayProduct.length);
    console.log(randomIndex);
    let randomElement = arrayProduct[randomIndex];
    console.log(randomElement);
    await page.getByText(randomElement).first().click();
    await page.waitForTimeout(1000);
});

//npx playwright test tests/alert1.spec.js --headed --project chromium