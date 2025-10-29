/*
Основные задачи:
Отправка GET-запроса:
Отправьте GET-запрос на API с использованием метода request.get.
Проверьте статус ответа (ожидается статус 200) и убедитесь, что запрос завершился успешно (response.ok()).
Получение данных:
Получите тело ответа в формате JSON с помощью response.json() и выведите его в консоль.
Проверка структуры ответа:
Убедитесь, что в ответе есть массив data.
Проверьте, что data — это массив, который содержит как минимум одного пользователя.
Доступ к данным пользователей:
Извлеките первого и пятого пользователя из массива.
Выведите информацию о первом пользователе: id, email, first_name, last_name, и ссылку на аватар.
Перебор пользователей:
Пройдите по массиву data и выведите в консоль каждого второго пользователя.
Проверка свойств пользователей:
Проверьте, что первый пользователь имеет свойства id, email, first_name, last_name и avatar.
Убедитесь, что id первого пользователя больше 0.
Проверьте, что его email заканчивается на @reqres.in.
Проверка заголовков ответа:
Проверьте, что заголовок content-type содержит application/json, чтобы убедиться, что ответ в формате JSON.
*/

const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET request to fetch users from page 2', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://reqres.in/api/users?page=2');

    // Проверка статус-кода
    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200 

    // Получение тела ответа в формате JSON
    const responseBody = await response.json();
    console.log(responseBody);


    // Проверка наличия массива 'data'
    expect(responseBody).toHaveProperty('data'); //true 
    //expect(Array.isArray(responseBody.data)).toBeTruthy();  // это выражение проверяет, является ли responseBody.data массивом. Метод Array.isArray() возвращает true, если переданное значение — массив, и false в противном случае.


    // Доступ к первому элементу массива 'data'
    const firstUser = responseBody.data[0];
    console.log('First user:', firstUser);

    const fifthUser = responseBody.data[5];
    console.log('Fifth user: ', fifthUser);

    // Перебор массива 'data' и печать каждого второго пользователя, ++ all users
    for (let i = 0; i < responseBody.data.length; i += 2) { //i - index
        const user = responseBody.data[i]; // i - число
        console.log(`User at index ${i}:`, user);
    }


    //Извлечение и печать значений каждого свойства
    const id = firstUser.id;  //id = property //object[0].firstname
    const email = firstUser.email;
    const firstName = firstUser.first_name;
    const lastName = firstUser.last_name;
    const avatar = firstUser.avatar;

    console.log('ID:', id); //7
    console.log('Email:', email); //mailto:michael.lawson@reqres.in
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Avatar:', avatar);


    // Проверка наличия свойств в первом элементе
    expect(firstUser).toHaveProperty('id'); //true //false
    expect(firstUser).toHaveProperty('email');
    expect(firstUser).toHaveProperty('first_name');
    expect(firstUser).toHaveProperty('last_name');
    expect(firstUser).toHaveProperty('avatar');
    //expect(firstUser).toHaveProperty('address'); //false
    //expect(firstUser).toHaveProperty('address'); //false

    expect(responseBody.data.length).toBeGreaterThan(0); // Проверка, что массив не пустой

    expect(firstUser.id).toBeGreaterThan(0); //true // Проверка, что ID положительный

    expect(firstUser.email).toMatch(/@reqres.in$/); // Проверка, что email заканчивается на '@reqres.in'

    expect(response.headers()['content-type']).toContain('application/json'); //true

});


// --headless - фоновый режим
// 3 браузера - --project chromium/firefox/webkit
// npx playwright test tests/get1.spec.js --headed --project chromium