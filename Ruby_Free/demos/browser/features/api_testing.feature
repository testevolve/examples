Feature: Example API Test Collection using the Chronicling America Open API

  @example_api_test
  Scenario: Users request returns articles that reference a particular location
    Given I search for news articles that reference 'Michigan'
    Then I receive results that are relevant to my search term
