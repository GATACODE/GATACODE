const { test, expect } = require('@playwright/test'); //library
test('fillClickChoose', async ({ page }) => {
    // Open the website
    await page.goto("https://wise.jobs/jobs");
    await page.waitForTimeout(500);
    await page.click("#twcc__accept-button");
    await page.click('//h3');
    const fromAllOptions = await page.$$('//li[@data-option-id]');//$$ xranit mnogo locatorov
    let arrayP = [];
    for (let f of fromAllOptions) {
        let value = await f.textContent();//schitat text kazdogo znachenija
        if (value.startsWith("P")) {
            await f.click();
            console.log(value);
            arrayP.push(value);
        }
    }
    console.log(arrayP);  // pacnechatan massiv

    let value1 = await page.locator("span[aria-label='People']").textContent();
    let value2 = value1.replace("(11)", "");
    console.log(value2);
    let value3 = await page.locator("span[aria-label='Product']").textContent();
    let value4 = value3.replace("(35)", "");
    console.log(value4);

    await page.click("//h3[normalize-space()='Office']");
    //const fromAllOptions1 = await page.$$('//li[@data-option-id]');//$$ xranit mnogo locatorov   //$$ xranit mnogo locatorov
    for (let f of fromAllOptions) {
        let value5 = await f.textContent();//schitat text kazdogo znachenija
        if (value5.includes("Tallinn")) {
            await f.click();
            await page.waitForTimeout(1000);
        }
        console.log(value5);

    }
    await page.click("(//button[@class='apply-filters-btn btn'][normalize-space()='Apply'])[2]");


    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.*/
});

//npx playwright test tests/16.spec.js --headed --project chromium