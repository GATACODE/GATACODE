const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/devLoginPage.js';

test('DEV TO TEST', async ({ page }) => {
    //Login
    const login = new LoginPage(page);      //create new instance
    await login.gotoLoginPage();
    await login.login("19diamond79@gmail.com", "19diamond79");    //
    await page.waitForTimeout(2000);
});

//npx playwright test tests/devtoTest.spec.js --headed --project chromium