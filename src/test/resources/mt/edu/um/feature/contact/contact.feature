@android
Feature: Contact
  Scenario: Create new contact
    Given I select create new contact icon
    And I enter testing123 as Name
    And I enter w@w.com as Email
    And I enter 35679797979 as Phone
    And I enter 35621212121 as Phone
    And I select navigate up icon
    Then testing123 is under contact name
    Then 35679797979 is under Mobile
    Then 35621212121 is under Home
    Then w@w.com is under Home
    Then testing123 is under All contacts

  Scenario: Search for contact
    Given I select create new contact icon
    And I enter testing123 as Name
    And I enter w@w.com as Email
    And I enter 35679797979 as Phone
    And I enter 35621212121 as Phone
    And I select navigate up icon
    Then testing123 is under All contacts
    And I select testing123 contact
    And I select edit icon
    And I change 35679797979 to 35699999999
    And I change testing123 to test456ing
    And I select navigate up icon
    Then test456ing is under contact name
    Then 35699999999 is under Mobile

  Scenario: Favorites functionality
    Given I check that there are No favorites.
    And I select create new contact icon
    And I enter testing123 as Name
    And I enter w@w.com as Email
    And I enter 35679797979 as Phone
    And I enter 35621212121 as Phone
    And I select navigate up icon
    And I select favorites icon
    Then testing123 is under Favorites