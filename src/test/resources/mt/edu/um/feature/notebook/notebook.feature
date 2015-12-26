@all
@notebook
Feature: Notebook
  Background:
    Given I navigate to https://evernote.com
    And I login with sign in link

  @4
  Scenario: Create New Notebook
    Given I click the notebook button
    And I click the create new notebook button
    And I set the notebook title as test notebook
    And I create 1 note with title as test title a and body as test body a
    Then test title a note is under the test notebook notebook
    And delete test notebook notebook