import { registerHooks } from "@testevolve/testevolve-spark";
import { BeforeAll, Before, AfterStep, After, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import * as pages from "./pages";

registerHooks({ BeforeAll, Before, AfterStep, After, AfterAll });
setDefaultTimeout(20 * 1000);

Before(async () => {
    Object.values(pages).forEach(page => page.initialise());
});
