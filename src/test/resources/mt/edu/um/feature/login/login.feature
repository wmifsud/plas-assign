@login
Feature: Login
  @1a
  Scenario: Login from sign in button
    Given I navigate to https://evernote.com
    When I click on the sign in link from sign in button
    And I enter waylonmifsud@gmail.com as emailaddress
    And I enter 3v3rn0t3 as password
    And I click the sign up button
    Then I am logged in

  @1a
  Scenario: Login from header menu
    Given I navigate to https://evernote.com/?var=1
    When I click on the sign in link from header menu
    And I enter waylonmifsud@gmail.com as emailaddress
    And I enter 3v3rn0t3 as password
    And I click the sign up button
    Then I am logged in

  @1a
  Scenario: Login from header menu sign in link
    Given I navigate to https://evernote.com/?var=2
    When I click on the sign in link from sign in header button
    And I enter waylonmifsud@gmail.com as emailaddress
    And I enter 3v3rn0t3 as password
    And I click the sign up button
    Then I am logged in

  @1b
  Scenario: Login with no credentials
    Given I navigate to https://evernote.com
    When I click on the sign in link from sign in button
    And I click the sign up button
    Then the error message specifies that This is a required field.

  @1c
  Scenario Outline: Login with incorrect credentials
    Given I navigate to https://evernote.com
    When I click on the sign in link from sign in button
    And I enter <username> as emailaddress
    And I enter <password> as password
    And I click the sign up button
    Then the error message specifies that Incorrect username and/or password.
  Examples:
    | username               | password |
    | www@www.com            | wwwggg   |
    | a@ggg.co.uk            | aaa      |
    | xyz@abc.it             | rabbit   |
    | def@qwe.de             | horses   |
    | gblabcref@rabobank.fr  | qwerty   |