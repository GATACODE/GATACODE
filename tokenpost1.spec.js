const { test, expect } = require('@playwright/test');

test('CREATE POST API REQUEST USING STATIC REQUEST BODY', async ({ request }) => {
    //create post(creat) request
    const postApiResponse = await request.post("https://api.escuelajs.co/api/v1/auth/login", {
        data: {
            "email": "john@mail.com",
            "password": "changeme",
        }
    });

    // Validate response status
    expect(postApiResponse.status()).toBe(201);

    const postApiResponseBody = await postApiResponse.json(); //print info from server
    console.log(postApiResponseBody);
    //console.log(checkUser);

    //Извлечение и печать значений / Extract access token
    const accessToken = postApiResponseBody.access_token;
    console.log(accessToken);

    // Fetch User Profile / Получить профиль пользователя
    const profileResponse = await request.get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    console.log(profileResponse);

    // Validate profile response status
    expect(profileResponse.status()).toBe(200);

    // 
    const responseBody = await profileResponse.json();
    console.log("User Profile:", responseBody);

    // Additional assertions (optional)
    expect(responseBody).toHaveProperty('email', 'john@mail.com');

});

// npx playwright test tests/tokenpost1.spec.js --headed --project chromium
