const { test, expect } = require('@playwright/test');

// Checked and Fixed by GPT chat
test('clickCheckPassword1', async ({ page }) => {
    // Open the website
    await page.goto("https://www.roboform.com/password-generator");
    await page.click("//span[@class='got-it']");
    await page.waitForTimeout(2000);

    // Define symbols array
    const arrSymb = ["-", "!", ")", "+", "@", "$", "%"];
    const count = 3; // Number of elements to select
    let result = "";

    // Generate a random string of symbols
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * arrSymb.length);
        result += arrSymb[randomIndex];
    }

    console.log("Generated Symbols:", result);

    // Fill the input field with the generated symbols
    await page.locator("//input[@id='symbols-character']").fill(result);

    await page.waitForTimeout(3000);
});
//npx playwright test tests/30.spec.js --headed --project chromium