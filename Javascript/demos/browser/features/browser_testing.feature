Feature: Browser based tests

  These scenarios show you a a variety of different ways to pass data to your test at runtime.
  The page element interaction uses our training page to introduce you to the most common types
  of page objects you'll encounter in your testing.

  @legacy_examples
  Scenario: Page load and element interact - data hard coded in Step Definition
    Given I load a page
    Then I interact with page elements

  @legacy_examples
  Scenario Outline: Page load and element interact - with an Example
    Given I load a page - <page>
    Then I interact with page elements
    Examples:
      | page                                   |
      | https://testevolve.com/element-capture |

  @legacy_examples
  Scenario: Page load and element interact - with a Step Argument
    Given I load a page - https://testevolve.com/element-capture
    Then I interact with page elements

  @legacy_examples
  Scenario: Page load and element interact - with an Inline table
    Given I load a webpage
      | page                                   |
      | https://testevolve.com/element-capture |
    Then I interact with page elements

  @legacy_examples
  Scenario: Page load and element interact - with a Doc String
    Given I load a website
      """
      https://www.testevolve.com/element-capture
      """
    Then I interact with page elements

  @examples
  Scenario: Page load and element interact - data hard coded in Step Definition - using the Spark API and Page Object Model
    Given I visit a page
    Then I interact with page elements via the Spark API

  @examples
  Scenario Outline: Page load and element interact - with an Example - using the Spark API and Page Object Model
    Given I visit a page - <page>
    Then I interact with page elements via the Spark API
    Examples:
      | page                                   |
      | https://testevolve.com/element-capture |

  @examples
  Scenario: Page load and element interact - with a Step Argument - using the Spark API and Page Object Model
    Given I visit a page - https://testevolve.com/element-capture
    Then I interact with page elements via the Spark API

  @examples
  Scenario: Page load and element interact - with an Inline table - using the Spark API and Page Object Model
    Given I visit a webpage
      | page                                   |
      | https://testevolve.com/element-capture |
    Then I interact with page elements via the Spark API

  @examples
  Scenario: Page load and element interact - with a Doc String - using the Spark API and Page Object Model
    Given I visit a website
      """
      https://www.testevolve.com/element-capture
      """
    Then I interact with page elements via the Spark API