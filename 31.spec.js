const { test, expect } = require('@playwright/test');

test('clickScrollCheck', async ({ page }) => {
    // Open the website
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(2000);
    let value = await page.locator("//p[normalize-space()='Username : Admin']").textContent();
    console.log(value);
    let valueAdmin = value.replace("Username : ", ""); //stroki v ""!!! replace function zameni
    console.log(valueAdmin);
    await page.waitForTimeout(1000);
    let value1 = await page.locator("//p[normalize-space()='Password : admin123']").textContent();
    console.log(value1);
    let valuePassword = value1.replace("Password : ", ""); //stroki v ""!!! replace function zameni
    console.log(valuePassword);
    await page.locator("//input[@name='username']").fill(valueAdmin);
    await page.locator("//input[@name='password']").fill(valuePassword);
    await page.click("//button[normalize-space()='Login']");
    await page.click("//span[normalize-space()='Directory']");
    await page.waitForTimeout(1000);
    let value2 = await page.locator("//span[@class='oxd-text oxd-text--span']").textContent();
    console.log(value2);
    let valueRecords = value2.replace(/\D/g, ''); // ydalenije vsego krome chisel
    console.log(valueRecords);
    let blocks = await page.$$("//div[@class='oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card']");
    //div[@class='oxd-grid-4']/div
    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength);
    let count;
    do {
        // Найдем все элементы снова, так как их количество может измениться после прокрутки
        let totalBlocks = await page.$$("//div[@class='oxd-grid-4']/div");
        count = totalBlocks.length;

        // Найдем последний элемент после обновления totalBlocks
        let bottomElement = await page.locator("//div[@class='oxd-grid-4']/div[last()]");

        // Прокрутка к последнему элементу
        await bottomElement.scrollIntoViewIfNeeded();
    } while (count < valueRecords);

    console.log("Count is: " + count);

    await expect(parseInt(count) === parseInt(valueRecords)).toBeTruthy(); //perevod v stroky!!!

    /*
    //span[@class='oxd-text oxd-text--span']
    await page.waitForTimeout(3000);
    await page.click("//button[normalize-space()='Login']");
    await page.waitForTimeout(3000);*/


    await page.waitForTimeout(3000);
});

//npx playwright test tests/31.spec.js --headed --project chromium