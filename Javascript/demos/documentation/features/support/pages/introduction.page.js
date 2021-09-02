import { PageObject } from "@testevolve/testevolve-spark";

export default new class IntroPage extends PageObject {

  initialise() {
    this.introTitle = this.element(() => ({ tagName: "header" }));
  };

  async verifyIntroPage() {
    try {
      const text = await this.introTitle().getText();
      if (text !== "Intro") throw new Error("Introduction header not found.")
    } catch(err) {
      throw new Error('Error finding element introTitle')
    }
  };
};
