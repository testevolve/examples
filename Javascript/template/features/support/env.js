import { registerHooks } from "@testevolve/testevolve-spark";
import { Before, AfterStep, After, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import { examplePage } from "../support/pages";

registerHooks({ Before, AfterStep, After, AfterAll });

setDefaultTimeout(20 * 1000);

const PAGES = [examplePage];
Before(() => {
  PAGES.forEach((page) => {
    page.initialise();
  });
});
