Feature: Demonstration of framework

  @regression
  Scenario: Demo test for TestEvolve JS
    Given we navigate to the TestEvolve homepage
    When we enter our credentials
    Then an error message is displayed

  Scenario: Second demo test for TestEvolve JS
    Given we navigate to the TestEvolve homepage
    When we enter our credentials
    Then an error message is displayed

  Scenario: Demo failing test for TestEvolve JS
    Given we navigate to the TestEvolve homepage
    When we enter our credentials
    Then an incorrect error message is displayed
