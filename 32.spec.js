const { test, expect } = require('@playwright/test');

test('clickSort', async ({ page }) => {
    // Open the website
    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.waitForTimeout(1000);
    await page.click("//input[@id='login-button']");

    await page.click("//select[@class='product_sort_container']");
    await page.selectOption('.product_sort_container', 'lohi');     //это value option делается выборка  так !!! "selectOption()"

    let itemsPrice = await page.$$("//div[@class='inventory_item_price']");
    let itemsLength = itemsPrice.length;
    console.log(`Number of items: ${itemsLength}`);

    let arrayOfItems = [];
    for (let itemsP of itemsPrice) {
        let value = await itemsP.textContent();
        let value2 = value.replace("$", "").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number
        arrayOfItems.push(value3);
        console.log(` ${value3}`);
    }
    console.log(arrayOfItems);
    let isSorted = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arrayOfItems.length; x++) {
        let current = arrayOfItems[x];      // [X] peremennaja ot x
        let prev = arrayOfItems[x - 1];       // prededyscheje chislo
        if (prev > current) {               // dlja proverki pomenjai znak <
            isSorted = false;
            break;
        }
    }
    await expect(isSorted).toBeTruthy();


    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.
});

//for (let x = 0; x < arrayScore.length; x++) {}
//div[@class='inventory_item_price']
//npx playwright test tests/32.spec.js --headed --project chromium