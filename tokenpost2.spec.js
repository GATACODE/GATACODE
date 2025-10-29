const { test, expect } = require('@playwright/test');

test('CREATE POST API REQUEST USING STATIC REQUEST BODY', async ({ request }) => {
    //create post(creat) request
    const postApiResponse = await request.post("https://dummyjson.com/auth/login", {
        data: {
            "username": "emilys",
            "password": "emilyspass",
        }
    });

    // Validate response status
    expect(postApiResponse.status()).toBe(200);

    const postApiResponseBody = await postApiResponse.json(); //print info from server
    console.log(postApiResponseBody);

    //Извлечение и печать значений / Extract access token
    const accessToken = postApiResponseBody.accessToken;
    console.log(accessToken);

    // Fetch User Profile / Получить профиль пользователя
    const profileResponse = await request.get("https://dummyjson.com/auth/me", {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    console.log(profileResponse);
    // Validate profile response status
    expect(profileResponse.status()).toBe(200);

    // 
    const responseBody = await profileResponse.json();
    console.log("User Profile:", responseBody);

    // Extract IBAN and validate its length (assuming IBAN is part of responseBody)
    const iban = responseBody.bank.iban; // Adjust based on actual API response structure
    expect(iban.length).toBe(24); // Check if IBAN has exactly 24 characters
    console.log("IBAN:", iban);

    const network = responseBody.crypto.network;
    console.log("Network:", network);

    expect(network.startsWith('Eth')).toBe(true); // Проверка "of the start"
    const ip = responseBody.ip;
    console.log("IP:", ip);
    expect(isValidIP(ip)).toBe(true);
});



function isValidIP(ip) {
    const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
    return ipRegex.test(ip);
}

//npx playwright test tests/tokenpost2.spec.js --headed --project chromium
//expect(putApiResponseBody.title == updatedUserData.title).toBeTruthy(); // Проверка request/response title