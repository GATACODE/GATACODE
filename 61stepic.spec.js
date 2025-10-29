const { test, expect } = require('@playwright/test');
//import { test, expect } from '@playwright/test';


test('firstSixCheck', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://stepik.org/");
    await page.waitForTimeout(2000); // Optional delay
    await page.click("//button[@class='woof-message__button']");
    await page.click("//body[1]/main[1]/div[1]/div[2]/div[1]/div[1]/ul[1]/li[2]/button[1]")//locator
    //await page.waitForLoadState('load');
    //await page.waitForTimeout(5000);
    //await page.waitForSelector('//span[@class="format-price"]'); // Optional delay
    await page.waitForLoadState('domcontentloaded'); // zagruzka polnogo !domdereva! html code
    await page.waitForTimeout(5000);
    const fromAllOptions = await page.$$("//span[@class='format-price']");


    let arrPrice = [];
    let total = 0;
    for (let x of fromAllOptions) {
        let value = await x.textContent();  // value = znachenije // raspechativaem text s button cherez textContent
        let valueClean = value.replace("₽", "").replace(/\s/g, "").trim(); //stroki v ""!!! replace function zameni replace(/\s/g, "").
        /*   означает, что из строки value удаляются лишние символы. Вот по шагам:

            .replace("₽", "") — удаляет символ рубля ₽ из строки.

            .replace(/\s/g, "") — удаляет все пробельные символы (включая пробелы, табуляции, переводы строк) с помощью регулярного выражения \s и флага g (глобально — т.е. все вхождения).

            .trim() — удаляет пробелы в начале и в конце строки (на всякий случай). */

        let value3 = parseInt(valueClean);//perevod stroki v chislo
        //let numeric = parseInt(valueClean);
        arrPrice.push(value3);
        //console.log(value);
        //count++
        if (arrPrice.length > 5) {
            break;
        }


    }
    console.log(arrPrice);
    await page.waitForTimeout(500);
    let summa = 0;
    for (let x = 0; x < arrPrice.length; x++) {
        summa += arrPrice[x];
    }
    console.log(summa);

});


test('firstCheck', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://stepik.org/");
    await page.waitForTimeout(2000); // Optional delay
    //await page.click("//button[@class='woof-message__button']");
    await page.click("//span[contains(text(),'Бесплатные')]")   //locator

    await page.waitForSelector("//span[contains(text(),'Бесплатные')]"); // Optional delay
    await page.click("//button[@class='button_with-loader search-form__submit']");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(5000);

    let stepicLastLink = await page.locator("//li[@class='course-cards__item'][last()]");
    const fromAllOptions = await page.$$("//span[@class='format-price format-price_free']");
    let count = 0;
    let totalElements;
    do {
        totalElements = await page.$$("//span[@class='format-price format-price_free']");
        count = totalElements.length;
        let bottomElement = await page.locator("//li[@class='course-cards__item'][last()]");
        //await bottomElement.scrollIntoViewIfNeeded();
        // Прокрутка вниз = downscroll
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await page.waitForTimeout(1000);

    }
    while (count < count.length);

    console.log(count);


});



test('heartClick', async ({ page }) => {
    await page.goto("https://stepik.org/");
    await page.waitForTimeout(2000);

    await page.click("//span[contains(text(),'Бесплатные')]");
    await page.waitForSelector("//span[contains(text(),'Бесплатные')]");
    await page.click("//button[@class='button_with-loader search-form__submit']");
    await page.waitForLoadState('domcontentloaded');//download of all code
    await page.waitForTimeout(5000);
    await page.click('(//button[@class="course-card__bookmark ember-tooltip-target"])[1]');
    await page.waitForTimeout(2000);
    const button = await page.locator('(//button[@class="course-card__bookmark ember-tooltip-target"])[1]');
    //const buttonAttribute = await button.getAttribute("type");
    //console.log(buttonAttribute);
    //const bookmarkButton = await page.locator("//button[contains(@class, 'course-card__bookmark')]");
    await expect(button).toHaveAttribute("data-toggled");
});

test('checkReviews', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://stepik.org/");
    await page.waitForTimeout(2000); // Optional delay
    await page.click("//button[@class='woof-message__button']");
    //await page.waitForLoadState('load');
    //await page.waitForTimeout(5000);
    //await page.waitForSelector('//span[@class="format-price"]'); // Optional delay
    await page.waitForLoadState('domcontentloaded'); // zagruzka polnogo !domdereva! html code
    await page.waitForTimeout(5000);
    const fromAllOptionsButton = await page.$$('//a[@class="course-card__title"]');// chatgpt locator
    let arr = [];
    for (let x = 0; x < fromAllOptionsButton.length; x++) {
        let value = await fromAllOptionsButton[x].textContent();
        arr.push(value);
        console.log(value);

        if (arr.length > 5) {
            break;
        }
    }
    console.log(arr);
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomElement = arr[randomIndex];
    //console.log(randomElement);
    await page.getByText(randomElement).click();
    await page.waitForTimeout(2000); // Optional delay

    const reviewA = await page.locator("//a[@class='course-promo-summary__reviews-count']").textContent();
    //let value = await f.textContent();  // value = znachenije
    let value2 = reviewA.replace(" отзыва", "").trim();; //otrezaem nenyznoe y menjaem na pystyjy stroky 993 отзыва
    let value3 = parseInt(value2);      // perevodim stroky v chislo
    console.log(value3);
    await page.waitForTimeout(1000);
    const reviewB = await page.locator("//div[@class='course-rating__count']").textContent();
    let number = parseInt(reviewB.replace(/[^\d]/g, '')); // perevodim stroky v chislo & Оставляем только цифры 
    console.log(number);
    await expect(value3 === number).toBeTruthy();       //  not.



});

test('checkCompanies', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://stepik.org/");
    await page.waitForTimeout(2000); // Optional delay
    await page.click("//button[@class='woof-message__button']");
    await page.waitForTimeout(2000);
    const fromAllOptions = (await page.$$("//div[@class='catalog-block-organizations__list']/a/img")).length;
    console.log(fromAllOptions);

    await expect(fromAllOptions).toBe(12);
});


test('checkAmmount', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://stepik.org/catalog/141");
    await page.waitForTimeout(2000); // Optional delay
    let name = await page.locator("//div[@class='catalog-w__description']").textContent();//.textContent pacpechatat text s HTML
    console.log(name);
    let count = 0;
    if (name.includes("Stepik")) {
        count++;
    }
    console.log(count);
});

test.only('clickCheck', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://stepik.org/course/125485/promo?search=7592099795");
    await page.waitForTimeout(2000); // Optional delay
    await page.click("//span[contains(text(),'Хочу пройти')]");
    await page.waitForTimeout(2000);
    const button = await page.locator('(//button[contains(@class, "course-promo-enrollment__wishlist-btn")])[2]');
    await expect(button).toHaveAttribute("data-toggled");
});





//click all
/* //div[@class='catalog-w__description']
//span[contains(text(),'Хочу пройти')]
//const buttonAttribute = await button.getAttribute("type");
    //console.log(buttonAttribute);
    //const bookmarkButton = await page.locator("//button[contains(@class, 'course-card__bookmark')]");
// Получаем значение атрибута
    const toggled = await bookmarkButton.getAttribute('data-toggled');
    const title = await bookmarkButton.getAttribute('title');

    console.log('data-toggled:', toggled);
    console.log('title:', title);

let count = 0;
    for (let f of fromAllOptions) {
        let value1 = await f.textContent();//schitat text kazdogo znachenija
        if (value1.includes("Бесплатно")) {  //
            //await f.click();
            count++
            console.log(value1);
        }
    }
    console.log(count);
import { test, expect } from '@playwright/test';

test('scroll to specific element', async ({ page }) => {

  await page.goto("https://www.imdb.com/chart/top/");

  let dJanagoMovieLink = await page.locator("//h3[contains(text(),'55. Django Unchained')]");

  await dJanagoMovieLink.scrollIntoViewIfNeeded();

  await dJanagoMovieLink.click();

  expect(await page.locator('h1 span').textContent()).toEqual('Django Unchained')

});

if (!isNaN(numeric)) {
        arrPrice.push(numeric);
        total += numeric;
    }*/
/*let sum = 0;
for (let x = 0; x < fromAllOptions.length; x++) {
    sum += fromAllOptions[x];
    //console.log(typeof [x]);//pokazivaet tip dannix
}
console.log(sum);
//console.log(typeof arrayNumber[x]); pokazivaet tip dannix
/*let count = 0;
for (let f of fromAllOptions) {
    let value1 = await f.textContent();//schitat text kazdogo znachenija
    if (value1.includes("AI")) {
        //await f.click();
        count++
        console.log(value1);
    }
}
console.log(count);*/



//npx playwright test tests/61stepic.spec.js --headed --project chromium

/* Задание
Зайти на сайт stepik.org
Перейти во вкладку Новые курсы
Появятся первы 6 блоков (карточек)
Посчитать общую сумму курсов у этих 6 карточек 

//let randomIndex = Math.floor(Math.random() * fromAllOptionsButton.length);
//span[contains(text(),'Бесплатные')]*/