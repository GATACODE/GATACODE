const { test, expect } = require('@playwright/test');

test('Fill and check days', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://elron.ee");
    //await page.waitForTimeout(2000); // Optional delay
    await page.click("//button[@class='CybotCookiebotDialogBodyButton']");
    await page.waitForTimeout(3000);
    await page.click("//div[@class='first']");
    await page.waitForTimeout(3000);
    const element = await page.locator('.first');
    const dataStart = await element.getAttribute('data-start');
    console.log(dataStart);
    const dataEnd = await element.getAttribute('data-end');
    console.log(dataEnd);
    //const inputFrom = await page.locator("//input[@id='edit-start-stop']").first();
    //const dataOldEndstop = await inputFrom.getAttribute('data-old-endstop');
    await page.waitForTimeout(1000);
    await page.click("//input[@id='edit-submit']");
    await page.waitForTimeout(2000);
    
    //console.log(dataOldEndstop);
    // Проверка: значения совпадают
    //expect(from).toBe(dataStart);
    //await expect(element == cartItem).toBeTruthy();       //  not.
    //await expect(text).toContain("");
    
    //expect(dataOldEndstop).toBe(dataEnd);

});
/*const element = page.locator('.second').first();
const dataEnd = await element.getAttribute('data-end');
const dataOldEndstop = await inputFrom.getAttribute('data-old-endstop');
expect(dataOldEndstop).toBe(dataEnd);

const element = page.locator('.second').first();
const dataEnd = await element.getAttribute('data-end');
const dataOldEndstop = await inputFrom.getAttribute('data-old-endstop');
expect(dataOldEndstop).toBe(dataEnd);


Почему .first() используют здесь?
js
Copy
Edit
const element = await page.locator('.second').first();
.second — это CSS-класс.
На странице может быть несколько элементов с этим классом.
Если вы хотите получить именно первый элемент с этим классом, используете .first().
Что будет без .first()?
Если написать просто page.locator('.second'), то получится коллекция (Locator) из всех элементов с классом .second.
Вызов методов, например getAttribute(), на такой коллекции не сработает без уточнения, к какому именно элементу обращаться.
Поэтому .first() возвращает локатор на первый элемент из коллекции, и с ним можно работать дальше.
Аналогичные методы:
.nth(index) — получить элемент по индексу (нумерация с 0)

.last() — получить последний элемент из списка

Итог:
Используем .first(), чтобы точно обратиться к одному конкретному элементу, если селектор может вернуть несколько.

*/ 
//npx playwright test tests/58.spec.js --headed --project chromium