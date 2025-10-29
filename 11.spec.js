const { test, expect } = require('@playwright/test'); //library
test('findTicketPossibility', async ({ page }) => {
    await page.goto("https://global.flixbus.com/"); //pereiti po ccilke

    await page.waitForTimeout(2000);
    await page.click("#uc-center-container > div.sc-eBMEME.dRvQzh > div > div > div > button.sc-dcJsrY.dnBRDt");// cookie button accept
    await page.locator("#searchInput-from").fill("Hamburg");
    await page.waitForTimeout(2000);
    const fromCityOptions = await page.$$('//ul/li[@class="hcr-autocomplete__list-item-10-8-1"]/div/div/div//span');//$$ xranit mnogo locatorov
    for (let f of fromCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value.includes("Hamburg ZOB")) {
            await f.click();
        }
    }
    await page.waitForTimeout(3000);
    await page.locator("#searchInput-to").fill("Berlin");
    await page.waitForTimeout(2000);
    const toCityOptions = await page.$$('//ul/li[@class="hcr-autocomplete__list-item-10-8-1"]/div/div/div//span');//$$ xranit mnogo locatorov
    for (let f of toCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value.includes("Berlin Central Station")) {
            await f.click();

        }
    }
    await page.click("#productSummary");
    await page.click("input[id='search.form.label.children']");
    let kids = ["1", "2", "3", "4", "5"];
    let randomIndex = Math.floor(Math.random() * kids.length);
    console.log("random index " + randomIndex);
    let randomElement = kids[randomIndex];
    console.log("Random element is: " + randomElement);
    await page.locator("input[id='search.form.label.children']").fill(randomElement);// Fill it with random element
    await page.click("button[aria-label='Search trips']");

    let fromEuPrice = await page.locator("(//div/span[@class='SearchResult__price___QpySa'][1])[1]").textContent();
    console.log(fromEuPrice);

    await page.click("#currency-switcher");
    let fromSwissPrice = await page.locator("(//div/span[@class='SearchResult__price___QpySa'][1])[1]").textContent();
    console.log(fromSwissPrice);

    await page.waitForTimeout(3000);
});
//npx playwright test tests/11.spec.js --headed --project chromium

/*Зайти на сайт 
https://global.flixbus.com/

To: Berlin 
From: Hamburg and select Hamburg Airport

и кликнуть по значениям */