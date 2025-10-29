const { test, expect } = require('@playwright/test');

test('Search JSON and click random suggestion', async ({ page }) => {
    await page.goto('https://www.php.net/');

    // Найти поле поиска и ввести "JSON"
    const searchInput = await page.locator('#search');
    await searchInput.fill('JSON');

    // Ждать появления выпадающего списка с результатами
    await page.waitForSelector('.search-suggestions li');
});

//npx playwright test tests/62.spec.js --headed --project chromium

/* зайди на сайт https://www.php.net/
в поиске вбей JSON
кликни на случайное значение в выпадающем списке */