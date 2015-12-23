@search
Feature: Search
  Background:
    Given I navigate to https://evernote.com
    And I login with sign in link

  @3a
  Scenario: Search for a note
    Given I create 3 note with title as test title a and body as test body a
    And I click the search button
    And I search for test title a
    Then the 1 test title a is in the notes list