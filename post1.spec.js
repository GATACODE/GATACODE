const { test, expect } = require('@playwright/test');

test('CREATE POST API REQUEST USING STATIC REQUEST BODY', async ({ request }) => {
    //create post(creat) request
    const postApiResponse = await request.post("http://restful-booker.herokuapp.com/booking", {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });

    const postApiResponseBody = await postApiResponse.json();
    console.log(postApiResponseBody);

    //Validate status code
    expect(postApiResponse.ok()).toBeTruthy();
    expect(postApiResponse.status()).toBe(200);

    //Validate json api response
    expect(postApiResponseBody.booking).toHaveProperty("firstname", "Jim");
    expect(postApiResponseBody.booking).toHaveProperty("lastname", "Brown");

    //Validate nested json objects
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin", "2018-01-01");
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkout", "2019-01-01");

});

// npx playwright test tests/post1.spec.js --headed --project chromium