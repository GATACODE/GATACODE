const { test, expect } = require('@playwright/test');

test('sumStartFronSecond', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.producthunt.com/forums");
    await page.waitForTimeout(3000); // Optional delay

    await page.click("//div[contains(text(),'trending')]");    //(//a[@href='#'])[1]
    await page.waitForTimeout(500); // Optional delay
    await page.click("//button[normalize-space()='popular']");
    await page.waitForTimeout(3000);
    const fromAllOptions = await page.$$("//button[@data-test='vote-button']");//[1] index
    let arr = [];
    for (let x = 0; x < fromAllOptions.length; x++) {
        let value = await fromAllOptions[x].textContent();
        arr.push(parseInt(value));
        if (arr.length > 9) {
            break;
        }
    }
    console.log(arr);
    let isSorted = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arr.length; x++) {
        let current = arr[x];      // [X] peremennaja ot x
        let prev = arr[x - 1];       // prededyscheje chislo
        if (prev < current) {               // dlja proverki pomenjai znak <
            isSorted = false;
            break;
        }
    }
    await expect(isSorted).toBeTruthy();
    await page.waitForTimeout(3000); // Optional delay



});




//npx playwright test tests/52.spec.js --headed --project chromium