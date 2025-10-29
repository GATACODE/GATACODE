const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET request avatar', async ({ request }) => {
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
    //expect(Array.isArray(responseBody.products)).toBeTruthy();  // это выражение проверяет, является ли responseBody.data массивом. Метод Array isArray() возвращает true, если переданное значение — массив, и false в противном случае.
    let allUrlsStartWithHttps = true; // Флаг для проверки всех URL
    for (const user of responseBody.data) {     // for...of... short version 
        if (user.avatar) {
            const isHttps = user.avatar.startsWith('https://'); // Проверка начала URL
            if (!isHttps) {
                allUrlsStartWithHttps = false; // Установить флаг в false, если хотя бы один URL некорректен
                console.error(`URL does not start with https://: ${user.avatar}`); // Вывод некорректного URL
            }
            expect(isHttps).toBeTruthy(); // Проверка каждого URL на соответствие
        }
    }

    // Финальная проверка
    expect(allUrlsStartWithHttps).toBeTruthy(); // Завершающая проверка, чтобы убедиться, что все URL корректны
    console.log('All URLs start with https:// and passed validation.'); // Подтверждение успешной проверки
});

/*// Перебор массива 'data' и печать каждого второго пользователя, ++ all users
// Проверка, что все URL начинаются с 'https://'
let allUrlsStartWithHttps = true; // Флаг для проверки всех URL
for (let i = 0; i < responseBody.data.length; i++) { //i - index
    const users = responseBody.data; // i - число
    //console.log(`Users at index ${i}:`, users);
    //expect(users.avatar).toMatch(/https:/); // Проверка, что email заканчивается на '@reqres.in'
    if (users.avatar) {
        allUrlsStartWithHttps = false; // Установить флаг в false, если хотя бы один URL некорректен
        console.error(`URL does not start with https://: ${users.avatar}`); // Вывод некорректного URL
    }
    expect(users.avatar).toBeTruthy(); // Проверка каждого URL на соответствие
}

// Финальная проверка
expect(allUrlsStartWithHttps).toBeTruthy(); // Завершающая проверка, чтобы убедиться, что все URL корректны
console.log('All URLs start with https:// and passed validation.'); // Подтверждение успешной проверки

});*/

/*let areGreater = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arrayOfClass.length; x++) {
        if (arrayOfClass[x] < 4) {               // dlja proverki pomenjai znak <
            areGreater = false;
            break;
        }
    }
    await expect(areGreater).toBeTruthy();

    Объяснение изменений:
Флаг allUrlsStartWithHttps:

Используется для отслеживания, корректны ли все URL. Если хотя бы один некорректен, флаг устанавливается в false.
Цикл проверки:

Каждая запись в массиве data проверяется на наличие свойства avatar. Если оно присутствует, проверяется начало строки с https://.
Сообщение об ошибке:

Если найден некорректный URL, он выводится в консоль с пояснением.
Финальная проверка:

В конце используется expect для проверки значения allUrlsStartWithHttps. Если хотя бы один URL некорректен, тест завершится ошибкой.
Вывод в консоль:

В случае успешного завершения проверки выводится сообщение о прохождении всех проверок*/
// npx playwright test tests/get4.spec.js --headed --project chromium