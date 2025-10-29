const { test, expect } = require('@playwright/test');

test('clickSortFromSecond', async ({ page }) => {
    // Open the website
    await page.goto("http://the-internet.herokuapp.com/tables");
    await page.waitForTimeout(1000);

    for (let x = 0; x < 2; x++) {                //meaning of double : await page.click("//th[@class='header headerSortUp']");
        await page.waitForTimeout(500);
        await page.locator("//span[@class='dues']").click();  // klikni po jacheike

    }

    let itemsPrice = await page.$$('(//table[@id="table2"]//tbody/tr/td[4])');
    let itemsLength = itemsPrice.length;
    console.log(` ${itemsLength}`);

    let arrayOfPrices = [];
    for (let itemsP of itemsPrice) {
        let value = await itemsP.textContent();
        let value2 = value.replace("$", "").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number
        arrayOfPrices.push(value3);
        console.log(` ${value3}`);
    }
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


    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.
});

//for (let x = 0; x < arrayScore.length; x++) {}
//await page.selectOption('.product_sort_container', 'lohi');     //это value option делается выборка  так !!! "selectOption()"
//npx playwright test tests/34.spec.js --headed --project chromium
