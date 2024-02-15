import { Given, Then } from "@cucumber/cucumber";
import { testEvolve } from "@testevolve/testevolve-spark";
import {homepage} from "../support/pages";

Given(/^I load a page$/, async () => {
  await testEvolve.browser.get("https://www.testevolve.com/element-capture");
});

Then(/^I interact with page elements$/, async () => {
  await homepage.interactWithPageObjectsLegacy();
  await homepage.assertObjectChanges();
});

Given(/^I load a page - (.*)$/, async (page) => {
  await testEvolve.browser.get(page);
});

Given('I load a webpage', async (table) => {
  await testEvolve.browser.get(table.hashes()[0].page);
});

Given('I load a website', async (page) => {
  await testEvolve.browser.get(page);
});

Given(/^I go to a page$/, async () => {
  await testEvolve.browser.get("https://www.testevolve.com/element-capture");
});

Given(/^I go to a page - (.*)$/, async (page) => {
  await testEvolve.browser.get(page);
});

Given('I go to a webpage', async (table) => {
  await testEvolve.browser.get(table.hashes()[0].page);
});

Given('I go to a website', async (page) => {
  await testEvolve.browser.get(page);
});

Given(/^I visit a page$/, async () => {
  await testEvolve.browser.goto("https://www.testevolve.com/element-capture");
});

Given(/^I visit a page - (.*)$/, async (page) => {
  await testEvolve.browser.goto(page);
});

Given('I visit a webpage', async (table) => {
  await testEvolve.browser.goto(table.hashes()[0].page);
});

Given('I visit a website', async (page) => {
  await testEvolve.browser.goto(page);
});

Given(/^I go to a site$/, async () => {
  await testEvolve.browser.goto("https://www.testevolve.com/element-capture");
});

Given(/^I go to a site - (.*)$/, async (page) => {
  await testEvolve.browser.goto(page);
});

Given('I go to a web-page', async (table) => {
  await testEvolve.browser.goto(table.hashes()[0].page);
});

Given('I go to a web-site', async (page) => {
  await testEvolve.browser.goto(page);
});

Then(/^I interact with page elements via the Spark API$/, async () => {
  await homepage.interactWithPageObjectsAPI();
  await homepage.assertObjectChanges();
});
