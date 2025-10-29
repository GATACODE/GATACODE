const { test, expect } = require('@playwright/test'); //library
test('clickChooseCar', async ({ page }) => {
    // Open the website
    await page.goto("https://rus.auto24.ee/");
    await page.waitForTimeout(500);
    await page.click("#onetrust-accept-btn-handler");
    await page.waitForTimeout(500);
    await page.click("(//div[@class='fieldset'])[1]");
    await page.waitForTimeout(500);
    await page.click("//div[@class='select-items-container']//div[2]//div[2]//span[2]//span[1]")
    await page.waitForTimeout(500);
    await page.click("//div[@class='select-items-container']//div[@class='select-multi'][normalize-space()='OK']")
    await page.waitForTimeout(500);    // Wait for 3 seconds, but ideally, wait for some next action or element.
    await page.click("//div[@id='item-searchParam-cmm-1-make']//span[@class='select-arrow-container']")
    await page.waitForTimeout(1000);
    let fromAllModels = await page.$$("//div[@class='select-items']/div[@class='input-option option sfr']/span[@class='option-value']");
    //div[@class='select - items']/div[@class='input - option option sfr']/span[@class='option - value']
    //div[@class='select-items']/div[@class='input-option option sfr']/span[@class='option-value']
    for (let f of fromAllModels) {
        let value = await f.textContent();//schitat text kazdogo znachenija
        if (value.includes("BMW")) {
            await f.click();
            break;
        }
    }
    await page.locator("//input[@id='searchParam-year']").fill("2007");
    await page.locator("//input[@name='f2']").fill("2008");
    await page.click("//input[@name='otsi']"); // click and show resultPage

    await page.waitForTimeout(2000);
    let blocks = await page.$$("//div[@class='description']");  // peremennaja blokov iz many locators
    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength);
    //await expect(blocksLength).toBeTruthy();*/
    await page.click("//a[@class='input-link item rem-hlight']");
    await page.waitForTimeout(2000);
    let blocks2 = await page.$$("//div[@class='description']");
    let blocksLength2 = blocks2.length;   //property without ()
    console.log(blocksLength2);
    let summa = blocksLength + blocksLength2;
    console.log(summa);
    let resultPage = await page.locator("//div[@class='col-auto mt-2 mr-auto pb-0 paginator in-header top-row']//strong[contains(text(),'58')]").textContent();
    console.log(resultPage);
    console.log(summa == resultPage);// == compare values === compares type and value
    expect(summa).toBeTruthy();





    await page.waitForTimeout(3000);
});

//div[@class='col-auto mt-2 mr-auto pb-0 paginator in-header']//strong[contains(text(),'61')]
//let name = await page.locator("#'Tallinn'").textContent();//.textContent pacpechatat text s HTML
//console.log(name);
//await expect(await page.getByText(name)).toBeVisible();//expect ybeditsja chto element viden


//Уникальные локаторы. Они найдут только один элемент, они осмысленные, иногда читабельные и краткие. Как раз уникальные атрибуты — это class, id, name и подобные.
//npx playwright test tests/22.spec.js --headed --project chromium