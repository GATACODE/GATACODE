const { test, expect } = require('@playwright/test'); //импортирование модулей


test('GET info', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://official-joke-api.appspot.com/random_ten');

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    console.log(responseBody);
    expect(Array.isArray(responseBody)).toBe(true);
    // Вывод massiva
    console.log(responseBody.length);
    expect(responseBody.length).toBe(10); // to check 


    const idsArr = [];

    for (let i = 0; i < responseBody.length; i++) {
        const ids = responseBody[i];
        idsArr.push(responseBody[i].id);
    }
    console.log(idsArr);
    let sum = 0;
    for (let x = 0; x < idsArr.length; x++) {
        sum += idsArr[x];
    }
    console.log(sum);




});

//npx playwright test tests/get14.spec.js --headed --project chromium