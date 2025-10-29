const { test, expect } = require('@playwright/test'); //library
test('dailyDeparturesAverage', async ({ page }) => {
    // Open the website
    await page.goto("https://www.busbud.com/en/country/ca");
    await page.waitForTimeout(500);
    await page.click("#onetrust-accept-btn-handler");

    let dayilyDepartures = await page.$$("//tr/td[2]");
    let arrayDepartures = [];
    for (let f of dayilyDepartures) {
        let value = await f.textContent();  // value = znachenije
        let value2 = value.replace("Daily Departures", ""); //otrezaem nenyznoe y menjaem na pystyjy stroky
        let value3 = parseInt(value2);      // perevodim stroky v chislo
        //console.log(typeof value3);     // raspechatka tipa dannix
        arrayDepartures.push(value3);       // initialization first "let value2..." ne objavila peremennuy
    }
    console.log(arrayDepartures); //vidimost massiva

    let summa = 0;
    let avg = 0;
    for (let x = 0; x < arrayDepartures.length; x++) {
        summa += arrayDepartures[x];
        console.log(typeof arrayNumber[x]); pokazivaet tip dannix
        avg = summa / arrayDepartures.length;
    }

    console.log(avg);
    //esli za ziklom togda raspechativaet odin raz
    // Wait for 3 seconds, but ideally, wait for some next action or element.*/

    // Wait for 3 seconds, but ideally, wait for some next action or element.*/
    await page.waitForTimeout(3000);
});

//npx playwright test tests/14.spec.js --headed --project chromium