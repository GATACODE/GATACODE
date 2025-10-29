const { test, expect } = require('@playwright/test'); //library
test('Etsi lippu', async ({ page }) => {
    await page.goto("https://www.tpilet.ee"); //pereiti po ccilke
    //let userFromSite = await page.locator("//div[@id='login_credentials']/text()[1]").textContent(); //sostavlen svoi locator!!!
    //console.log(userFromSite);

    await page.locator("#web-searchform-departureStop").fill("Tallinn");
    let fromCityOptions = await page.$$("//ul/li/div/strong"); //$$ xranit mnogo locatorov
    for (let f of fromCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value === "Tallinn-Väike") {
            await f.click();
        }
    }
    await page.locator("#web-searchform-destinationStop").fill("Narva");    //peremennaja let ne pishem v kavichkax
    const toCityOptions = await page.$$("//ul/li/div/strong");
    for (let f of toCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value === "Narva bussijaam") {
            await f.click();
        }
    }
    let date = ["25.10.2024", "26.10.2024", "27.10.2024", "28.10.2024", "29.10.2024", "30.10.2024"];

    let randomIndex = Math.floor(Math.random() * date.length);
    console.log("random index " + randomIndex);
    let randomElement = date[randomIndex];
    console.log("Random element is: " + randomElement);
    await page.locator("#web-searchform-single-departureDate").fill(randomElement);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    await page.click("//button[@id='web-searchform-search']");
    let locator = page.locator('.title');
    await expect(await page.locator(".QUj_dgdA-Pg_39XgMimYJ")).toContainText('Otsi uusi reise'); // part of text!!!
    await page.waitForTimeout(3000);
});
//npx playwright test tests/7.spec.js --headed --project chromium