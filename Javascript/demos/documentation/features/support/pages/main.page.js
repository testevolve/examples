import { PageObject } from "@testevolve/testevolve-spark";

export default new class MainPage extends PageObject {

  initialise() {
    this.introButton = this.element(() => ({ css: '[href="/docs/intro"]' }));
  };

  async open() {
    await this.openPath('https://testevolve.github.io');
  };

  async clickIntroButton() {
    await this.introButton().click();
  };
};
