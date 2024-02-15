import { Given, When, Then } from "@cucumber/cucumber";
import { loginPage } from "../support/pages";
import { testEvolve } from "@testevolve/testevolve-spark";

Given(/^we navigate to the TestEvolve homepage$/, async () => {
  await loginPage.open();
});

When(/^we enter our credentials$/, async () => {
  await loginPage.enterUsername('Dill');
  await loginPage.enterPassword('dontWorryBeHappy!');
  await loginPage.clickSubmit();
});

Then(/^an error message is displayed$/, async () => {
  await loginPage.verifyError('Username, password or domain is incorrect. Please check your details.');
});

Then(/^an incorrect error message is displayed$/, async () => {
  await testEvolve.visualCheck('test');
  await loginPage.verifyError('Username or password is incorrect');
});
