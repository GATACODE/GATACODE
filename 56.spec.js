const { test, expect } = require('@playwright/test');

test.only('Check price consistency', async ({ page }) => {
    // 1. Открываем сайт и логинимся
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.click("//input[@id='login-button']");

    // 2. Получаем все карточки продуктов
    const products = await page.$$("//div[@class='inventory_item_name']");

    // 3. Выбираем случайный продукт
    const randomIndex = Math.floor(Math.random() * products.length);
    const selectedProduct = products[randomIndex];

    // 4. Получаем название и цену выбранного продукта
    const productName = await selectedProduct.locator("//div[@class='inventory_item_name']").textContent();
    const productPrice = await selectedProduct.locator("//div[@class='inventory_item_price']").textContent();

    // 5. Кликаем "Add to cart"
    await selectedProduct.locator("button.btn_inventory").click();

    // 6. Открываем корзину
    await page.locator("#shopping_cart_container a").click();

    // 7. Находим в корзине тот же продукт по имени и сравниваем цену
    const cartItems = await page.$$(".cart_item");

    // Ищем продукт с таким же именем
    let matched = false;
    for (const item of cartItems) {
        const nameInCart = await item.locator(".inventory_item_name").textContent();
        const priceInCart = await item.locator(".inventory_item_price").textContent();
        if (nameInCart.trim() === productName.trim()) {
            expect(priceInCart.trim()).toBe(productPrice.trim());
            matched = true;
            break;
        }
    }

    expect(matched).toBeTruthy(); // Убедиться, что мы нашли нужный товар в корзине
});

//npx playwright test tests/56.spec.js --headed --project chromium