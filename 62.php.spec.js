const { test, expect } = require('@playwright/test');

test('Search JSON and click random suggestion', async ({ page }) => {
    // Зайти на сайт
    await page.goto('https://www.php.net/');

    // Найти поле поиска и ввести "JSON"
    const searchInput = await page.locator('#search');
    await searchInput.fill('JSON');

    // Ждать появления выпадающего списка с результатами
    await page.waitForSelector('.search-suggestions li');

    // Получить все элементы в выпадающем списке
    const suggestions = await page.locator('.search-suggestions li');
    const count = await suggestions.count();

    if (count === 0) {
        throw new Error('Нет подсказок в списке');
    }

    // Выбрать случайный элемент
    const randomIndex = Math.floor(Math.random() * count);
    await suggestions.nth(randomIndex).click();

    // Проверка: загрузка новой страницы
    await page.waitForLoadState('domcontentloaded');

    // Выводим заголовок открытой страницы
    console.log('Открыта страница:', await page.title());
});



//npx playwright test tests/62php.spec.js --headed --project chromium