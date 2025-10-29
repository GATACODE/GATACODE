const { test, expect } = require('@playwright/test');

test('Add random product and verify by name in cart', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(2000); // Optional delay
    //
    const items = await page.$$("//h4[@class='card-title']/a");
    let itemsArr = [];
    for (let item of items) {
        let value = await item.textContent();
        console.log(value);
        itemsArr.push(value.trim());    //Метод .trim() удаляет пробелы (и другие пробельные символы) в начале и в конце строки.

    }
    console.log(itemsArr);
    let randomIndex = Math.floor(Math.random() * itemsArr.length);
    let randomElement = itemsArr[randomIndex];
    console.log(randomElement);

    await page.getByText(randomElement).first().click();    //await page.click(`//a[text()='${randomElement}']`);
    await page.waitForTimeout(2000);

    // obrabotat/process handler
    page.once('dialog', async dialog => {
        console.log("Alert:", dialog.message());
        await dialog.dismiss(); // обязательно!  await dialog.accept();
    })
    await page.click("//a[normalize-space()='Add to cart']");
    await page.waitForTimeout(1000);
    await page.click("//a[@id='cartur']");
    await page.waitForTimeout(1000);    //await page.waitForSelector("//a[normalize-space()='Cart']");

    const cartItem = await page.locator("td:nth-child(2)").textContent();
    console.log(cartItem);
    await page.waitForTimeout(1000);

    await expect(randomElement == cartItem).toBeTruthy();       //  not.
});
/*












// Получаем все названия товаров в корзине
//const cartItems = await page.$$eval("#tbodyid > tr > td:nth-child(2)", elements =>
// elements.map(el => el.textContent.trim())
//);

//console.log(cartItems);

// Проверяем, что выбранный товар присутствует
//expect(cartItems).toContain(randomElement);




//npx playwright test tests/57.spec.js --headed --project chromium
/*



const allItems = await page.$$("//a[@class='hrefch']");
await page.waitForTimeout(500); // Optional delay
const arrItems = [];
for (let item of arrItems) {
    let value = await item.textContent();
    console.log(value);
    arrItems.push(value);
}
let randomIndex = Math.floor(Math.random() * allItems.length);
let randomElement = arrItems[randomIndex];
await page.getByText(randomElement).first().click();
await page.waitForTimeout(2000);
 
const { test, expect } = require('@playwright/test');

test('Add random product and verify by name in cart', async ({ page }) => {
// Открыть сайт
await page.goto("https://demoblaze.com/");
await page.waitForTimeout(2000);

// Получить список названий товаров
const items = await page.$$("h4.card-title a");
let itemsArr = [];

for (let item of items) {
    const name = await item.textContent();
    itemsArr.push(name.trim());
}

// Выбрать случайный товар
const randomIndex = Math.floor(Math.random() * itemsArr.length);
const selectedProductName = itemsArr[randomIndex];
console.log("Selected product:", selectedProductName);

// Перейти на страницу товара
await page.getByText(selectedProductName, { exact: true }).click();
await page.waitForTimeout(2000);

// Нажать "Add to cart"
await page.click("//a[normalize-space()='Add to cart']");
await page.waitForTimeout(2000);

// Подтвердить alert
page.once('dialog', dialog => dialog.accept());

// Перейти в корзину
await page.click("#cartur");
await page.waitForTimeout(2000);

// Найти имя товара в корзине
const cartItems = await page.locator("//td[2]").allTextContents();
console.log("Cart items:", cartItems);

// Проверить, что выбранный товар есть в корзине
expect(cartItems).toContain(selectedProductName);
});
*/