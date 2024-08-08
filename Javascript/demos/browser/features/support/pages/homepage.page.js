import {PageObject, testEvolve} from '@testevolve/testevolve-spark';
import {By} from "selenium-webdriver";

export default new class Homepage extends PageObject {
  initialise() {
    this.myBanner = this.div({class: 'sqs-cookie-banner-v2-acceptWrapper'});
    this.mylink = this.a({"data-test": 'example-link'});
    this.myButton = this.button({"data-test": 'example-button'})
    this.text = this.textField({ "data-test": "example-text" });
    this.phone = this.telField({ "data-test": "example-phone" });
    this.dateTime = this.dateTimeField({ "data-test": "example-datetime" });
    this.date = this.dateField({ "data-test": "example-date" });
    this.week = this.weekField({ "data-test": "example-week" });
    this.month = this.monthField({ "data-test": "example-month" });
    this.range = this.rangeField({ "data-test": "example-range" });
    this.file = this.fileField({ "data-test": "example-file" });
    this.url = this.urlField({ name: "url" });
    this.mySearch = this.search({ "data-test": "example-search" });
    this.colour = this.colorPicker({ "data-test": "example-colour1" });
    this.password = this.passwordField({ "data-test": "example-password" });
    this.number = this.numberField({ "data-test": "example-number" });
    this.myRadio = this.radio({ "data-test": "example-radio-1" });
    this.myRadio2 = this.radio({ "data-test": "example-radio-2" });
    this.myCheckbox = this.checkbox({ "data-test": "example-checkbox" });
    this.mySelect = this.select({ "data-test": "example-select" });
    this.buttonDouble = this.button({ "data-test": "example-double" });
    this.email = this.emailField({ "data-test": "example-email" });
  }

  interactWithPageObjectsAPI = async () => {
    const retryActionOnElement = async (attempts, element, action, ...args) => {
      let counter = attempts;
    
      while (counter > 0) {
        await testEvolve.browser.scroll.to(element);
    
        try {
          if (args.length === 0) {
            await element[action]();
          } else {
            await element[action](...args);
          }
          break;
        } catch (error) {
          counter -= 1;
          if (counter <= 0) {
            throw error;
          };
        };
      };
    };

    try {
      if (await this.myBanner.isDisplayed()) {
        await this.myBanner.click();
      }
    } catch (error) {
      testEvolve.log.info('Element was no longer on the page. Continued to next step.')
    }

    await this.mylink.click();
    await this.myButton.click();
    await this.text.set('some text');

    let text;
    text = await this.text.value();
    if (text !== 'some text') {
      throw new Error(`Expected: 'some text', Actual: '${text}'`)
    };

    await this.phone.set('01268 467890');
    await this.dateTime.set('2025-02-02', '13:57');
    await this.date.set('2025-02-02')
    await this.week.set('26','2025');
    await this.month.set('12', '2025');
    await this.range.set('3')
    await this.range.set('5')
    await this.range.set('4')
    await this.file.set(`${process.cwd()}/features/support/resources/robot_picture.png`);
    await this.url.set('www.bbc.co.uk');
    await this.mySearch.set('looking for...');

    text = await this.mySearch.value()
    if (text !== 'looking for...') {
      throw new Error(`Expected: 'looking for...', Actual: '${text}'`)
    };

    await this.colour.set('#00ff41')
    await this.password.set('my secret');

    if (await this.password.value() !== 'my secret') {
      throw new Error(`Expected: 'my secret', Actual: '${await this.password.text()}'`)
    };

    await this.number.set("12345");
    await testEvolve.browser.scroll.to(this.myRadio);
    await retryActionOnElement(10, this.myRadio, 'click');
    await retryActionOnElement(10, this.myRadio2, 'click');
    await retryActionOnElement(10, this.myCheckbox, 'check');
    await this.mySelect.selectValue("Option 3")
    await this.buttonDouble.doubleClick();
    await this.email.set('test@test.com');
  }

  assertObjectChanges = async () => {
    try {
      if (await this.myBanner.isDisplayed()) {
        throw new Error("Failure - Element still displayed")
      }
    } catch (error) {
      if (error.name === "StaleElementReferenceError") {
        testEvolve.log.info("Success - Element not displayed");
      };
    };
  };
};
