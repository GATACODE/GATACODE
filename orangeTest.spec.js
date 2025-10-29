const { test, expect } = require('@playwright/test');
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { AdminPage } from '../pages/AdminPage.js';

test('ORANGE TO TEST', async ({ page }) => {
    //Login
    const login = new LoginPage(page);      //create new instance
    await login.gotoLoginPage();
    await login.login("Admin", "admin123");    //
    await page.waitForTimeout(2000);
});


test('ORANGE verify menuItems TEST', async ({ page }) => {
    //Login
    const login = new LoginPage(page);      //create new instance
    await login.gotoLoginPage();
    await login.login("Admin", "admin123");    //
    await page.waitForTimeout(2000);
    // Homepage
    const home = new HomePage(page);
    await home.verifyMenuItems();
    await home.verifySearch();


});


test('ORANGE verify toogleButton', async ({ page }) => {
    //Login
    const login = new LoginPage(page);      //create new instance
    await login.gotoLoginPage();
    await login.login("Admin", "admin123");    //
    await page.waitForTimeout(2000);
    // Homepage
    const home = new HomePage(page);
    await home.verifyToogle();
    await page.waitForTimeout(2000);

});
test('ORANGE createNewUser TEST', async ({ page }) => {
    //Login
    const login = new LoginPage(page);      //create new instance
    await login.gotoLoginPage();
    await login.login("Admin", "admin123");
    await page.waitForTimeout(2000);
    // Adminpage

    const admin = new AdminPage(page);   // new instance
    await admin.gotoAdminPage();
    await admin.createNewUser();

});

test.only('ORANGE verifySearchByAlphabet TEST', async ({ page }) => {
    //Login
    const login = new LoginPage(page);      //create new instance
    await login.gotoLoginPage();
    await login.login("Admin", "admin123");    //
    await page.waitForTimeout(2000);
    // Homepage
    const home = new HomePage(page);
    await home.verifySearchByAlphabet();
    await page.waitForTimeout(2000);
});
//npx playwright test tests/orangeTest.spec.js --headed --project chromium


/*const { test, expect } = require('@playwright/test');
const { MyInfoPage } = require('./MyInfoPage');
const path = require('path');

test('Complete My Info Form including file upload and extended fields', async ({ page }) => {
    const myInfo = new MyInfoPage(page);

    // Navigate to your application login and go to My Info page
    await page.goto('https://your-orangehrm-url.com');
    
    // TODO: Log in first if necessary
    // await page.fill('#username', 'yourUsername');
    // await page.fill('#password', 'yourPassword');
    // await page.click('button[type="submit"]');

    // Optionally navigate to the My Info section
    // await page.click('text=My Info');

    // Fill personal details
    await myInfo.enterPersonalDetails();

    // Fill test field (custom input field)
    await page.fill(myInfo.testField, 'Test Custom Value');

    // Select blood type
    await page.click(myInfo.bloodType);
    await page.click("//div[@role='option']//span[contains(text(), 'A+')]");

    // Upload file
    const filePath = path.resolve(__dirname, 'test_upload.txt');
    await page.setInputFiles('input[type="file"]', filePath);

    // Add a comment
    await page.fill(myInfo.comment, 'This is an automated test comment.');

    // Click Save
    await myInfo.clickSave1();
});
*/
