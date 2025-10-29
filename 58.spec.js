const { test, expect } = require('@playwright/test');

test('Fill and check days', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.tpilet.ee/en/");
    await page.waitForTimeout(2000); // Optional delay
    await page.click("//button[@id='web-cookies-accept']");
    await page.waitForTimeout(1000);
    await page.click("//a[@id='web-desktopmenu-timetable']");
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='web-timetable-departureStop']").fill("Tallinn");
    const fromCityOptions = await page.$$("//li[@role='option']");//$$ xranit mnogo locatorov
    for (let f of fromCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value.includes("Tallinn Coach Station")) {
            await f.click();
        }
    }
    await page.waitForTimeout(3000);
    await page.locator("//input[@id='web-timetable-destinationStop']").fill("Narva");
    const toCityOptions = await page.$$("//li[@role='option']");//$$ xranit mnogo locatorov
    for (let f of toCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value.includes("Narva Coach Station")) {
            await f.click();
        }
    }

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
    console.log(values);

});


test.only('Fill and check how many Mondays', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.tpilet.ee/en/");
    await page.waitForTimeout(2000); // Optional delay
    await page.click("//button[@id='web-cookies-accept']");
    await page.waitForTimeout(1000);
    await page.click("//a[@id='web-desktopmenu-timetable']");
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='web-timetable-departureStop']").fill("Tallinn");
    const fromCityOptions = await page.$$("//li[@role='option']");//$$ xranit mnogo locatorov
    for (let f of fromCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value.includes("Tallinn Coach Station")) {
            await f.click();
        }
    }
    await page.waitForTimeout(3000);
    await page.locator("//input[@id='web-timetable-destinationStop']").fill("Narva");
    const toCityOptions = await page.$$("//li[@role='option']");//$$ xranit mnogo locatorov
    for (let f of toCityOptions) {
        let value = await f.textContent();
        console.log(value);
        if (value.includes("Narva Coach Station")) {
            await f.click();
        }
    }

    await page.click("//button[@id='web-timetable-search']");
    await page.waitForTimeout(3000);
    const fromActiveMondays = await page.$$('//div[contains(@class, "_1put1Mgyi9lzgE8-zqvoEC ") and text()="Mon"]');
    await page.waitForTimeout(500); // Optional delay

    let sum = 0;
    const values = [];
    let count = 0;
    for (let x = 0; x < fromActiveMondays.length; x++) {
        //console.log(" I am in for"); // check if for is working
        const text = await fromActiveMondays[x].textContent();
        values.push(text);
        count++

        //await expect(text).toContain("MonTueWedThuFriSatSun");
    }
    console.log(values);
    console.log(count);

    const fromNonActiveMondays = await page.$$('//div[@class="_1put1Mgyi9lzgE8-zqvoEC kwh3zewcrfN_KSejWaUit"][normalize-space()="Mon"]');
    await page.waitForTimeout(500); // Optional delay
    const values1 = [];
    let count1 = 0;
    for (let x = 0; x < fromNonActiveMondays.length; x++) {
        //console.log(" I am in for"); // check if for is working
        const text = await fromNonActiveMondays[x].textContent();
        values1.push(text);
        count1++

        //await expect(text).toContain("MonTueWedThuFriSatSun");
    }
    console.log(values1);
    console.log(count1);
    sum = count + count1;
    console.log(sum);
});

//npx playwright test tests/58.spec.js --headed --project chromium

/*_1put1Mgyi9lzgE8-zqvoEC - active -> Monday(29) //div[contains(@class, "_1put1Mgyi9lzgE8-zqvoEC ") and text()="Mon"]
kwh3zewcrfN_KSejWaUit - non-active -> Monday(4)    //div[@class="_1put1Mgyi9lzgE8-zqvoEC kwh3zewcrfN_KSejWaUit"][normalize-space()="Mon"]
Result:  actice - non-active = 4
Посчитать сколько неактивных понедельников
_1put1Mgyi9lzgE8-zqvoEC - ACTIVE -> Monday(33)
kwh3zewcrfN_KSejWaUit - NON-ACTIVE -> Monday(29)
NON-ACTIVE:  ALL - ACTIVE = 5*/

//button[@id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']