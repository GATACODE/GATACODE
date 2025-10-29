const { test, expect } = require('@playwright/test'); //импортирование модулей
const { type } = require('os');

test('GET infoPassword', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://fakeauthentication-api.onrender.com/api/staticUsers/guests');

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    console.log(responseBody);
    expect(Array.isArray(responseBody.guests)).toBe(true);
    let guests = responseBody.guests; // Доступ к "text"
    console.log('guests:', guests);

    // Вывод каждого password с помощью for

    for (let i = 0; i < responseBody.guests.length; i++) {
        console.log(responseBody.guests[i]);
        const password = responseBody.guests[i].password;
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/;
        console.log(passwordPattern.test(password)); // true
        expect(passwordPattern.test(password)).toBe(true);
    }
});

test('CREATE POST API REQUEST USING STATIC REQUEST BODY', async ({ request }) => {
    //create post(creat) request
    const postApiResponse = await request.post("https://fakeauthentication-api.onrender.com/api/staticUsers/login", {
        data:
        {
            "username": "michael_johnson",
            "password": "Michael123!"
        }

    });

    const postApiResponseBody = await postApiResponse.json();
    console.log(postApiResponseBody);
    console.log(postApiResponse.headers());
    const date = postApiResponse.headers()['date'];
    console.log(date);
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    expect(currentYear).toBe(2025);
    const myHeader = postApiResponse.headers()['content-type'];
    console.log(myHeader);
    expect(postApiResponse.headers()['content-type']).toContain('charset=utf-8'); //true
    //Validate status code
    expect(postApiResponse.ok()).toBeTruthy();
    expect(postApiResponse.status()).toBe(200);

});

test.only('GET infoId', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://fakeauthentication-api.onrender.com/api/staticUsers/allUsers');

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    //console.log(responseBody);
    expect(Array.isArray(responseBody.allUsers)).toBe(true);

    // Вывод каждого id с помощью for
    const allUsersId = [];
    for (let i = 0; i < responseBody.allUsers.length; i++) {
        const user = responseBody.allUsers[i]; // Доступ к "text"
        const id = user._id;  // Доступ к_id property of the user
        allUsersId.push(id);

    }
    console.log(allUsersId);
    const allUnique = (allUsersId) => allUsersId.length === new Set(allUsersId).size; //labex.io
    expect(allUnique(allUsersId)).toBe(true);  // This will fail if any id is duplicated

    console.log('All ids are unique!');
});


// npx playwright test tests/get13.spec.js --headed --project chromium