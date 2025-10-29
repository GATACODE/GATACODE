const { test, expect } = require('@playwright/test');

test.skip('clickCheckPassword', async ({ page }) => {
    // Open the website
    await page.goto("https://www.roboform.com/password-generator");
    await page.click("//span[@class='got-it']");
    await page.waitForTimeout(2000);
    let numberP = await page.locator("#number-of-characters").inputValue();
    console.log(numberP);

    let symbols = await page.$$("//ul/li[@class='password-letter']");
    let symbolsLength = symbols.length;   //property without ()
    console.log(symbolsLength);

    expect(symbolsLength == numberP).toBeTruthy();      // 0 prisvaivanie; == sravnivanije
    await page.locator("//label[normalize-space()='a - z']").setChecked(false); // "true" to click "false" uncheck
    await page.locator("//label[normalize-space()='0 - 9']").setChecked(false);
    await page.locator("//label[@for='check-character']//span").setChecked(false);
    await page.click("//button[@id='button-password']");
    await page.waitForTimeout(2000);
    let arraySymbols = [];
    let symbolsBig = await page.$$("//ul/li[@class='password-letter']");
    for (let f of symbolsBig) {
        let value = await f.textContent();//schitat text kazdogo znachenija

        arraySymbols.push(value);
    }
    console.log(arraySymbols);  // pacnechatan massiv
    const lettersArrString = arraySymbols.join('');// sojedinenie znachenija massiva v 1 stroky v metod join peredaem razdelitel mozet bit zapjataja ili ljuboi znak mezdy
    console.log(lettersArrString);
    const regex = /^[A-Z]+$/;           // regularnoe virazenije proverjaet chto stroka soderzit bolshije symbols
    /*if (regex.test(lettersArrString)) {      //true otritzanije=! regex.test...
        console.log("A-Z");
    }
    else {
        console.log("Not A-Z");
    }*/
    await expect(regex.test(lettersArrString)).toBeTruthy();
    await page.waitForTimeout(3000);
});
test('clickCheckPassword1', async ({ page }) => {
    // Open the website
    await page.goto("https://www.roboform.com/password-generator");
    await page.click("//span[@class='got-it']");
    await page.waitForTimeout(2000);
    // Define symbols array
    let arrSymb = ["-", "!", ")", "+", "@", "$", "%"];
    let randomSymb = arrSymb;
    // Generate a string of 3 random symbols
    let count = 3;
    let result = "";

    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * arrSymb.length)
        result += arrSymb[randomIndex];
    }
    console.log("Generated Symbols:", result);

    // Fill the input field with the generated symbols
    await page.locator("//input[@id='symbols-character']").fill(result);// Fill it with random element

    await page.waitForTimeout(3000);
});


//await page.locator("//input[@id='symbols-character']").fill(randomElement);// Fill it with random element
//npx playwright test tests/29.spec.js --headed --project chromium
//ul/li[@class="password-letter"]