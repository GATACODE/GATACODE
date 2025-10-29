const { test, expect } = require('@playwright/test');
test('clickSort', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-01-01/2025-01-02/2adults;map?ucs=1bj5om6&sort=rank_a");
    await page.waitForTimeout(500);
    await page.click('//button/div/div[text()="Accept all"]');

    await page.waitForSelector("//div[@class='S0Ps-resultInner']");
    let blocks = await page.$$("//div[@class='S0Ps-resultInner']");
    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength);

    await page.click("//div[@role='combobox']/span");

    const fromAllOptions = await page.$$("//div[@class='Tf9o-text-label']//span[@class='Tf9o-title']"); //$$ xranit mnogo locatorov
    for (let f of fromAllOptions) {
        let value = await f.textContent();
        //console.log(value);
        if (value == "Price (high to low)") {   //== sravnivanije
            await f.click();
            break;
        }
    }

    await page.waitForTimeout(500);
    let price = await page.$$("//div[@class='c1XBO']"); //locator of 14 prices   div[@class='zV27-price-section']
    let hotelPriceLength = price.length;
    console.log(typeof hotelPriceLength);
    console.log(` ${hotelPriceLength}`);

    /*let arrayOfPrices = [];
    for (let itemsP of price) {
        let value = await itemsP.textContent();
        let value2 = value.replace("", "$").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number
        arrayOfPrices.push(value3);
        console.log(typeof value3);
        console.log(` ${value3}`);
    }
    console.log(arrayOfPrices);*/

    let arrayOfPrices = [];
    //let symbolsBig = await page.$$("//ul/li[@class='password-letter']");
    for (let a of price) {
        let value = await a.textContent();//schitat text kazdogo znachenija
        arrayOfPrices.push(value);
    }
    console.log(arrayOfPrices);  // pacnechatan massiv
    arrayOfPrices.shift();
    console.log(arrayOfPrices);


    let isSorted = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arrayOfPrices.length; x++) {
        let current = arrayOfPrices[x];      // [X] peremennaja ot x
        let prev = arrayOfPrices[x - 1];       // prededyscheje chislo
        if (prev < current) {               // dlja proverki pomenjai znak <
            isSorted = false;
            break;
        }
    }
    await expect(isSorted).toBeTruthy();

    await page.waitForTimeout(3000);
});
//npx playwright test tests/39.spec.js --headed --project chromium
