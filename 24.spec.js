const { test, expect } = require('@playwright/test'); //library
test('clickChooseBike', async ({ page }) => {
    // Open the website
    await page.goto("https://www.hawaii.ee/en/products/summer/bikes");
    await page.waitForTimeout(500);
    await page.click("//button[@id='ism-accept']");
    await page.waitForTimeout(500);

    let text = await page.$$("//div[@class='caption']/h4/a");
    let textLength = text.length;   //property without ()
    console.log(textLength);


    let arrayProduct = [];
    for (let f of text) {
        let value = await f.textContent();
        arrayProduct.push(value);
    }
    console.log(arrayProduct);

    let randomIndex = Math.floor(Math.random() * arrayProduct.length);
    console.log(randomIndex);
    let randomElement = arrayProduct[randomIndex];
    console.log(randomElement);

    await page.getByText(randomElement).first().click();
});

test.only('chooseClickBike', async ({ page }) => {
    // Open the website
    await page.goto("https://www.hawaii.ee/en/products/summer/bikes/balance-bikes");
    await page.waitForTimeout(500);
    await page.click("//button[@id='ism-accept']");
    await page.waitForTimeout(500);

    let text2 = await page.$$("//div[@class='caption']/h4/a");////span[@class="price win"]
    let text2Length = text2.length;   //property without ()
    console.log(text2Length);
    let count = 0;
    for (let f of text2) {
        let value = await f.textContent();//schitat text kazdogo znachenija
        if (value.includes("CONTESSA")) {
            //await f.click();
            count++
            console.log(value);
        }
    }
    console.log(count);

    let priceWin = await page.$$("//span[@class='price win']");
    let priceWinLength = priceWin.length;
    console.log(priceWinLength);



    await page.waitForTimeout(3000);
});

//npx playwright test tests/24.spec.js --headed --project chromium