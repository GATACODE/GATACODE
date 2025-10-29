const { test, expect } = require('@playwright/test'); //library
test('LogIn read user and pass', async ({ page }) => {
    await page.goto("https://redbus.in"); //pereiti po ccilke

    await page.locator("#src").fill("Delhi");
    await page.waitForTimeout(3000);
    const fromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]"); //$$ xranit mnogo locatorov
    for (let f of fromCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value === "Badarpur") {
            await f.click();
        }
    }
    await page.waitForTimeout(3000);
});
//npx playwright test tests/9.spec.js --headed --project chromium