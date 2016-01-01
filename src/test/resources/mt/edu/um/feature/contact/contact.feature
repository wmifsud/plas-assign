@android
Feature: Contact
  @1
  Scenario: Create new contact
    Given I select the create new contact icon
    And I enter testing123 as Name
    And I enter w@w.com as Email
    And I enter 35679797979 as Phone
    And I enter 35621212121 as Phone
    And I select the navigate up icon
    Then testing123 is under contact name
    Then 35679797979 is under Mobile
    Then 35621212121 is under Home
    Then w@w.com is under Home
    Then testing123 is under All contacts



#  Create a contact with a name, mobile number, home number and email address.
#  Upon saving, ensure that the info saved is the same as what you entered and that
#  the contact appears under All Contacts.