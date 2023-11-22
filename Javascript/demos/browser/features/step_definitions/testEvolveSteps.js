import { Given, When, Then } from "@cucumber/cucumber";
import { loginPage } from "../support/pages";

Given(/^we navigate to the TestEvolve homepage$/, async () => {
  await loginPage.open();
});

When(/^we enter our credentials$/, async () => {
  await loginPage.enterUsername('Dill');
  await loginPage.enterPassword('dontWorryBeHappy!');
  await loginPage.clickSubmit();
});

Then(/^an error message is displayed$/, async () => {
  await loginPage.verifyError('Incorrect organisation, username or password.');
});

Then(/^an incorrect error message is displayed$/, async () => {
  await loginPage.verifyError('Please check your details.');
});