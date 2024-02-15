@browserstack_browser @retry @parallel @local_browser @visual @axe @lighthouse @multi_type

Feature: Browser based tests

  These scenarios show you a a variety of different ways to pass data to your test at runtime.
  The page element interaction uses our training page to introduce you to the most common types
  of page objects you'll encounter in your testing.

  Scenario: Page load and element interact - data hard coded in Step Definition
    Given I open a page
    Then I interact with page elements

  Scenario Outline: Page load and element interact - with an Example
    Given I open a page - <page>
    Then I interact with page elements
    Examples:
      | page                                   |
      | https://testevolve.com/element-capture |

  Scenario: Page load and element interact - with a Step Argument
    Given I open a page - https://testevolve.com/element-capture
    Then I interact with page elements

  Scenario: Page load and element interact - with an Inline table
    Given I open a webpage
      | page                                   |
      | https://testevolve.com/element-capture |
    Then I interact with page elements

  Scenario: Page load and element interact - with a Doc String
    Given I open a website
      """
      https://www.testevolve.com/element-capture
      """
    Then I interact with page elements