import { registerHooks, testEvolve } from "@testevolve/testevolve-spark";
import { BeforeAll, Before, BeforeStep, AfterStep, After, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import * as pages from "../support/pages";

registerHooks({ BeforeAll, Before, AfterStep, After, AfterAll });
setDefaultTimeout(20 * 1000);

Before(async () => {
    Object.values(pages).forEach(page => {
        page.initialise();
    });
});

Before((event) => {
    console.log(`\n  Scenario: ${event.pickle.name}`);
});

BeforeStep((event) => {
    const testStep = (event.pickle.steps || []).find(item => item.id === event.pickleStep.id);
    console.log(`    ${testStep.text}`);
});
