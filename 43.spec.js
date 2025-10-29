const { test, expect } = require('@playwright/test');

test('clickSortFromMonth', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn-p6073-h13061-details/2025-01-07/2025-01-08/2adults?psid=fJFkL_Z0za&pm=totaltaxes");
    await page.waitForSelector('//button/div/div[text()="Accept all"]');
    await page.click('//button/div/div[text()="Accept all"]');
    console.log("Clicked on the 'Accept all' button.");

    await page.click("//div[@class='Tqfk']//div[3]//div[1]");



    const fromAllOptions = await page.$$("//div[@class='CPVY CPVY-pres-checkbox']");
    for (let f of fromAllOptions) {
        let value = await f.textContent();
        if (value == "Jun-Aug") {
            await f.click();
            console.log("Jun-Aug");
            break;
        }
    }
    await page.waitForTimeout(500);
    let monthRew = await page.$$("//div[@class='acD_-userName']");
    console.log(`Number of month found: ${monthRew.length}`);

    let arrayOfMonth = [];
    for (let a of monthRew) {
        let value = await a.textContent();
        let months = value.replace(/.*\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b.*/, '$1').trim();
        arrayOfMonth.push(months);
    }
    console.log("reviews:", arrayOfMonth);
    let areMonth = false;        //boolean or flag :"true or false"
    let arrMonths = ["Jun", "Jul", "Aug"];
    for (let x = 0; x < arrayOfMonth.length; x++) {
        // Check if the current month in arrayOfMonth exists in arrMonths
        if (arrMonths.includes(arrayOfMonth[x])) {
            areMonth = true;
            // You can perform actions here, for example:
            // break; // if you want to stop after finding the first match
        } console.log(`${arrayOfMonth[x]} is in arrMonths!`);
    }
    await expect(areMonth).toBeTruthy();
    await page.waitForTimeout(3000); // Optional delay
});
//npx playwright test tests/43.spec.js --headed --project chromium
/*let areMonth = false;
for (let i = 0; i < arrayOfMonth.length; i++) {
    for (let j = 0; j < arrMonths.length; j++)
        if (arrayOfMonth[i] === arrMonths[j])
    areMonth = true;
        break;
    }
}
    await expect(areMonth).toBeTruthy();*/