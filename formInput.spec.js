const { test, expect } = require('@playwright/test');
test('Dynamic iframe locator example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    const frameLocator = page.frameLocator('iframe[src*="AutomationPractice"]'); // или любое ключевое слово

    const locator = page.getByPlaceholder('Enter Name');
    await locator.fill('Test User');

    // Пауза для проверки
    await page.waitForTimeout(1000);

    const emailInput = page.getByPlaceholder('Enter EMail');
    await emailInput.fill('test@example.com');
    await page.waitForTimeout(1000);

    const phoneInput = page.getByPlaceholder('Enter Phone');
    await phoneInput.fill('1234567890');
    await page.waitForTimeout(1000);

    const textarea = page.locator('#textarea');
    await textarea.fill('Текст для заполнения');
    await page.waitForTimeout(500);

    await page.locator("//input[@id='female']").click();
    await page.waitForTimeout(500);

    await page.locator("//input[@id='sunday']").click();
    await page.waitForTimeout(500);
    await page.locator("//select[@id='country']").click();
    await page.waitForTimeout(500);
    await page.locator("//option[@value='blue']").click();
    await page.waitForTimeout(500);
    await page.locator("//option[@value='giraffe']").click();
    await page.waitForTimeout(500);
    await page.locator('#datepicker').fill('2025-06-10');
    await page.waitForTimeout(500);




    await page.waitForTimeout(500);
    await page.locator('//input[@type="date" and @placeholder="Start Date"]').fill('2025-06-10');
    await page.waitForTimeout(500);
    await page.locator('//input[@type="date" and @placeholder="End Date"]').fill('2025-06-30');
    await page.waitForTimeout(500);
    const submitBtn = page.locator('[data-testid="submit-btn"]');
    console.log(await submitBtn.count()); // должно быть 1


});



//test@example.com
//await page.locator('//input[@id="datepicker"]').fill('2025-06-10');
//await page.locator('//input[@id="txtDate" and @name="SelectedDate"]').fill('2025-06-10');
//await page.locator('#start-date').fill('2025-06-10');
//await page.locator('#datePicker2').fill('2025-06-10');
//
//npx playwright test tests/formInput.spec.js --headed --project chromium