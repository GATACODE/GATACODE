const { test, expect } = require('@playwright/test'); //library
test('clickManyWeb', async ({ page }) => {
    // Open the website
    await page.goto("https://news.ycombinator.com/jobs");
    await page.waitForTimeout(500);
    let web = await page.$$("//a/span[@class='sitestr']");
    let webLength = web.length;   //property without ()
    console.log(webLength);
    let count = 0;
    for (let f of web) {
        let value = await f.textContent();//schitat text kazdogo znachenija
        if (value.includes("ycombinator")) {
            //await f.click();
            count++
            //console.log(value);  == paspechatal vse 15 
        }
    }
    console.log(count);

    await page.waitForTimeout(3000);
});
//npx playwright test tests/27.spec.js --headed --project chromium


//a/span[@class='sitestr'] = locator of webs