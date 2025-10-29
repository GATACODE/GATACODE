const { test, expect } = require('@playwright/test'); //library
test('clickChooseLanguage', async ({ page }) => {
    // Open the website
    await page.goto("https://www.ldoceonline.com/dictionary/buy-into");
    await page.waitForTimeout(500);
    await page.click("//button[@id='onetrust-accept-btn-handler']");
    await page.waitForTimeout(500);
    await page.click("//div[@title='Select your dictionary']");

    let fromLanguageOptions = await page.$$("//a[@class='item']"); //$$ xranit mnogo locatorov
    for (let f of fromLanguageOptions) {
        let value = await f.textContent();
        //console.log(value);
        if (value === "English - Japanese") {
            await f.click();
        }

    }
    // Find the search input box
    const searchBar = await page.locator("input[placeholder='English - Japanese']");
    // Get the placeholder Value
    const placeholderText = await searchBar.getAttribute('placeholder');
    expect(placeholderText).toBe('English - Japanese');
    //await expect(page.locator("//input[@placeholder='English - Japanese']")).toBeVisible();


    await page.waitForTimeout(3000);
});
//npx playwright test tests/25.spec.js --headed --project chromium  


/*element.getAttribute(attribute name);
Let's output the content of the value attribute of an element:

<input id="elem" value="abcde">
let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');

console.log(value);
The code execution result:

'abcde'*/
