import { PageObject } from "@testevolve/testevolve-spark";

export default new class ExamplePage extends PageObject {
    
  initialise() {
      this.usernameInput = this.element(() => ({ name: 'username' }));
      this.passwordInput = this.element(() => ({ name: 'password' }));
  };

  async enterUsername(username) {
    await this.usernameInput().sendKeys(username)
  };
};