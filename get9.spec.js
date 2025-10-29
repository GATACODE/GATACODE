const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET request by different Id', async ({ request }) => {

    const idArr = [];
    let arrayID = [1, 2, 3, 4, 5];
    // Вывод каждого id с помощью for
    for (let i = 0; i < arrayID.length; i++) {
        const id = arrayID[i];
        console.log(id);
        const response = await request.get(`https://fakestoreapi.com/carts/user/${id}`);
        const responseBody = await response.json();
        console.log(responseBody);
        for (let y = 0; y < responseBody.length; y++) {

            expect(responseBody[y].id).toBeGreaterThan(0); // Проверка, что больше нул
        }
    };


    //$=interpolitation, concatination objedinenie srtok
    // Проверка наличия массива 'data'




});


//npx playwright test tests/get9.spec.js --headed --project chromium