const { test, expect } = require('@playwright/test'); //library
test('chooseBuy', async ({ page }) => {
    // Open the website
    await page.goto("https://www.busbud.com/en/country/ca");
    await page.waitForTimeout(500);
    await page.click("#onetrust-accept-btn-handler");

    let averagePrice = await page.$$("//tr/td[3]");
    let arrayPrices = [];
    for (let f of averagePrice) {
        let value = await f.textContent();  // value = znachenije
        let value2 = value.replace("Average price€", ""); //otrezaem nenyznoe y menjaem na pystyjy stroky
        let value3 = parseInt(value2);      // perevodim stroky v chislo
        console.log(typeof value3);     // raspechatka tipa dannix
        arrayPrices.push(value3);       // initialization first "let value2..." ne objavila peremennuy
        console.log(value2); //vidimost massiva
        let sum = 0;
        let index = 0;// summa cherez for
        do {
            sum = sum + arrayPrices[index];
            index++;
        }
        while (index < arrayPrices.length);
        console.log(sum);
    }
    console.log(arrayPrices);

    // Wait for 3 seconds, but ideally, wait for some next action or element.*/
    await page.waitForTimeout(3000);
});

//npx playwright test tests/12.spec.js --headed --project chromium