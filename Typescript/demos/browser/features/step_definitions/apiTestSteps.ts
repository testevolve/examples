import {Given, Then} from "@cucumber/cucumber";
import * as apiHelper from '../support/api/apiHelper';

Given(/^I search for news articles that reference '(.*)'$/, async function (data) {
  this.searchTerm = data
  this.results = await apiHelper.findArticles(this.searchTerm);
});

Then(/^I receive results that are relevant to my search term$/, async function () {
  apiHelper.exampleDataOutputsFromResponse(this.results);
  apiHelper.assertResultsMatch(this.results, this.searchTerm);
});
