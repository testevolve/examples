import { PageObject } from "@testevolve/testevolve-spark";

export default new class LoginPage extends PageObject {

  initialise() {
    this.usernameInput = this.element(username => ({ name: username }));
    this.passwordInput = this.element(password => ({ name: password }));
    this.submitButton = this.element(() => ({ css: "[data-test=\'signIn-button\']" }));
    this.submitError = this.element(() => ({ css: "[class=\'sc-gLDzan hryflJ\']" }));
  };

  async open() {
    await this.openPath('https://testevolve.testevolve.io/login');
  };

  async enterUsername(value) {
    await this.usernameInput("username").sendKeys(value);
  };

  async enterPassword(value) {
    await this.passwordInput("password").sendKeys(value);
  };

  async clickSubmit() {
    await this.submitButton().click();
  };

  async verifyError(error) {
    let errormsg = await this.submitError().getText();
    if(errormsg === error) return true;
    else { throw new Error('Submit error was not present when it should be') };
  };
};
