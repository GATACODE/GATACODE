const { test, expect } = require('@playwright/test');

test('Compare station values after selecting from autocomplete', async ({ page }) => {
    await page.goto("https://elron.ee");

    // Принять cookies
    await page.click("//button[@class='CybotCookiebotDialogBodyButton']");

    // Подождать и кликнуть по элементу
    await page.waitForSelector("//div[@class='second']");
    await page.click("//div[@class='second']");

    // Вводим станцию в поле
    const inputFrom = page.locator('#edit-start-stop');
    await inputFrom.fill('Tartu');

    // Ждём появления автокомплита и кликаем на первый вариант
    const suggestion = page.locator('.ui-menu-item > a').first();
    await suggestion.waitFor({ state: 'visible' });
    const stationName = await suggestion.textContent();
    await suggestion.click();

    // После выбора — сравниваем значения
    const element = page.locator('.second').first();
    const dataStart = await element.getAttribute('data-start');
    const from = await inputFrom.getAttribute('data-old-startstop');

    console.log('data-start:', dataStart);
    console.log('data-old-startstop:', from);
    const inputValue = await inputFrom.inputValue();
    expect(inputValue).toBe(dataStart);

    // Проверка
    //expect(from).toBe(dataStart);
});

const { test, expect } = require('@playwright/test');

test.only('firstCheck', async ({ page }) => {
    await page.goto("https://stepik.org/");
    await page.waitForTimeout(2000);

    await page.click("//span[contains(text(),'Бесплатные')]");
    await page.waitForSelector("//span[contains(text(),'Бесплатные')]");
    await page.click("//button[@class='button_with-loader search-form__submit']");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);

    let previousCount = 0;
    let currentCount = 0;
    let attempts = 0;

    do {
        const elements = await page.$$("//span[@class='format-price format-price_free']");
        currentCount = elements.length;

        if (currentCount === previousCount || attempts > 15) break;

        previousCount = currentCount;

        // Прокрутка вниз
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await page.waitForTimeout(1000);

        attempts++;
    } while (true);

    console.log(`Найдено ${currentCount} бесплатных курсов.`);

    // Проверка
    expect(currentCount).toBeGreaterThan(0);
});


