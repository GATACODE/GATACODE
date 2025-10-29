const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET  elements', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    console.log(responseBody);
    // Вывод massiva
    //console.log(responseBody.length);
    expect(responseBody).toHaveProperty('data'); //true


    for (let i = 0; i < responseBody.data.length; i++) {
        const sN = responseBody.data[i]["Slug Nation"];
        console.log(sN);
        expect(sN).toContain("-");      // includes
    }




    //expect(responseBody.name).toBe(match[0]);
    //console.log('Contain "nathaniel"  and passed validation.');
});


//const fact = responseBody.fact;
//console.log(fact);
//npx playwright test tests/get17.spec.js --headed --project chromium