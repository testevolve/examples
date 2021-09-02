import { Given, When, Then } from "@cucumber/cucumber";
import { mainPage, introPage } from "../support/pages";

Given("we navigate to the TestEvolve documentation homepage", async () => {
  await mainPage.open();
});

When("we click on the introduction button", async () => {
  await mainPage.clickIntroButton();
});

Then("we are taken to the documentation intro", async () => {
  await introPage.verifyIntroPage();
  await testEvolve.visualCheck('documentation-intro')
});
