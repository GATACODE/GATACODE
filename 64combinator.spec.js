const { test, expect } = require('@playwright/test');

test('checkNew', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://news.ycombinator.com/");
    await page.waitForTimeout(2000); // Optional delay
    await page.click("//a[normalize-space()='new']");
    await page.waitForTimeout(2000);
    const items = await page.$$("//span[@class='age']");

    let itemsArr = [];
    for (let item of items) {
        const title = await item.getAttribute('title');

        //console.log(title);
        itemsArr.push(title.trim());    //Метод .trim() удаляет пробелы (и другие пробельные символы) в начале и в конце строки.

    }
    console.log(itemsArr);

    await page.waitForTimeout(2000);

    let isSorted = true;        //boolean or flag :"true or false"
    for (let x = 1; x < itemsArr.length; x++) {
        let current = itemsArr[x];      // [X] peremennaja ot x
        let prev = itemsArr[x - 1];       // prededyscheje chislo
        if (prev < current) {               // dlja proverki pomenjai znak <
            isSorted = false;
            break;
        }
    }
    await expect(isSorted).toBeTruthy();


});


test.only('checkPoints', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://news.ycombinator.com/");
    await page.waitForTimeout(2000); // Optional delay
    await page.click("//a[normalize-space()='show']");
    await page.waitForTimeout(2000);
    const items = await page.$$("//span[@class='score']");

    let itemsArr = [];
    let sum = 0;

    for (let item of items) {
        let value = await item.textContent();
        let value2 = value.replace("points", "").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number
        itemsArr.push(value3);
    }

    for (let x = 0; x < itemsArr.length; x += 2) {
        sum += itemsArr[x];
    }
    let average = sum / 15; // (itemsArr.length / 2)
    console.log(itemsArr);
    console.log(sum);
    console.log(average);
    await page.waitForTimeout(2000);




});






//npx playwright test tests/64combinator.spec.js --headed --project chromium
//a[normalize-space()='new']