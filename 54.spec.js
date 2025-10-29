const { test, expect } = require('@playwright/test');
test('chatgpt" appears in first 15 search results', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.producthunt.com/forums/search?ref=sidebar");
    await page.waitForTimeout(3000); // Optional delay
    await page.locator("//input[@placeholder='Search all discussion threads...']").fill("chatgpt");
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    console.log("i am 9 line");
    const fromAllOptions = await page.$$("//div[@data-sentry-component='TruncatableContent']//p") // "//a"-relative path=
    await page.waitForTimeout(500); // Optional delay
    const values = [];
    for (let x = 0; x < fromAllOptions.length; x++) {
        console.log(" I am in for");
        const text = await fromAllOptions[x].textContent();
        values.push(text);
        if (values.length > 2) {
            break;
        }

        await expect(text.toLowerCase()).toContain("chatgpt");
        console.log(text);

    }

    await page.waitForTimeout(500); // Optional delay

});



//npx playwright test tests/54.spec.js --headed --project chromium