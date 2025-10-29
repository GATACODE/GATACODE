const { test, expect } = require('@playwright/test');

test('Dynamic iframe locator example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');
    await page.waitForTimeout(2000); // время на загрузку iframe

    // Достаём iframe (на странице только один)
    const iframeElement = await page.waitForSelector('iframe');
    const frame = await iframeElement.contentFrame();

    // Заполняем поля
    await frame.getByPlaceholder('Enter Name').fill('Test User');
    await frame.getByPlaceholder('Enter EMail').fill('test@example.com');
    await frame.getByPlaceholder('Enter Phone').fill('1234567890');
    await frame.locator('#textarea').fill('Текст для заполнения');

    // Выбор пола и дня недели
    await frame.locator('#female').click();
    await frame.locator('#sunday').click();

    // Dropdown — страна
    await frame.locator('#country').selectOption('India');

    // Множественный выбор — цвета и животные (если select поддерживает)
    await frame.locator('#colors').selectOption('blue');
    await frame.locator('#animals').selectOption('giraffe');

    // Даты
    await frame.locator('#datepicker').fill('2025-06-10');
    const frames = page.frames();

    for (const frame of frames) {
        const input = await frame.$('#txtDate'); // любой уникальный элемент внутри
        if (input) {
            await input.fill('2025-06-10');
            break;
        }
    }

    //await frame.locator('#txtDate').fill('2025-06-10');
    await frame.locator('[placeholder="Start Date"]').fill('2025-06-10');
    await frame.locator('[placeholder="End Date"]').fill('2025-06-30');

    // Отправка формы (если кнопка есть)
    await frame.locator('[data-testid="submit-btn"]').click();


    // Пауза (опционально)
    await page.waitForTimeout(2000);
});


//npx playwright test tests/test.spec.js --headed --project chromium
/* Универсальный шаблон динамического iframe + заполнение поля:

const iframeElement = await page.waitForSelector('iframe'); // если iframe один
const frame = await iframeElement.contentFrame();
await frame.getByPlaceholder('Enter Name').fill('Test User');*/