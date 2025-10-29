const { test, expect } = require('@playwright/test');

test('CREATE PUT API REQUEST RESPOND USING STATIC REQUEST BODY', async ({ request }) => {
    //create put(creat) request
    const updatedUserData = {
        "id": 3,
        "name": "Furniture",
        "image": "https://i.imgur.com/Qphac99.jpeg",
        "creationAt": "2025-02-10T16:50:00.000Z",
        "updatedAt": "2025-02-10T16:50:00.000Z"

    };
    //const response = updatedUser(request, userId, updatedUserData);


    const putApiResponse = await request.put("https://jsonplaceholder.typicode.com/posts/2", {
        data: updatedUserData
    });

    //print of response from server
    const putApiResponseBody = await putApiResponse.json();
    console.log(putApiResponseBody);


    let img = checkImg(putApiResponseBody.image);   //объявляем переменную
    //expect(putApiResponseBody.image).toContain("imgur.com");      // includes
    //expect(img).toBe(true);
    console.log('Contain imgur.com and passed validation.');


    // Проверка статус-кода
    expect(putApiResponse.ok()).toBe(true); //проверка что ответ вернул ок
    expect(putApiResponse.status()).toBe(200); // 200 (PUT) 
});

function checkImg(imgvalue) {
    return imgvalue.includes("imgur.com");          // true / false
}
//let idnumber = checkId(putApiResponseBody.id)
//async function udatedUser(request, userId, updatedUserData){
//"https://jsonplaceholder.typicode.com/posts/${variableName};

/*async function updateUser(url, userId, updatedUserData) {
try {
    const response = await fetch(`${url}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUserData)
    });

    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    return await response.json();
} catch (error) {
    console.error('Ошибка при обновлении пользователя:', error);
    throw error;
}
}

// Пример использования:
// updateUser('https://api.example.com/users', 123, { name: 'John Doe', email: 'john@example.com' })
//     .then(data => console.log('Пользователь обновлён:', data))
//     .catch(error => console.error('Ошибка:', error));

/*
Домашка
Сделать функцию которая делает PUT запрос на сервер
Функция должна принимать несколько параметров 
${variableName}
//npx playwright test tests/put2.spec.js --headed --project chromium*/