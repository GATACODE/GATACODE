const { test, expect } = require('@playwright/test');

test('clickCompare Cpu', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://testautomationpractice.blogspot.com");

    // Accept cookies
    await page.waitForSelector(".cookie-choices-inner");
    await page.click("//a[@id='cookieChoiceDismiss']");
    console.log("Clicked on the 'Got It' button.");

    const fromCromeCpu = await page.locator("//table[@id='taskTable']//tr[td[normalize-space()='Chrome']]/td[count(//table[@id='taskTable']//th[normalize-space()='CPU (%)']/preceding-sibling::th) + 1]").textContent(); // Dynamic XPath
    console.log(fromCromeCpu)

    const loadCpu = await page.locator("//strong[@class='chrome-cpu']").textContent();
    console.log(loadCpu);

    console.log(fromCromeCpu == loadCpu); // for me

    await expect(fromCromeCpu == loadCpu).toBeTruthy(); //expect(...).toBeTruthy() checks whether an expression evaluates to a truthy value

});


//npx playwright test tests/49.spec.js --headed --project chromium

//strong[@class='chrome-cpu']