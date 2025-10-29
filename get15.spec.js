const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET  elements', async ({ request }) => {




    for (let i = 0; i < 3; i++) {   // i < 3 iteracia // Выполнение запросов 3 раза все в for
        // Выполнение GET запроса
        const response = await request.get('https://catfact.ninja/fact');

        const responseBody = await response.json(); // получить тело ответа в формате JSON
        //console.log(responseBody);
        console.log(responseBody);

        const fact = responseBody.fact;
        console.log(fact);
    }


});


//npx playwright test tests/get15.spec.js --headed --project chromium