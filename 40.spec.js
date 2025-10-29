const { test, expect } = require('@playwright/test');
test('clickSort', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-01-01/2025-01-02/2adults;map?ucs=1bj5om6&sort=rank_a");
    await page.waitForTimeout(500);
    await page.click('//button/div/div[text()="Accept all"]');

    await page.waitForSelector("//div[@class='S0Ps-resultInner']");
    let blocks = await page.$$("//div[@class='S0Ps-resultInner']");
    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength);

    await page.click("//div[@role='combobox']/span");

    const fromAllOptions = await page.$$("//div[@class='Tf9o-text-label']//span[@class='Tf9o-title']"); //$$ xranit mnogo locatorov
    for (let f of fromAllOptions) {
        let value = await f.textContent();
        //console.log(value);
        if (value == "Price (high to low)") {
            await f.click();
            break;
        }
    }

    await page.waitForTimeout(1000);
    let price = await page.$$("//div[@class='c1XBO']"); //locator of 14 prices   div[@class='zV27-price-section']
    let hotelPriceLength = price.length;
    console.log(typeof hotelPriceLength);
    console.log(` ${hotelPriceLength}`);

    let arrayOfPrices = [];
    for (let a of price) {
        let value = await a.textContent();//schitat text kazdogo znachenija
        arrayOfPrices.push(value);
    }
    console.log(arrayOfPrices);  // pacnechatan massiv
    arrayOfPrices.shift();      //remove first element from array
    console.log(arrayOfPrices);


    let isSorted = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arrayOfPrices.length; x++) {
        let current = arrayOfPrices[x];      // [X] peremennaja ot x
        let prev = arrayOfPrices[x - 1];       // prededyscheje chislo
        if (prev < current) {               // dlja proverki pomenjai znak <
            isSorted = false;
            break;
        }
    }
    await expect(isSorted).toBeTruthy();


    await page.waitForTimeout(3000);
});


test('sortByReview', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-01-01/2025-01-02/2adults;map?ucs=1bj5om6&sort=rank_a");
    await page.waitForTimeout(500);
    await page.click('//button/div/div[text()="Accept all"]');

    await page.click("//div[@role='button']/div[contains(text(),'Review score')]");
    await page.click("//div[contains(text(),'7+')]");
    await page.click("//div[contains(text(),'Apply')]");

    /*const fromAllOptions = await page.$$("//div[@class='wdjx wdjx-positive wdjx-mod-rating-condensed']"); //$$ xranit mnogo locatorov
    for (let f of fromAllOptions) {
        let value = await f.textContent();
        //console.log(value);
        if (value == "Distance") {
            await f.click();
            break;
        }
    }*/

    await page.waitForTimeout(1000);
    let review = await page.$$("//div[@class='wdjx wdjx-positive wdjx-mod-rating-condensed']"); //locator of 14 prices
    let reviewLength = review.length;
    console.log(typeof reviewLength);
    console.log(` ${reviewLength}`);
    await page.waitForTimeout(1000);
    let arrayOfReview = [];
    for (let a of review) {
        let value = await a.textContent();//schitat text kazdogo znachenija
        arrayOfReview.push(value);
    }
    console.log(arrayOfReview);  // pacnechatan massiv
    /*arrayOfDistance.shift();      //remove first element from array
    console.log(arrayOfDistance);*/


    let areGreater = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arrayOfReview.length; x++) {
        if (arrayOfReview[x] < 7) {               // dlja proverki pomenjai znak <
            areGreater = false;
            break;
        }
    }
    await expect(areGreater).toBeTruthy();


    await page.waitForTimeout(3000);
});

test('sortBrand', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-01-01/2025-01-02/2adults;map?ucs=1bj5om6&sort=distance_a&attempt=1&lastms=1734985073225");
    await page.waitForTimeout(500);
    await page.click('//button/div/div[text()="Accept all"]');

    await page.waitForTimeout(500);
    let brand = await page.$$("//div//div//img[@alt='Agoda.com']"); //locator of 14 prices
    let brandLength = brand.length;
    console.log(typeof brandLength);
    console.log(brandLength);
    /*await page.waitForTimeout(1000);
    let arrayOfReview = [];
    for (let a of review) {
        let value = await a.textContent();//schitat text kazdogo znachenija
        arrayOfReview.push(value);
    }
    console.log(arrayOfReview);  // pacnechatan massiv
    /*arrayOfDistance.shift();      //remove first element from array
    console.log(arrayOfDistance);


    let areGreater = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arrayOfReview.length; x++) {
        if (arrayOfReview[x] < 7) {               // dlja proverki pomenjai znak <
            areGreater = false;
            break;
        }
    }
    await expect(areGreater).toBeTruthy();*/


    await page.waitForTimeout(3000);
});

test('sortBreakfast', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-01-01/2025-01-02/2adults;map?ucs=1bj5om6&sort=distance_a&attempt=1&lastms=1734985073225");
    await page.waitForTimeout(500);
    await page.click('//button/div/div[text()="Accept all"]');

    await page.waitForTimeout(500);
    let breakfast = await page.$$("//div[@class='BNDX BNDX-mod-presentation-default'][normalize-space()='Free breakfast']"); //locator of 14 prices
    let breakfastLength = breakfast.length;
    console.log(typeof breakfastLength);
    console.log(breakfastLength);


    await page.waitForTimeout(3000);
});

test('sortByClass', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-01-01/2025-01-02/2adults;map?ucs=1bj5om6&sort=rank_a");
    await page.waitForTimeout(500);
    await page.click('//button/div/div[text()="Accept all"]');

    await page.click("//div[contains(text(),'Hotel class')]");
    await page.click("//div[@class='HNDy-label'][normalize-space()='4']");
    await page.click("//div[contains(text(),'Apply')]");

    /*const fromAllOptions = await page.$$("//div[@class='wdjx wdjx-positive wdjx-mod-rating-condensed']"); //$$ xranit mnogo locatorov
    for (let f of fromAllOptions) {
        let value = await f.textContent();
        //console.log(value);
        if (value == "Distance") {
            await f.click();
            break;
        }
    }*/

    await page.waitForTimeout(1000);
    let hotelClass = await page.$$("//span[@class='Ius0']"); //locator of 14 prices
    let classLength = hotelClass.length;
    //console.log(typeof classLength);
    console.log(` ${classLength}`);
    await page.waitForTimeout(1000);
    let arrayOfClass = [];
    for (let a of hotelClass) {
        let value = await a.textContent();//schitat text kazdogo znachenija
        let value2 = value.replace(" stars", "").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number
        arrayOfClass.push(value3);
        console.log(typeof value3);
        console.log(` ${value3}`);
    }

    console.log(arrayOfClass);  // pacnechatan massiv
    /*arrayOfDistance.shift();      //remove first element from array
    console.log(arrayOfDistance);*/
    /*let arrayOfPrices = [];
    for (let starsC of price) {
        let value = await starsC.textContent();
        let value2 = value.replace("", " stars").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number
        arrayOfPrices.push(value3);
        console.log(typeof value3);
        console.log(` ${value3}`);
    }
    console.log(arrayOfPrices);*/


    let areGreater = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arrayOfClass.length; x++) {
        if (arrayOfClass[x] < 4) {               // dlja proverki pomenjai znak <
            areGreater = false;
            break;
        }
    }
    await expect(areGreater).toBeTruthy();


    await page.waitForTimeout(3000);
});

test.only('printProviders', async ({ page }) => {
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn,Estonia-p6073-h13061/2025-01-01/2025-01-02/2adults;map?ucs=1bj5om6&sort=rank_a");
    await page.waitForTimeout(500);
    await page.click('//button/div/div[text()="Accept all"]');

    await page.click("//a[normalize-space()='Hilton Tallinn Park']");

    await page.waitForTimeout(3000);
    let providers = await page.$$("//div[@class='c5l3f-col c5l3f-logo-col']//img"); //locator of 14 prices
    let providersLength = providers.length;
    //console.log(typeof classLength);
    console.log(` ${providersLength}`);
    await page.waitForTimeout(1000);
    let arrayOfProviders = [];
    for (let a of providers) {
        let value = await a.getAttribute("alt");//schitat text kazdogo znachenija
        //let value3 = parseInt(value); // Convert string to number
        arrayOfProviders.push(value);
        //console.log(typeof value);
        //console.log(` ${value3}`);
    }

    console.log(arrayOfProviders);  // pacnechatan massiv
    /*let blocks = await page.$$("//a[@class='ks-new-product-name']");
    let blocksLength = blocks.length;   //property without ()
    console.log(blocksLength);
    let arrayOfBlocks = [];
    for (let firstB of blocks) {
        let value = await firstB.getAttribute("href");
        console.log(value);
        arrayOfBlocks.push(value);
    }
    console.log(arrayOfBlocks);
    /*arrayOfDistance.shift();      //remove first element from array
    console.log(arrayOfDistance);
    /*let arrayOfPrices = [];
    for (let starsC of price) {
        let value = await starsC.textContent();
        let value2 = value.replace("", " stars").trim(); // Remove "points" and trim
        let value3 = parseInt(value2); // Convert string to number
        arrayOfPrices.push(value3);
        console.log(typeof value3);
        console.log(` ${value3}`);
    }
    console.log(arrayOfPrices);*/


    /*let areGreater = true;        //boolean or flag :"true or false"
    for (let x = 0; x < arrayOfClass.length; x++) {
        if (arrayOfClass[x] < 4) {               // dlja proverki pomenjai znak <
            areGreater = false;
            break;
        }
    }
    await expect(areGreater).toBeTruthy();*/


    await page.waitForTimeout(3000);
});

//npx playwright test tests/40.spec.js --headed --project chromium
//div[@class='BNDX BNDX-mod-presentation-default'][normalize-space()='Free breakfast']