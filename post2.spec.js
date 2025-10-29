const { test, expect } = require('@playwright/test');

test('CREATE POST API REQUEST USING STATIC REQUEST BODY', async ({ request }) => {
    //create post(creat) request

    const testDataArray = [
        { userId: '1', id: '101', title: 'API Course', body: 'This is a test body' },
        { userId: '2', id: '102', title: 'JavaScript Course', body: 'Learning JavaScript' },
        { userId: '3', id: '103', title: 'Python Course', body: 'Introduction to Python' },
        { userId: '4', id: '104', title: 'Java Course', body: 'Exploring Java' },
    ];

    for (let i = 0; i < testDataArray.length; i++) { //i - index
        const userData = testDataArray[i]; // i - число 
        const response = await request.post(`https://jsonplaceholder.typicode.com/posts/`, {
            data: userData

        });
        // Проверка статус-кода
        expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
        expect(response.status()).toBe(201); // 201 (POST) 

        const start = performance.now();
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(response => response.text())
            .then(() => {
                const end = performance.now();
                console.log(`Response time: ${(end - start).toFixed(2)} ms`);
                const responseTime = (end - start); // В миллисекундах

                if (responseTime < 500) {
                    console.log(`Сервер ответил за ${responseTime.toFixed(2)} мс — OK`);
                } else {
                    console.log(`Сервер ответил за ${responseTime.toFixed(2)} мс — слишком долго!`);
                }
            });
    }
});

/*const request = timing.responseStart - timing.requestStart;
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
    const request = entry.responseStart - entry.requestStart;
    if (request > 0) {
        console.log(`${entry.name}: Request time: ${request}ms`);
    }
});
Date!!!!*/
