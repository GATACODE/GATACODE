import { test, expect } from '@playwright/test';

//test.skip
test.skip('Alert 1', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    //сначала надо написать хендлер и только потом открывать алерт
    //dialog window handler
    //enabling alert handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();// button
    })

    await page.click("//button[@id='alertBtn']");
    await page.waitForTimeout(3000);
});

test.skip('Alert 2 Confirmation alert with OK and Cancel btn', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    //сначала надо написать хендлер и только потом открывать алерт
    //dialog window handler
    //enabling dialog window handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        //close by using OK button
        await dialog.accept();
        //close by using cancel button
        //await dialog.dismiss();
    })

    await page.click('//button[@id="confirmBtn"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    await page.waitForTimeout(3000);
});



test.only('Alert 3 Prompt dialog with input box', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    //сначала надо написать хендлер и только потом открывать алерт
    //dialog window handler
    //enabling dialog window handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        //get default value from input box
        expect(dialog.defaultValue()).toContain('Harry Potter');

        //close by using ok button
        await dialog.accept('John');
    })

    await page.click('//button[@id="promptBtn"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?');
    await page.waitForTimeout(3000);
});

//npx playwright test tests/22.spec.js --headed --project chromium