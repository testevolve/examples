import { registerHooks } from "@testevolve/te-javascript-framework";
import { Before, AfterStep, After, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import loginPage from "../support/pages/login.page.js";

registerHooks({ Before, AfterStep, After, AfterAll });

// TODO:cucumber timeout, we cant set this from within the project or te, this is only needed during the browserstack integration
// due to the tests taking slightly longer to run (5 seconds is the default timeout used by cucumber)
setDefaultTimeout(20 * 1000);

const PAGES = [loginPage];
Before(async () => {
  PAGES.forEach((page) => {
    page.initialise();
  });
});
