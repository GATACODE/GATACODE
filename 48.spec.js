const { test, expect } = require('@playwright/test');

test('clickSortFromMonth', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://testautomationpractice.blogspot.com");

    // Accept cookies
    await page.waitForSelector(".cookie-choices-inner");
    await page.click("//a[@id='cookieChoiceDismiss']");
    console.log("Clicked on the 'Got It' button.");

    const fromAllOptions = await page.$$('//table[@name="BookTable"]//tbody/tr/td[1]');
    let sum = 0;

    for (let x of fromAllOptions) {
        let value = await x.textContent();
        // console.log(await x.textContent()); // text from locator
        sum = sum + value.length;
    }
    console.log(sum);

    const fromAllThirdOptions = await page.$$('//table[@name="BookTable"]//tbody/tr/td[3]');
    let sumThird = 0;
    for (let x of fromAllThirdOptions) {
        let value = await x.textContent();
        if (value === "JAVA" || value === "Java") {
            continue;
        }
        // console.log(await x.textContent()); // text from locator
        sumThird = sumThird + value.length;

    }
    console.log(sumThird);

    const fromAllFoursOptions = await page.$$('//table[@name="BookTable"]//tbody/tr/td[4]');
    let sumFours = 0;

    for (let x of fromAllFoursOptions) {
        let text = await x.textContent();
        let num = parseInt(text);

        if (text.trim().startsWith('3')) {
            continue;  // если начинается с 3 — пропускаем
        }

        sumFours += num;
    }

    console.log(sumFours);

    const avrOfCpu = await page.$$('//table[@id="taskTable"]//tbody//tr/td[count(//table[@id="taskTable"]//thead//th[normalize-space(.)="CPU (%)"]/preceding-sibling::th) + 1]');

    for (let x of avrOfCpu) {
        let value = await x.textContent();
        let valueWithoutPercent = value.replace("%", "");
        let numValue = parseFloat(valueWithoutPercent);
        sum += numValue;
    }
    console.log(sum);

    const avr = sum / avrOfCpu.length; // remember use .length
    console.log(avr);


});
// npx playwright test tests/48.spec.js --headed --project chromium

//      //table[@id="taskTable"]//tbody/tr/td[3]
/* //до FOR
let sum = 0;
//let sumCpu = 0;
// внутри FOR
let value = await x.textContent();
let valueWithoutPercent = value.replace("%", "");       //console.log(await x.textContent()); // text from locator
                                                            sum = sum + parseFloat(await x.textContent());
let numValue = parseFloat(valueWithoutPercent);
sum += numValue;

// за FOR
console.log(sum);*/