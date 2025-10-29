const { test, expect } = require('@playwright/test');

test('clickChooseAllTitles', async ({ page }) => {
    // Open the website
    await page.goto("https://news.ycombinator.com/");

    // Extract titles
    let titles = await page.$$("//span[@class='titleline']");
    let titlesLength = titles.length;
    console.log(`Number of titles: ${titlesLength}`);

    let arrayT = [];
    for (let title of titles) {
        let value = await title.textContent();
        arrayT.push(value.trim()); // Trim to remove any unnecessary whitespace
    }
    console.log("Titles:", arrayT);

    // Extract scores
    let scores = await page.$$("//span[@class='score']");
    let scoreLength = scores.length;
    console.log(`Number of scores: ${scoreLength}`);

    let arrayScore = [];
    for (let score of scores) {
        let value = await score.textContent();
        let value2 = value.replace(" points", "").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number
        arrayScore.push(value3);
        console.log(`Score: ${value3}`);
    }
    console.log(arrayScore);

    // Calculate the sum of scores
    let summa = 0;
    for (let x = 0; x < arrayScore.length; x++) {
        summa += arrayScore[x];
    }
    console.log(` ${summa}`);

    // Wait for a moment (if necessary)
    await page.waitForTimeout(3000);
});


//npx playwright test tests/28.spec.js --headed --project chromium
// gpt chat version