const { test, expect } = require('@playwright/test'); //library
test('clickChooseAllTitles', async ({ page }) => {
    // Open the website
    await page.goto("https://news.ycombinator.com/");
    await page.waitForTimeout(500);
    let titles = await page.$$("//span[@class='titleline']");
    let titlesLength = titles.length;   //property without ()
    console.log(titlesLength);
    //const fromAllOptions = await page.$$('//li[@data-option-id]');//$$ xranit mnogo locatorov
    let arrayT = [];
    for (let f of titles) {
        let value = await f.textContent();//schitat text kazdogo znachenija

        arrayT.push(value);
    }
    console.log(arrayT);  // pacnechatan massiv
    /*let length = arrayP.length; poschitat vse znaki
    console.log(length);*/
    let score = await page.$$("//span[@class='score']");
    let scoreLength = score.length;   //property without ()
    console.log(scoreLength);
    let count = 0;
    let arrayScore = [];
    for (let f of score) {
        let value = await f.textContent();//schitat text kazdogo znachenija
        let value2 = value.replace("points", ""); //stroki v ""!!! replace function zameni
        let value3 = parseInt(value2);//perevod stroki v chislo
        arrayScore.push(value3);
        console.log(value3);
        count++

    }
    console.log(arrayScore);  // pacnechatan massiv

    let summa = 0;
    for (let x = 0; x < arrayScore.length; x++) {
        summa += arrayScore[x];
    }
    console.log(summa);





    await page.waitForTimeout(3000);
});
//npx playwright test tests/26.spec.js --headed --project chromium
//span[@class="titleline"]
//span[@class='score'] for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
//console.log(typeof arrayScore[f]); //pokazivaet tip dannix
//for (let x = 0; x < value2.length; summa += value2[x++]) {
//    return summa;
//}
//console.log(summa);
//console.log(` ${summa}`);