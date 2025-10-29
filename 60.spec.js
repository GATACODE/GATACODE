const { test, expect } = require('@playwright/test');

test('Fill', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://avia.lt/en/");
    await page.waitForTimeout(2000); // Optional delay
    await page.click("//div[3]/button[2]");
    await page.waitForTimeout(1000);
    await page.locator("'//input[@placeholder='Enter first letters']").fill("London");
    const fromCityOptions = await page.$$('//div[@class="smaller fw-medium"]');//$$ xranit mnogo locatorov
    for (let f of fromCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value.includes("London (Heathrow), United Kingdom")) {
            await f.click();
        }
    }
    await page.waitForTimeout(3000);
    await page.locator("//input[@placeholder='Enter first letters']").fill("new york");
    const toCityOptions = await page.$$('//table[@class="w-100 city-suggestion cursor-pointer"]');//$$ xranit mnogo locatorov
    for (let f of toCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value.includes('New York (La Guardia), United States')) {
            await f.click();
        }
    }

    /*
    await page.click("//input[@placeholder='Enter first letters']"); /html/body / div[1] / div / div / div[3] / button[2]
    
    
    await page.click("//button[@id='web-timetable-search']");
    await page.waitForTimeout(3000);
    const fromAllOptions = await page.$$('//div[@class="gOE2Tc_MgAbDJB76oTXXk"]');  //div[@class= "gOE2Tc_MgAbDJB76oTXXk"]
    await page.waitForTimeout(500); // Optional delay
    const values = [];
    for (let x = 0; x < fromAllOptions.length; x++) {
        //console.log(" I am in for"); // check if for is working
        const text = await fromAllOptions[x].textContent();
        values.push(text);
        if (values.length > 3) {
            break;
        }
        await expect(text).toContain("MonTueWedThuFriSatSun");
    }
    console.log(values);*/

});


//npx playwright test tests/60.spec.js --headed --project chromium