const { test, expect } = require('@playwright/test'); //library
test('chooseCount', async ({ page }) => {
    // Open the website
    await page.goto("https://www.producthunt.com/");
    await page.waitForTimeout(500);
    //await page.click("button[class='styles_reset__0clCw styles_button__BmLM4 styles_primary__o9u3f styles_fillWidth__i1e0K styles_button__98Gn0 styles_acceptButton__L6Usm']");
    const buttonNumber = await page.$$("//button [@data-test='vote-button']");
    let arrayNumber = [];
    for (let f of buttonNumber) {
        let value = await f.textContent();  // value = znachenije // raspechativaem text s button cherez textContent
        let value2 = parseInt(value);//perevod stroki v chislo
        arrayNumber.push(value2);

        if (arrayNumber.length > 4) {
            break;
        }
    }
    console.log(arrayNumber); // pacnechatan massiv
    let summa = 0;
    let avg = 0;
    for (let x = 0; x < arrayNumber.length; x++) {
        summa += arrayNumber[x];
        //console.log(typeof arrayNumber[x]); pokazivaet tip dannix
        avg = summa / arrayNumber.length;
    }

    console.log(avg);
    //esli za ziklom togda raspechativaet odin raz
    // Wait for 3 seconds, but ideally, wait for some next action or element.*/
    await page.waitForTimeout(3000);
});

//npx playwright test tests/13.spec.js --headed --project chromium
