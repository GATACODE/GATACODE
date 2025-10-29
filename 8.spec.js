const { test, expect } = require('@playwright/test'); //library
test('LogIn read user and pass', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); //pereiti po ccilke
    //let userFromSite = await page.locator("//div[@id='login_credentials']/text()[1]").textContent(); //sostavlen svoi locator!!!
    //console.log(userFromSite);
    let username = "Admin";
    await page.locator("input[placeholder='Username']").fill(username);    //peremennaja let ne pishem v kavichkax
    await page.fill("input[placeholder='Password']", "admin123");
    await page.click("button[type='submit']");
    await page.click(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon");
    //await page.click(".oxd-userdropdown-name");// have user name
    //await expect(await page.locator(".oxd-userdropdown-name")).toBeVisible();
    await page.click(".oxd-userdropdown-img");  // user pic
    await expect(await page.locator(".oxd-userdropdown-name")).toBeVisible();
    await page.click(".oxd-userdropdown-name"); // name of user
    //await expect(".oxd-userdropdown-name");   // 
    let userName = await page.locator(".oxd-userdropdown-name").textContent();
    console.log(userName);
    await page.click(".oxd-userdropdown-name");// have user name
    await expect(await page.locator(".oxd-userdropdown-name")).toBeVisible();
    //await expect(userName == "hhh user").toBeTruthy();

    await page.waitForTimeout(2000);
});
//npx playwright test tests/8.spec.js --headed --project chromium



/*Admin
    admin123

    1) убедиться, что ты залогинена
2) считать имя и фамилию и распечатать 
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
 */