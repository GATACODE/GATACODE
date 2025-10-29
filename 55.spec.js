const { test, expect } = require('@playwright/test');
test('Random click', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.waitForTimeout(500); // Optional delay
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.click("//input[@id='login-button']");
    await page.waitForTimeout(2000);
    let ItemButton = await page.$$("//div/button[@class='btn_primary btn_inventory']");;
    let randomIndex = Math.floor(Math.random() * ItemButton.length);
    //console.log("random index " + randomIndex);
    await ItemButton[randomIndex].click();
    await page.waitForTimeout(2000);
    await expect(await page.locator("//span[@class='fa-layers-counter shopping_cart_badge']")).toBeVisible();//.not.toBeVisible();
});

test('Remove from ', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.waitForTimeout(500); // Optional delay
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.click("//input[@id='login-button']");
    await page.waitForSelector("//div/button[@class='btn_primary btn_inventory']");
    let ItemButton = await page.$$("//div/button[@class='btn_primary btn_inventory']");;
    let randomIndex = Math.floor(Math.random() * ItemButton.length);
    //console.log("random index " + randomIndex);
    await ItemButton[randomIndex].click();
    await page.waitForSelector("//span[@class='fa-layers-counter shopping_cart_badge']");
    await expect(await page.locator("//span[@class='fa-layers-counter shopping_cart_badge']")).toBeVisible();//.not.toBeVisible();
    await page.locator("//div[@id='shopping_cart_container']/a").click();
    await page.waitForSelector("//button[normalize-space()='REMOVE']");
    await page.locator("//button[normalize-space()='REMOVE']").click();
    await expect(await page.locator("//span[@class='fa-layers-counter shopping_cart_badge']")).not.toBeVisible();//.not.toBeVisible();
});

test
    ('Select Compare Product', async ({ page }) => {
        // Navigate to the page
        await page.goto("https://www.saucedemo.com/v1/index.html");
        await page.waitForTimeout(500); // Optional delay
        await page.locator("//input[@id='user-name']").fill("standard_user");
        await page.locator("//input[@id='password']").fill("secret_sauce")
        await page.click("//input[@id='login-button']");
        await page.waitForTimeout(2000);
        let ItemButton = await page.$$("//div/button[@class='btn_primary btn_inventory']");;
        let randomIndex = Math.floor(Math.random() * ItemButton.length);
        //console.log("random index " + randomIndex);
        await ItemButton[randomIndex].click();
        await page.waitForTimeout(2000);
        await expect(await page.locator("//span[@class='fa-layers-counter shopping_cart_badge']")).toBeVisible();//.not.toBeVisible();

        // select produst
        const product = await page.$$("//div[@class='inventory_item_price']");
        const priceText = await product[randomIndex].textContent();
        const priceNumber = parseFloat(priceText.replace('$', '').trim());
        console.log(priceNumber);

        await page.locator("//div[@id='shopping_cart_container']/a").click();
        await page.waitForTimeout(500);
        // select cartproduct
        const cartProduct = await page.$("//div[@class='inventory_item_price']");
        const text = await cartProduct.textContent();
        const cartItemsPrice = parseFloat(text.replace('$', '').trim());
        //const cartItemsPrice = parseInt(cartProduct);
        console.log(cartItemsPrice);

        console.log(priceNumber == cartItemsPrice); // for me
        await expect(priceNumber == cartItemsPrice).toBeTruthy(); //expect(...).toBeTruthy() checks whether an expression evaluates to a truthy value*/
    });

test('sum of "sauce" from all ', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.waitForTimeout(500); // Optional delay
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.click("//input[@id='login-button']");
    await page.waitForSelector("//div/button[@class='btn_primary btn_inventory']");
    let fromAllOptions = await page.$$("//div[@class='inventory_item_name']");
    let count = 0;
    for (let x of fromAllOptions) {
        let value = await x.textContent();
        if (value.includes("Sauce")) {
            count++;
        }
    }
    console.log(count);

});


test.only('Select Choose and Compare Product', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.waitForTimeout(500); // Optional delay
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.click("//input[@id='login-button']");
    await page.waitForTimeout(2000);
    let Item = await page.$$("//div[@class='inventory_item_name']");;
    let randomIndex = Math.floor(Math.random() * Item.length);
    //console.log("random index " + randomIndex);
    await Item[randomIndex].click();
    await page.waitForTimeout(2000);
    await expect(await page.locator("//button[normalize-space()='ADD TO CART']")).toBeVisible();//.not.toBeVisible();
    await expect(await page.locator("//button[normalize-space()='<- Back']")).toBeVisible();//.not.toBeVisible();

});

//npx playwright test tests/55.spec.js --headed --project chromium