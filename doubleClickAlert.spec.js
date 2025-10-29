const { test, expect } = require('@playwright/test');

test('Double click triggers alert in iframe', async ({ page }) => {
    // Step 1: Открыть сайт
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Step 2: Переключиться на iframe с кнопкой двойного клика
    const frame = page.frameLocator("//button[normalize-space()='Copy Text']");

    // Step 3: Найти и сделать двойной клик по кнопке
    const doubleClickBtn = frame.locator("//button[normalize-space()='Copy Text']");
    await doubleClickBtn.dblclick();

    // Step 4: Проверить текст алерта
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('You double clicked me'); // Ожидаемое сообщение
        await dialog.accept(); // Step 5: Закрыть алерт
    });

    // Небольшая пауза, чтобы алерт успел появиться
    await page.waitForTimeout(1000);
});


//npx playwright test tests/doubleClickAlert.spec.js --headed --project chromium