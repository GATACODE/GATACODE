const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET request description', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get("https://fakestoreapi.com/products");

    // Проверка статус-кода
    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200 

    // Получение тела ответа в формате JSON
    const responseBody = await response.json();
    console.log(responseBody);

    expect(Array.isArray(responseBody)).toBe(true);


    /*// Вывод каждого description в консоль
    responseBody.forEach(product => {
        console.log(product.description);*/

    // Вывод каждого description с помощью for
    for (let i = 0; i < responseBody.length; i++) {
        console.log(responseBody[i].description);
    }
});


//npx playwright test tests / get7.spec.js--headed--project chromium





//npx playwright test tests/get7.spec.js--headed--project chromium