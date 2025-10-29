const { test, expect } = require('@playwright/test');
test('clickSortByTcime', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(500);
    await page.getByPlaceholder("Username").fill("Admin");
    await page.waitForTimeout(500);
    await page.getByPlaceholder("Password").fill("admin123");
    await page.waitForTimeout(500);
    await page.click("button[type='submit']");
    await page.waitForTimeout(500);
    await page.click("//span[text()='Admin']");
    await page.click("(//div[@class='oxd-table-header-sort'])[1]");
    await page.waitForTimeout(500);
    await page.locator('(//span[text()="Descending"])[1]').click();  // klikni po jacheike
    await page.click("//button[normalize-space()='Add']");
    await page.click("(//div[@class='oxd-select-text-input'])[1]");
    await page.locator("//div[contains(text(),'ESS')]").click();


    /*let arrayOfNames = [];
    for (let x = 0; x < 4; x++) {                //meaning of double : await page.click("//th[@class='header headerSortUp']");
        let names = await page.$$(".age");
        let timeLength = time.length;   //property without ()
        console.log(timeLength);
        for (let f of time) {
            let value = await f.getAttribute("title");//schitat text kazdogo znachenija
            arrayOfTime.push(value);
            if (arrayOfTime.length >= 100) {
                break;
            }

        }
        await page.locator("//a[normalize-space()='More']").click();  // klikni po jacheike
    }
    console.log(arrayOfTime.length);  //== paspechatal pervije vse (100)!!!*/


    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.
});
/*let arrayOfPrices = [];
for (let itemsP of itemsPrice) {
    let value = await itemsP.textContent();
    let value2 = value.replace("$", "").trim(); // Remove "points" and trim
    let value3 = parseInt(value2); // Convert string to number
    arrayOfPrices.push(value3);
    console.log(` ${value3}`);
}
console.log(arrayOfPrices);
//await elementHandle.getAttribute(name);
//span[@class='age']//a[contains(text(),'')] 30 first .age
//for (let x = 0; x < arrayScore.length; x++) {}
//await page.selectOption('.product_sort_container', 'lohi');     //это value option делается выборка  так !!! "selectOption()"
//npx playwright test tests/36.spec.js --headed --project chromium*/