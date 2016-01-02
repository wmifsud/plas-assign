$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contact/contact.feature");
formatter.feature({
  "line": 2,
  "name": "Contact",
  "description": "",
  "id": "contact",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@android"
    }
  ]
});
formatter.before({
  "duration": 2725870375,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Create new contact",
  "description": "",
  "id": "contact;create-new-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I select create new contact icon",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter testing123 as Name",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter w@w.com as Email",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter 35679797979 as Phone",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter 35621212121 as Phone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select navigate up icon",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "testing123 is set to contact name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "35679797979 is set to Mobile",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "35621212121 is set to Home",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "w@w.com is set to Home",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "testing123 is set to All contacts",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "create new contact",
      "offset": 9
    },
    {
      "val": "icon",
      "offset": 28
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 1967350914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 8
    },
    {
      "val": "Name",
      "offset": 22
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 7262565977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "w@w.com",
      "offset": 8
    },
    {
      "val": "Email",
      "offset": 19
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 6832671733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35679797979",
      "offset": 8
    },
    {
      "val": "Phone",
      "offset": 23
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 7408859588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35621212121",
      "offset": 8
    },
    {
      "val": "Phone",
      "offset": 23
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 7467846064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "navigate up",
      "offset": 9
    },
    {
      "val": "icon",
      "offset": 21
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 1509853257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 0
    },
    {
      "val": "contact name",
      "offset": 21
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 4072466080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35679797979",
      "offset": 0
    },
    {
      "val": "Mobile",
      "offset": 22
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 123888705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35621212121",
      "offset": 0
    },
    {
      "val": "Home",
      "offset": 22
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 170300618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "w@w.com",
      "offset": 0
    },
    {
      "val": "Home",
      "offset": 18
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 207503746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 0
    },
    {
      "val": "All contacts",
      "offset": 21
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 7174794519,
  "status": "passed"
});
formatter.after({
  "duration": 451375874,
  "status": "passed"
});
formatter.after({
  "duration": 14797281319,
  "status": "passed"
});
formatter.before({
  "duration": 2024284013,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search for contact",
  "description": "",
  "id": "contact;search-for-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I select create new contact icon",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter testing123 as Name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter w@w.com as Email",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter 35679797979 as Phone",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter 35621212121 as Phone",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select navigate up icon",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "testing123 is set to All contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I select testing123 contact",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select edit icon",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I change 35679797979 to 35699999999",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I change testing123 to test456ing",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select navigate up icon",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "test456ing is set to contact name",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "35699999999 is set to Mobile",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "create new contact",
      "offset": 9
    },
    {
      "val": "icon",
      "offset": 28
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 2091380816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 8
    },
    {
      "val": "Name",
      "offset": 22
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 6874415745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "w@w.com",
      "offset": 8
    },
    {
      "val": "Email",
      "offset": 19
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 7384411317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35679797979",
      "offset": 8
    },
    {
      "val": "Phone",
      "offset": 23
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 7427713731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35621212121",
      "offset": 8
    },
    {
      "val": "Phone",
      "offset": 23
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 7783460087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "navigate up",
      "offset": 9
    },
    {
      "val": "icon",
      "offset": 21
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 1508969128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 0
    },
    {
      "val": "All contacts",
      "offset": 21
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 10849847112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 9
    },
    {
      "val": "contact",
      "offset": 20
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 233052170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 9
    },
    {
      "val": "icon",
      "offset": 14
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 4575198216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35679797979",
      "offset": 9
    },
    {
      "val": "35699999999",
      "offset": 24
    }
  ],
  "location": "Contact.updateContactText(String,String)"
});
formatter.result({
  "duration": 14632551726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 9
    },
    {
      "val": "test456ing",
      "offset": 23
    }
  ],
  "location": "Contact.updateContactText(String,String)"
});
formatter.result({
  "duration": 14395722816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "navigate up",
      "offset": 9
    },
    {
      "val": "icon",
      "offset": 21
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 954137336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test456ing",
      "offset": 0
    },
    {
      "val": "contact name",
      "offset": 21
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 7844353823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35699999999",
      "offset": 0
    },
    {
      "val": "Mobile",
      "offset": 22
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 114257906,
  "status": "passed"
});
formatter.after({
  "duration": 437674262,
  "status": "passed"
});
formatter.after({
  "duration": 14670806103,
  "status": "passed"
});
formatter.before({
  "duration": 1938830406,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Favorites functionality",
  "description": "",
  "id": "contact;favorites-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I check that there are No favorites.",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I select create new contact icon",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter testing123 as Name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter w@w.com as Email",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter 35679797979 as Phone",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter 35621212121 as Phone",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select navigate up icon",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select favorites icon",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "testing123 is set to Favorites",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "No favorites.",
      "offset": 23
    }
  ],
  "location": "Contact.noFavorites(String)"
});
formatter.result({
  "duration": 5556002002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create new contact",
      "offset": 9
    },
    {
      "val": "icon",
      "offset": 28
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 781625290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 8
    },
    {
      "val": "Name",
      "offset": 22
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 6749673466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "w@w.com",
      "offset": 8
    },
    {
      "val": "Email",
      "offset": 19
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 7736763128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35679797979",
      "offset": 8
    },
    {
      "val": "Phone",
      "offset": 23
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 7725502227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35621212121",
      "offset": 8
    },
    {
      "val": "Phone",
      "offset": 23
    }
  ],
  "location": "Contact.placeContactText(String,String)"
});
formatter.result({
  "duration": 7019991265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "navigate up",
      "offset": 9
    },
    {
      "val": "icon",
      "offset": 21
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 1497299398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "favorites",
      "offset": 9
    },
    {
      "val": "icon",
      "offset": 19
    }
  ],
  "location": "Contact.selectContactIcon(String,String)"
});
formatter.result({
  "duration": 3723028499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing123",
      "offset": 0
    },
    {
      "val": "Favorites",
      "offset": 21
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 7778966502,
  "status": "passed"
});
formatter.after({
  "duration": 474342338,
  "status": "passed"
});
formatter.after({
  "duration": 12766210014,
  "status": "passed"
});
});