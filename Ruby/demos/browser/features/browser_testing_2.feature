@browserstack_browser @retry @parallel @local_browser @visual @axe @lighthouse @multi_type
Feature: Browser based tests - 2

  This second feature is the same as the first but Features and Scenarios are labelled differently.
  We have included these so you can experiment with multi-threaded test execution across Features and Scenarios.

  Scenario: Page load and element interact - data hard coded in Step Definition - 2
    Given I go to a page
    Then I interact with page elements

  Scenario Outline: Page load and element interact - with an Example - 2
    Given I go to a page - <page>
    Then I interact with page elements
    Examples:
      | page                                   |
      | https://testevolve.com/element-capture |

  Scenario: Page load and element interact - with a Step Argument - 2
    Given I go to a page - https://testevolve.com/element-capture
    Then I interact with page elements

  Scenario: Page load and element interact - with an Inline table - 2
    Given I go to a webpage
      | page                                   |
      | https://testevolve.com/element-capture |
    Then I interact with page elements

  Scenario: Page load and element interact - with a Doc String - 2
    Given I go to a website
      """
       https://www.testevolve.com/element-capture
      """
    Then I interact with page elements