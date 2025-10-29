const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET  elements', async ({ request }) => {
    const url = 'https://api.nationalize.io/?name=nathaniel';

    const match = url.match(/(?<=\?name=)[a-zA-Z]+/);

    if (match) {
        console.log(match[0]);
    }
    // Выполнение GET запроса
    const response = await request.get(url);
    expect(response.ok()).toBeTruthy(); // Проверка, что ответ успешный

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    console.log(responseBody);


    expect(responseBody.name).toContain("nathaniel");      // includes
    expect(responseBody.name).toBe(match[0]);
    console.log('Contain "nathaniel"  and passed validation.');

});


//npx playwright test tests/get16.spec.js --headed --project chromium