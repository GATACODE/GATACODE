const { test, expect } = require('@playwright/test');

// Checked and Fixed by GPT chat
test('clickCheckBoxes', async ({ page }) => {
  // Open the website
  await page.goto("https://www.roboform.com/password-generator");
  await page.click("//span[@class='got-it']");
  await page.waitForTimeout(2000);
  await page.click("//label[normalize-space()='Advanced Settings']");

  await page.click("//label[normalize-space()='Hexadecimal 0-9, A-F']");
  await page.waitForTimeout(2000);

  const array = await page.locator("//div[@class='option-password clearfix']//input");
  const count = await array.count();
  const locators = [];
  console.log(count);
  for (let x = 0; x < count; x++) {
    locators.push(array.nth(x));        //nth = index
  }
  console.log(locators);
  await page.waitForTimeout(2000);
  for (let a = 0; a < locators.length; a++) {
    // await expect(locators[a]).toBeDisabled();
    await expect(locators[a]).toHaveAttribute("disabled");
  }
});

test.only('clickPasswordButton', async ({ page }) => {
  // Open the website
  await page.goto("https://www.roboform.com/password-generator");
  await page.click("//span[@class='got-it']");  // Принять cookies
  await page.waitForTimeout(2000);
  await page.click("//label[normalize-space()='Advanced Settings']"); // Открыть Advanced Settings
  await page.click("//label[normalize-space()='A - Z']"); //use cicle!!!
  await page.click("//label[normalize-space()='a - z']");
  await page.click("//label[normalize-space()='0 - 9']");
  await page.click("//label[@for='check-character']//span");
  await page.click("//input[@id='symbols-character']");
  await page.waitForTimeout(2000);
  await page.click("//button[@id='button-password']");
  await page.waitForTimeout(2000);

  const passwordButton = await page.locator("//div[@class='button-password-box weak-color']").textContent();
  expect(passwordButton.trim().length).toBe(0);
  //expect(passwordButton.trim()).toBe(""); // works




});




//npx playwright test tests/63password.spec.js --headed --project chromium



/* 
!!! ybeditsja chto parol pustoi
Playwright-тест с циклом:
// Массив XPath чекбоксов
  const checkboxXPaths = [
    "//label[normalize-space()='A - Z']",
    "//label[normalize-space()='a - z']",
    "//label[normalize-space()='0 - 9']",
    "//label[@for='check-character']//span"
  ];

  // Кликаем каждый чекбокс
  for (const xpath of checkboxXPaths) {
    await page.click(xpath);
  }
    // Очистить поле ввода символов
  await page.fill("//input[@id='symbols-character']", "");

  // Подождать и сгенерировать пароль
  await page.waitForTimeout(2000);
  await page.click("//button[@id='button-password']");
  await page.waitForTimeout(2000);

  // Проверка: сгенерированный пароль пустой
  const passwordText = await page.locator("//div[@class='button-password-box weak-color']").textContent();
  expect(passwordText?.trim()).toBe(""); // Проверяем, что пароль пустой
});

test.only('clicAndCheck', async ({ page }) => {
    await page.goto("https://www.roboform.com/password-generator");
    await page.click("//span[@class='got-it']");
    await page.waitForTimeout(2000);
    await page.click("//label[normalize-space()='Advanced Settings']");

    // XPath чекбоксов
    const checkboxes = [
        { xpath: "//label[normalize-space()='A - Z']", inputId: "uppercase" },
        { xpath: "//label[normalize-space()='a - z']", inputId: "lowercase" },
        { xpath: "//label[normalize-space()='0 - 9']", inputId: "digits" },
        { xpath: "//label[@for='check-character']//span", inputId: "characters" }
    ];

    // Кликаем по каждому чекбоксу
    for (const { xpath } of checkboxes) {
        await page.click(xpath);
    }

    // Очищаем поле символов
    await page.fill("#symbols-character", "");

    await page.waitForTimeout(2000);
    await page.click("#button-password");
    await page.waitForTimeout(2000);

    // Проверка: пароль пустой
    const passwordText = await page.locator("//div[@class='button-password-box weak-color']").textContent();
    expect(passwordText?.trim()).toBe("");

    // Проверка: все чекбоксы отключены
    for (const { inputId } of checkboxes) {
        const isChecked = await page.isChecked(`#${inputId}`);
        expect(isChecked).toBe(false);
    }

    // Проверка: уровень сложности — "Weak"
    const strength = await page.locator("#password-strength-text").textContent();
    expect(strength?.trim().toLowerCase()).toBe("weak");
});*/