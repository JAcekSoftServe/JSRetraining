const {Builder, By, until, Actions} = require('selenium-webdriver');

// **************************************** 1 ****************************************

(async function testState() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        const dropdown = await driver.findElement(By.id('dropdown'));
        const options = await dropdown.findElements(By.tagName('option'));

        const optionOne = await options[0].isSelected();
        console.log(`Option 1: ${optionOne ? "Active" : "Inactive"}`);
        if (optionOne) {
            throw new Error("Option 1 should be inactive");
        }

        const optionTwo = await options[1].isSelected();
        console.log(`Option 2: ${optionTwo ? "Active" : "Inactive"}` );
        if (!optionTwo) {
            throw new Error("Option 2 shuold be active")
        }

        console.log("Test passed - Dropdown options have expected state.");
    }catch(error){
        console.error(`Test Failes ${error.message}`);
    }finally {
        await driver.quit();
    }
    
})();

// ************************************* 2 ******************************************

(async function hoverOverElement(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('http://the-internet.herokuapp.com/hovers');

        const userAvatar = await driver.findElement(By.css('.figure:nth-child(3)'));

        const action = driver.actions({ async: true });
        await action.move({ origin: userAvatar }).perform();

        const userText = await driver.wait(
            until.elementLocated(By.xpath("//div[@class='figcaption']/h5[text()='name: user1']")), 5000
        );

        const text = await userText.getText();

        if (text === "name: user1") {
            console.log("Test passed - Text 'name: user1' appeared on the hover over the element")
        } else {
            throw new Error("Test failed: incorrect text or no text found on hover over");
        }
    } catch (error) {
        console.error(`Test Failes ${error.message}`)
    } finally {
        await driver.quit()
    }
})();

// ************************************** 3 ***************************************

(async function fillTheForm() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://formy-project.herokuapp.com/form');

        await driver.findElement(By.id('first-name')).sendKeys('Jerzy');

        await driver.findElement(By.id('last-name')).sendKeys('Wichura');

        await driver.findElement(By.id('job-title')).sendKeys('Digger');

        await driver.findElement(By.id('radio-button-1')).click();

        await driver.findElement(By.id('checkbox-1')).click();
        
        //*[@id="checkbox-1"]

        // const maleCheckbox = await driver.findElement(By.xpath("//label[contains(text(), ' Male ')]")); <-- could not find
        // await maleCheckbox.click();

        const dropdown = await driver.findElement(By.id('select-menu'));
        await dropdown.click();
        await driver.findElement(By.css("option[value='2'")).click();

        await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');

        await driver.findElement(By.css('.btn.btn-lg.btn-primary')).click();

        const successMessage = await driver.wait(
            until.elementLocated(By.css('.alert.alert-success')), 5000
        );

        const successText = await successMessage.getText();

        console.log(`Displayed message: "${successText}"`);

        if (successText === 'The form was successfully submitted!') {
            console.log("Test passed - the form was successfully submited.");
        } else {
            throw new Error("Test faile - Success message doesn't match or was not received.")
        }

    } catch (error) {
        console.error(`Test failed: ${error.message}`)
    } finally {
        await driver.quit();
    }
})();

// ****************************************** 4 **************************************

(async function sortingTable() {
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('http://the-internet.herokuapp.com/tables');

        const scndTable = await driver.findElement(By.id('table2'));
        await driver.executeScript('arguments[0].scrollIntoView(true);', scndTable);

        const dueHeader = await scndTable.findElement(By.css('.dues'));
        // await dueHeader.click();

        await driver.actions().move({origin: dueHeader}).click().perform();

        // await driver.wait(until.elementLocated(By.css("span.headerSortDown")), 5000);

        const dueCells = await scndTable.findElements(By.css('tbody tr td:nth-child(4)'));

        const dueVal = [];
        for(let cell of dueCells) {
            const text = await cell.getText();
            const numericVal = parseFloat(text.replace('$', '').replace(',', '').trim());
            dueVal.push(numericVal);
        }

        //*[@id="table2"]/tbody/tr[1]/td[4]

        console.log("Due values after sorting:", dueVal);

        const isSorted = dueVal.every((val, i, arr) => i === 0 || arr[i - 1] <= val);

        if (isSorted) {
            console.log("Test passed - the 'Due' column is sorted in ascending order");
        } else {
            throw new Error("Test failed - the 'Due' column is not sorted.")
        }
    } catch (error) {
        console.error(`Test Failed ${error.message}`);
    } finally {
        driver.quit();
    }
})();