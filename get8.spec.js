const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET request rating', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get("https://fakestoreapi.com/products");

    // Проверка статус-кода
    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200 

    // Получение тела ответа в формате JSON
    const responseBody = await response.json();
    console.log(responseBody);

    expect(Array.isArray(responseBody)).toBe(true);


    // Вычисление суммы 
    let summa = 0;
    for (let i = 0; i < responseBody.length; i++) {
        summa += responseBody[i].rating.count;
        console.log(responseBody[i].rating.count);

    }
    console.log(summa)

    // Вывод каждого description с помощью for
    let symbolSum = 0;
    for (let i = 0; i < responseBody.length; i++) {
        symbolSum += responseBody[i].description.length;
        console.log(responseBody[i].description);
    }
    console.log(symbolSum)

    // Вывод каждого id с помощью for

    for (let i = 0; i < responseBody.length; i++) {
        console.log(responseBody[i].id);
        expect(typeof responseBody[i].id).toBe("number");
        expect(responseBody[i].id).toBeGreaterThan(0); // Проверка, что больше нул
    }

    for (let i = 0; i < responseBody.length; i++) {
        //console.log(responseBody[i].image);
        expect(responseBody[i].image).toContain("fakestoreapi.com");
    }
});

test('GET request last symbol', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get("https://fakestoreapi.com/users?limit=5");

    // Проверка статус-кода
    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200 

    // Получение тела ответа в формате JSON
    const responseBody = await response.json();
    console.log(responseBody);

    expect(Array.isArray(responseBody)).toBe(true);

    const url = "https://fakestoreapi.com/users?limit=5";
    const lastSym = url.split('=').pop();
    console.log(lastSym);

    const arr = responseBody.length;
    console.log(arr);

    expect(lastSym == arr).toBeTruthy(); // Проверка request / response

});

test.only('GET request sort desc ', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get("https://fakestoreapi.com/users?sort=desc");

    // Проверка статус-кода
    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200 

    // Получение тела ответа в формате JSON
    const responseBody = await response.json();
    console.log(responseBody);

    expect(Array.isArray(responseBody)).toBe(true);

    // Вывод каждого id с помощью for
    const descArr = [];
    for (let i = 0; i < responseBody.length; i++) {
        console.log(responseBody[i].id);
        descArr.push(responseBody[i].id);
    }
    console.log(descArr);

    const arrDesc = descArr.sort();     // reverse
    console.log(arrDesc);

    expect(descArr == arrDesc).toBeTruthy(); // Проверка request / response

});

//npx playwright test tests/get8.spec.js --headed --project chromium
//https://fakestoreapi.com/users?sort=desc