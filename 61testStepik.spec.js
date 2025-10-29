
import { test, expect } from '@playwright/test';

test('firstCheck', async ({ page }) => {
    test.setTimeout(120 * 1000);
    await page.goto("https://stepik.org/");
    await page.waitForTimeout(2000);

    await page.click("//span[contains(text(),'Бесплатные')]");
    await page.waitForSelector("//span[contains(text(),'Бесплатные')]");
    await page.click("//button[@class='button_with-loader search-form__submit']");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(5000);

    let count = 0;
    let lastCount = -1; // Для сравнения
    /*
    -1 используется просто как "нулевое", невозможное значение для того, 
    чтобы корректно прошла самая первая проверка, и цикл начал работу.
  
    В начале, до первой проверки, мы ещё не знаем, сколько карточек на странице.
    Любое реальное количество карточек (после первой загрузки) — это 0, 1, 2, 3, ...
    -1 — это такое специальное значение, которое никогда не совпадёт с реальным количеством карточек.
    Поэтому первое сравнение (if (count === lastCount)) точно не сработает на первой итерации, и цикл обязательно выполнится хотя бы один раз.
    */
    let totalElements;

    do {
        await page.waitForTimeout(1000);
        totalElements = await page.$$("//span[@class='format-price format-price_free']");
        count = totalElements.length;

        // Скроллим вниз на 1 экран
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });

        await page.waitForTimeout(2000);

        // Если новых карточек не появилось — выход
        if (count === lastCount) break;
        lastCount = count;
    }
    while (true); //бесконечный цикл, останавливается тольо если есть break

    console.log("Count " + count);
    await page.waitForTimeout(2000);
});




//npx playwright test tests/61testStepik.spec.js --headed --project chromium