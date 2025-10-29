const { test, expect } = require('@playwright/test'); //library
test('fillClickChoose', async ({ page }) => {
    // Open the website
    await page.goto("https://wise.jobs/jobs");
    await page.waitForTimeout(500);
    await page.click("#twcc__accept-button");
    await page.click('//h3');
    const fromAllOptions = await page.$$('//li[@data-option-id]');//$$ xranit mnogo locatorov (massiv locatorov)
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

    let people = arrayP[0];
    let finPeople = people.replace("(11)", "");
    let product = arrayP[1];
    let finProduct = product.replace("(35)", "");
    console.log(finPeople, finProduct);


    /*let value1 = await page.locator("span[aria-label='People']").textContent();
    let value2 = value1.replace("(11)", "");
    console.log(value2);
    let value3 = await page.locator("span[aria-label='Product']").textContent();
    let value4 = value3.replace("(35)", "");
    console.log(value4);*/

    await page.click("//h3[normalize-space()='Office']");
    const fromAllOptions1 = await page.$$('//li[@data-option-id]');//$$ xranit mnogo locatorov   //$$ xranit mnogo locatorov
    await page.waitForSelector("//li[@data-option-id]");
    for (let f of fromAllOptions1) {
        let value5 = await f.textContent();//schitat text kazdogo znachenija
        if (value5.includes("Tallinn")) {
            await f.click();
            await page.waitForTimeout(2000);
            console.log(value5);
        }

    }
    await page.click("(//button[@class='apply-filters-btn btn'][normalize-space()='Apply'])[2]");
    let locator = page.locator("(//div/p[@class='attrax-vacancy-tile__item-value']");
    await page.waitForTimeout(2000);
    await expect(locator).toContainText(finProduct || finPeople);// sravnenije s peremennoi a ne s textom

    /*await expect(await page.locator("(//p[@class='attrax-vacancy-tile__item-value'][normalize-space()='Tallinn'])[1]")).toBeVisible();
    await expect(await page.locator("//p[normalize-space()='People']")).toBeVisible();
    let logoutText = await page.locator("(//a/i)[1]").textContent();
    console.log(logoutText);
    //await expect(await page.locator("(//a/i)[1])")).toBeVisible();
    //let noteLoggedIn = await page.locator("#flash").textContent();
    //console.log(noteLoggedIn);
    //await expect(await page.getByText("You logged into a secure area!")).toBeVisible();// if text not same: test failed!
    const locator = page.locator('.title');
    await expect(locator).toContainText('substring');
    await expect(locator).toContainText(/\d messages/);*/
    //let name = await page.locator("#'Tallinn'").textContent();//.textContent pacpechatat text s HTML
    //console.log(name);
    //await expect(await page.getByText(name)).toBeVisible();//expect ybeditsja chto element viden

    await page.waitForTimeout(3000);    // Wait for 3 seconds, but ideally, wait for some next action or element.*/
});
//npx playwright test tests/15.spec.js --headed --project chromium