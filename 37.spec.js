const { test, expect } = require('@playwright/test');

test('clickSortFromSecond', async ({ page }) => {
    // Open the website
    await page.goto("http://the-internet.herokuapp.com/tables");
    await page.waitForTimeout(1000);

    await page.locator("//span[@class='first-name']").click();  // klikni po jacheike
    await page.waitForTimeout(500);
    await page.locator("//span[@class='first-name']").click();  // klikni po jacheike


    let firstNames = await page.$$('//td[@class="first-name"]');
    let namesLength = firstNames.length;
    console.log(` ${namesLength}`);

    let arrayOfNames = [];
    for (let firstN of firstNames) {
        let value = await firstN.textContent();
        console.log(value);
        /*let value2 = value.replace("$", "").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number*/
        arrayOfNames.push(value);
    }
    console.log(arrayOfNames);

    /*// Sort the names alphabetically
    const sortedNames = [...firstNames].sort((a, b) =>
        a.localeCompare(b, "fr", { ignorePunctuation: true })
    );

    console.log("Sorted Names:", sortedNames);

    // Validate sorting (example assertion)
    expect(firstNames).toEqual(sortedNames);

    // Wait for verification actions if necessary
    // Avoid unnecessary timeouts; use event-driven waits instead.


    /*let isSorted = true;        //boolean or flag :"true or false"
    arrayOfNames.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
    let sorted = true;
    await expect(isSorted).localeCompare();*/
    let sorted = true;
    for (let i = 1; i < arrayOfNames.length; i++) {
        if (arrayOfNames[i - 1].localeCompare(arrayOfNames[i]) < 0) { // Используйте localeCompare для сравнения строк letters ,"<>"obratnaja ili osnovnaja sortirovra
            sorted = false;
            break;
        }
    }
    await expect(sorted).toBeTruthy();




    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.
});

//for (let x = 0; x < arrayScore.length; x++) {}
//await page.selectOption('.product_sort_container', 'lohi');     //это value option делается выборка  так !!! "selectOption()"
//npx playwright test tests/37.spec.js --headed --project chromium
