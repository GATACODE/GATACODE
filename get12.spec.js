const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET some elements', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://swapi.dev/api/starships/9/');

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    console.log(responseBody);

    let films = responseBody.films[0]; // Доступ к "text"
    console.log('films:', films);
    const response1 = await request.get(films);
    console.log(response1);
    const responseBody1 = await response1.json();
    console.log(responseBody1);

    // Вывод каждого description с помощью for
    const starships = [];
    for (let i = 0; i < responseBody1.starships.length; i++) {
        const starshipsArr = responseBody1.starships[i];
        console.log(starshipsArr);
        starships.push(starshipsArr);
    }
    console.log(starships);

    const index = Math.floor(Math.random() * starships.length);
    console.log(index);
    const element = starships[index];
    console.log(element);
    const response2 = await request.get(element);
    console.log(response2);
});


// npx playwright test tests/get12.spec.js --headed --project chromium

//https://swapi.dev/api/starships/9/*/