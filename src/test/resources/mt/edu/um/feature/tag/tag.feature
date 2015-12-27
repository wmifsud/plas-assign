@all
@tag
Feature: Tag
  Background:
    Given I navigate to https://evernote.com
    And I login with sign in link

  @6
  Scenario: Tag functionality
    Given I create 3 note with title as test title a and body as test body a
    And I assign tag to 1 test title a
    And I assign tag to 2 test title a
    And I click the tag button
    And I click on tag from the tag menu
    Then the 1 test title a is in the notes list
    Then the 2 test title a is in the notes list
    And I click the tag button
    And I delete tag named tag