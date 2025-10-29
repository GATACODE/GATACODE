const { test, expect } = require('@playwright/test');
test('clickAndCheck', async ({ page }) => {
    // Open the website
    await page.goto("https://www.1a.ee/ru/");
    await page.waitForTimeout(500);

    await page.locator("//a[@id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']").click();
    await page.waitForTimeout(500);
    await page.locator("//input[@id='q']").fill("iphone");
    await page.waitForTimeout(500);     // use waitForTimeout!!!

    const fromPhoneOptions = await page.$$("//div[@class='sn-suggest-hint sn-suggest-item']"); //$$ xranit mnogo locatorov
    for (let f of fromPhoneOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value.includes("iphone 12")) {
            await f.click();
            break;
        }
    }
    await page.waitForSelector("//a[@class='ks-new-product-name']");
    let blocks = await page.$$("//a[@class='ks-new-product-name']");
    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength);
    let arrayOfBlocks = [];
    for (let firstB of blocks) {
        let value = await firstB.getAttribute("href");
        console.log(value);
        arrayOfBlocks.push(value);
    }
    console.log(arrayOfBlocks);

    let mainUrlPart = "https://1a.ee";
    let indexOfBlocks = arrayOfBlocks[1];
    //console.log(indexOfBlocks);
    mainUrlPart = mainUrlPart.concat(indexOfBlocks);
    console.log(mainUrlPart)

    await page.waitForTimeout(2000);    // Wait for 3 seconds, but ideally, wait for some next action or element.
});

/*let fruits = ["apple", "banana", "orange", "grape"];
let targetFruit = fruits[2];
console.log(targetFruit);  // Output: "orange"

//for (let x = 0; x < arrayScore.length; x++) {}
//await page.selectOption('.product_sort_container', 'lohi');     //это value option делается выборка  так !!! "selectOption()"
//npx playwright test tests/38.spec.js --headed --project chromium*/
