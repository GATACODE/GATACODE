const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET request avatar', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://reqres.in/api/users/2');

    // Проверка статус-кода
    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200 

    // Получение тела ответа в формате JSON
    const responseBody = await response.json();
    console.log(responseBody);

    // Проверка наличия массива 'data'
    expect(responseBody).toHaveProperty('support'); //true 




    let symbols = responseBody.support.text.length; // Доступ к "text"
    console.log('symbols:', symbols);
    expect(symbols).toBeGreaterThan(50); //Убедиться что длина в "text" больше 50 символов



});


//npx playwright test tests/get5.spec.js --headed --project chromium