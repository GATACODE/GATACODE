const { test, expect } = require('@playwright/test');

test('Сумма стоимости первых 6 курсов во вкладке "Новые курсы" на Stepik', async ({ page }) => {
    await page.goto("https://stepik.org/");
    await page.waitForTimeout(2000);

    // Закрытие баннера, если он есть
    const banner = page.locator("//button[@class='woof-message__button']");
    if (await banner.isVisible()) {
        await banner.click();
    }

    // Клик по вкладке "Новые курсы"
    await page.click("//body/main/div/div[2]/div/div/ul/li[2]/button");
    await page.waitForTimeout(1000);

    const priceElements = await page.$$("//span[contains(@class, 'course-card__price')]");
    let arrPrice = [];
    let total = 0;

    for (let x of priceElements) {
        if (arrPrice.length >= 6) break;

        let value = await x.textContent();
        if (!value) continue;

        // Пропускаем "Бесплатно"
        if (value.includes("Бесплатно")) continue;

        let valueClean = value.replace("₽", "").replace(/\s/g, "").trim();
        let numeric = parseInt(valueClean);

        if (!isNaN(numeric)) {
            arrPrice.push(numeric);
            total += numeric;
        }
    }

    console.log("Цены:", arrPrice);
    console.log("Сумма:", total, "₽");

    /*// Убедиться, что собрали 6 курсов и сумма > 0
    expect(arrPrice.length).toBe(6);
    expect(total).toBeGreaterThan(0);*/
});

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

    do {
        const elements = await page.$$("//span[@class='format-price format-price_free']");
        currentCount = elements.length;

        if (currentCount === previousCount) break;

        previousCount = currentCount;

        const bottomElement = await page.locator("//li[@class='course-cards__item'][last()]");
        await bottomElement.scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);
    } while (true);

    console.log(`Найдено ${currentCount} бесплатных курсов.`);
});





//npx playwright test tests/61test.spec.js --headed --project chromium