@tag
Feature: Tag
  Background:
    Given I navigate to https://evernote.com
    And I login with sign in link

  @6
  Scenario: Tag functionality
    Given I create 3 note with title as test title a and body as test body a