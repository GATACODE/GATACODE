const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET ammount of elements', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('');

    const responseBody = await response.json(); // получить тело ответа в формате JSON
    console.log(responseBody);

});

/*
Отправить GET запрос на указанный URL и получить тело ответа в формате JSON.
Проверка количества элементов:
Убедиться, что в ответе содержится ровно 100 элементов (фильмов).
Вывести в консоль количество элементов.
Проверка всех URL IMDb:
Перебрать каждый фильм в ответе.
Проверить, что каждый URL для IMDb (imdb_url) начинается с https://.
Если хотя бы один URL не начинается с https://, установить флаг allUrlsStartWithHttps в false.
Финальная проверка:
Проверить, что все URL начинаются с https://. Если хотя бы один URL не соответствует, тест завершится ошибкой.
Вывести в консоль подтверждение, что все URL прошли проверку.
*/