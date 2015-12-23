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
#    And I click the confirm create notebook button

#  @notebook
#  Scenario: Delete notebook
#    Given I want to delete notebook