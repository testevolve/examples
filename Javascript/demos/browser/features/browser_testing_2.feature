@examples
Feature: Browser based tests - 2

  This second feature is the same as the first but Features and Scenarios are labelled differently.
  We have included these so you can experiment with multi-threaded test execution across Features and Scenarios.

  Scenario: Page load and element interact - data hard coded in Step Definition - using the Spark API and Page Object Model - 2
    Given I go to a site
    Then I interact with page elements via the Spark API

  Scenario Outline: Page load and element interact - with an Example - using the Spark API and Page Object Model - 2
    Given I go to a site - <page>
    Then I interact with page elements via the Spark API
    Examples:
      | page                                   |
      | https://testevolve.com/element-capture |

  Scenario: Page load and element interact - with a Step Argument - using the Spark API and Page Object Model - 2
    Given I go to a site - https://testevolve.com/element-capture
    Then I interact with page elements via the Spark API

  Scenario: Page load and element interact - with an Inline table - using the Spark API and Page Object Model - 2
    Given I go to a web-page
      | page                                   |
      | https://testevolve.com/element-capture |
    Then I interact with page elements via the Spark API

  Scenario: Page load and element interact - with a Doc String - using the Spark API and Page Object Model - 2
    Given I go to a web-site
      """
      https://www.testevolve.com/element-capture
      """
    Then I interact with page elements via the Spark API