@all
@trash
Feature: Trash
  Background:
    Given I navigate to https://evernote.com
    And I login with sign in link

  @5a
  Scenario: Trash functionality
    Given I click the notebook button
    And I click the trash button
    And I click the empty trash button
    And I click the notes button
    And I create 3 note with title as test title a and body as test body a
    And I delete all notes
    And I click the notebook button
    And I click the trash button
    Then the 1 test title a is in the notes list
    Then the 2 test title a is in the notes list
    Then the 3 test title a is in the notes list
    And I click the empty trash button
    Then the trash is empty

  @5b
  Scenario: Trash Restore
    Given I create 1 note with title as test title b and body as test body b
    And I delete all notes
    And I click the notebook button
    And I click the trash button
    And I restore test title b
    And I click the notes button
    Then the test title b is in the notes list
