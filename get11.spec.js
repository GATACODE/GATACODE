const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET elements', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://swapi.dev/api/starships/9/');

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    console.log(responseBody);

    let consumables = responseBody.consumables; // Доступ к "text"
    console.log('consumables:', consumables);
    let value2 = consumables.replace("years", ""); //otrezaem nenyznoe y menjaem na pystyjy stroky
    console.log(value2);
    let value3 = parseInt(value2);      // perevodim stroky v chislo
    console.log(typeof value3);     // raspechatka tipa dannix
    expect(value3).toBe(3);
});
test.only('GET another element', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://swapi.dev/api/starships/9/');

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    console.log(responseBody);

    let created = new Date(responseBody.created); // Доступ к "text"
    console.log('created:', created);
    const fullYear = created.getFullYear();
    console.log(fullYear);
    expect(fullYear).toBe(2014);

});


// npx playwright test tests/get11.spec.js --headed --project chromium