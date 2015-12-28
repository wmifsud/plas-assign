@all
@note
Feature: Note
  Background:
    Given I navigate to https://evernote.com
    And I login with sign in link

  @2a
  Scenario: Create New Note
    Given I create 1 note with title as test title a and body as test body a
    Then the test title a is in the notes list

  @2b
  Scenario: Create New Note Log Out and In and check that note is still there
    Given I create 1 note with title as test title b and body as test body b
    And I logout
    And I navigate to https://evernote.com
    And I login with sign in link
    Then the test title b is in the notes list

  @2c
  Scenario: Shortcut functionality
    Given I create 1 note with title as test title c and body as test body c
    And I click the add to shortcut button
    And I click the shortcuts button
    Then the test title c is in the shortcuts list

  @2d
  Scenario: Table functionality
    Given I create 1 note with title as test title d and body as test body d
    And I click the table button
    And I create a 3x3 table
    Then the 3x3 table is created

  @2e
  Scenario: Sorting of notes
    Given I create 3 note with title as test sort title e and body as test sort body e
    And I click the options button
    And I select the Title (ascending) sort order
    Then the sort order should be Title in ascending sort order
    And I click the options button
    And I select the Title (descending) sort order
    Then the sort order should be Title in descending sort order
    And I click the options button
    And I select the Date Created (oldest first) sort order
    Then the sort order should be Date Created in oldest first sort order
    And I click the options button
    And I select the Date Created (newest first) sort order
    Then the sort order should be Date Created in newest first sort order