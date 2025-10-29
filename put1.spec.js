const { test, expect } = require('@playwright/test');

test('CREATE PUT API REQUEST USING STATIC REQUEST BODY', async ({ request }) => {
    //create put(creat) request
    const updatedUserData = {
        userId: '1',
        id: '2',
        title: 'API Course',
        body: 'This is a test body',
    };


    const putApiResponse = await request.put("https://jsonplaceholder.typicode.com/posts/2", {
        data: updatedUserData

    });

    //print of response from server
    const putApiResponseBody = await putApiResponse.json();
    console.log(putApiResponseBody);


    expect(putApiResponseBody.title).toContain("API");      // includes
    expect(putApiResponseBody.title == updatedUserData.title).toBeTruthy(); // Проверка request/response title
    console.log('Contain API and passed validation.');

    /*let titleStartWith = true; // Флаг для проверки всех URL
    for (const user of putApiResponseBody.data) {     // for...of... short version 
        if (user.title) {
            const isApi = user.title.startsWith('API'); // Проверка начала title
            if (!isApi) {
                titleStartWith = false; // Установить флаг в false, если хотя бы один URL некорректен
                console.error(`Title does not start with API: ${user.title}`); // Вывод некорректного URL
            }
            expect(isApi).toBeTruthy(); // Проверка каждого URL на соответствие
        }
    }*/

    // Проверка статус-кода
    expect(putApiResponse.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(putApiResponse.status()).toBe(200); // 200 (PUT) 
});















//npx playwright test tests/put1.spec.js --headed --project chromium