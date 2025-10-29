const { test, expect } = require('@playwright/test');

test('clickSortFromMonth', async ({ page }) => {
    // Navigate to the page
    await page.goto("https://www.hotelhunter.com/hotels/Hilton-Tallinn-Park,Tallinn-p6073-h13061-details/2025-01-07/2025-01-08/2adults?psid=fJFkL_Z0za&pm=totaltaxes");

    // Accept cookies
    await page.waitForSelector('//button/div/div[text()="Accept all"]');
    await page.click('//button/div/div[text()="Accept all"]');
    console.log("Clicked on the 'Accept all' button.");

    // Wait for the filtered results to load
    await page.waitForTimeout(500);
    await page.click("//div[@aria-label='Close']//span//*[name()='svg']");

    // Fetch elements representing amenities in the results
    let amenElements = await page.$$("//div[contains(text(),'Show all 74 amenities')]");

    // Extract text content from the first element (assuming only one match)
    let result;
    if (amenElements.length > 0) {
        let textContent = await amenElements[0].textContent();
        result = textContent.match(/\d+/); // This will match and return the number as a string
        // Regex to extract digits (numbers)
        console.log(result ? result[0] : 'Not found');  // Output: "74"
    } else {
        console.log('Element not found');
        return;  // Early exit if the element is not found
    }

    // Click to show the amenities
    await page.click("//div[contains(text(),'Show all 74 amenities')]//*[name()='svg']");

    // Fetch the amenities list
    let amenities = await page.$$("//li[@class='tYfO-amenity']");
    let amenitiesLength = amenities.length;

    // Log the number of amenities
    console.log(amenitiesLength);

    // Compare the length of the amenities with the extracted number
    await expect(amenitiesLength).toBe(parseInt(result[0], 10));  // Compare with the number 74 (or whatever number was extracted)

    // Optional delay
    await page.waitForTimeout(3000);
});


//chat gpt npx playwright test tests/45.spec.js --headed --project chromium