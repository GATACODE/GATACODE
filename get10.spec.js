const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET request sum', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://swapi.dev/api/people/1');

    // Проверка статус-кода
    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200 

    // Получение тела ответа в формате JSON
    const responseBody = await response.json();
    console.log(responseBody);


    // Проверка наличия массива 'data'
    expect(responseBody).toHaveProperty('films'); //true 
    expect(Array.isArray(responseBody.films)).toBeTruthy();  // это выражение проверяет, является ли responseBody.data массивом. Метод Array.isArray() возвращает true, если переданное значение — массив, и false в противном случае.
    let films = responseBody.films.length; // Доступ к "text"
    console.log('films:', films);

    let vehicles = responseBody.vehicles.length; // Доступ к "text"
    console.log('vehicles:', vehicles);

    let starships = responseBody.starships.length; // Доступ к "text"
    console.log('starships:', starships);

    const totalSum = films + vehicles + starships;
    console.log('total:', totalSum);

    expect(totalSum).toBe(8); // to check 
});


//npx playwright test tests/get10.spec.js --headed --project chromium