const { test, expect } = require('@playwright/test'); //library
test('currencyconventer', async ({ page }) => {
    await page.goto("https://www.xe.com/currencyconverter/convert/?Amount=1&From=EUR&To=CHF"); //pereiti po ccilke
    //$$ xranit mnogo locatorov

    let value = await page.locator(".sc-423c2a5f-1.gPUWGS").textContent();
    console.log(value);
    let value2 = value.replace("Swiss Francs", ""); //stroki v ""!!! replace function zameni
    console.log(value2);
    console.log(typeof value2); // proverka tipa dannix
    let numValue = parseFloat(value2); // perevodit v drobnoe chislo "number" parseInt=perevoda v chislo
    console.log(typeof numValue); // shows type of data/dannix
    let finalValue = numValue.toFixed(2); //2 znaka posle zapatoi
    console.log(finalValue);
    // Expected output: "number"

    //console.log(typeof 'blubber');
    // Expected output: "string"

    //console.log(typeof true);
    // Expected output: "boolean"

    //console.log(typeof undeclaredVariable);
    // Expected output: "undefined"

    await page.waitForTimeout(3000);
});
//npx playwright test tests/10.spec.js --headed --project chromium

/*Зайти на сайт 
https://global.flixbus.com/

To: Berlin 
From: Hamburg and select Hamburg Airport

и кликнуть по значениям */