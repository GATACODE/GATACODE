const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET ammount of elements', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://reqres.in/api/users?page=2');

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    console.log(responseBody);

    // Проверка наличия массива 'data'
    expect(responseBody).toHaveProperty('data'); //true 
    expect(responseBody.data.length).toBeGreaterThan(0); // Проверка, что массив не пустой

    // Доступ к первому элементу  'data'
    const firstUser = responseBody.data[0];
    console.log('First user:', firstUser);

    //Извлечение и печать значений каждого свойства
    const firstName = firstUser.first_name;
    const lastName = firstUser.last_name;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);


    // Проверка наличия свойств в первом элементе

    expect(firstUser).toHaveProperty('first_name');
    expect(firstUser).toHaveProperty('last_name');


    let thirdUser = responseBody.data[2];
    console.log('Third user:', thirdUser);

    let eMail = thirdUser.email;
    console.log('Third user:', eMail);
    expect(thirdUser.email).toMatch("tobias.funke@reqres.in"); // OR   expect(thirdUser.email).toBe('tobias.funke@reqres.in')
    let aVatar = thirdUser.avatar;
    console.log('Third user:', aVatar);
    console.log(typeof aVatar);



    let allUrlsEndstWithJpg = true; // Флаг для проверки всех URL
    for (const users of responseBody.data) {     // for...of... short version 
        expect(typeof users.avatar).toBe("string");
        if (users.avatar) {
            const isJpg = users.avatar.endsWith('.jpg'); // Проверка "of end"
            if (!isJpg) {
                allUrlsEndstWithJpg = false; // Установить флаг в false, если хотя бы один URL некорректен
                console.error(`URL does not ends with .jpg: ${users.avatar}`); // Вывод некорректного URL

            }
            expect(isJpg).toBeTruthy(); // Проверка каждого URL на соответствие
        }
    }

    // Финальная проверка
    expect(allUrlsEndstWithJpg).toBeTruthy(); // Завершающая проверка, чтобы убедиться, что все URL корректны
    console.log('All URLs ends with .jpg and passed validation.'); // Подтверждение успешной проверки


    for (const users of responseBody.data) {     // for...of... short version 
        expect(typeof users.id).toBe("number");
        expect(users.id).toBeGreaterThan(0); // Проверка, что больше нул

    }


});


// --headless - фоновый режим
// 3 браузера - --project chromium/firefox/webki
// npx playwright test tests / get6.spec.js --headed --project chromium

