const { test, expect } = require('@playwright/test');

test('clickSortFromRev', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn-p6073-h13061-details/2025-01-07/2025-01-08/2adults?psid=fJFkL_Z0za&pm=totaltaxes");
    await page.waitForSelector('//button/div/div[text()="Accept all"]');
    await page.click('//button/div/div[text()="Accept all"]');
    console.log("Clicked on the 'Accept all' button.");

    await page.click("//div[@class='Tqfk']//div[1]//div[1]");



    const fromAllOptions = await page.$$("//div[@class='CPVY CPVY-pres-checkbox']");
    for (let f of fromAllOptions) {
        let value = await f.textContent();
        if (value == "Poor") {
            await f.click();
            console.log("Poor");
            break;
        }
    }
    await page.waitForTimeout(500);
    let poorRew = await page.$$("//div[@class='wdjx wdjx-negative']");
    console.log(`Number of poor reviewes found: ${poorRew.length}`);

    let arrayOfPoor = [];
    for (let a of poorRew) {
        let value = await a.textContent();
        //let numericValue = parseFloat(value.replace(/[^0-9.]/g, '')); // Convert price to number
        arrayOfPoor.push(value);
    }
    console.log("reviews:", arrayOfPoor);

    let arePoor = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arrayOfPoor.length; x++) {
        if (arrayOfPoor[x] > 4) {               // dlja proverki pomenjai znak <
            arePoor = false;    // prisvaivanije
            break;
        }
    }
    await expect(arePoor).toBeTruthy();

    await page.waitForTimeout(3000); // Optional delay
});
//npx playwright test tests/42.spec.js --headed --project chromium