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
  "duration": 2553006136,
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
  "name": "testing123 is under contact name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "35679797979 is under Mobile",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "35621212121 is under Home",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "w@w.com is under Home",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "testing123 is under All contacts",
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
  "duration": 2088368365,
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
  "duration": 7028915161,
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
  "duration": 7576774919,
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
  "duration": 7002340515,
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
  "duration": 7780258212,
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
  "duration": 1452178925,
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
      "offset": 20
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 7495279264,
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
      "offset": 21
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 118204936,
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
      "offset": 21
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 134147989,
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
      "offset": 17
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 192369695,
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
      "offset": 20
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 7102781604,
  "status": "passed"
});
formatter.after({
  "duration": 451449714,
  "status": "passed"
});
formatter.after({
  "duration": 14724190166,
  "status": "passed"
});
formatter.before({
  "duration": 1988366071,
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
  "name": "testing123 is under All contacts",
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
  "name": "test456ing is under contact name",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "35699999999 is under Mobile",
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
  "duration": 2277492329,
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
  "duration": 7092652871,
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
  "duration": 7605979915,
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
  "duration": 7117043462,
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
  "duration": 6936474693,
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
  "duration": 1483707914,
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
      "offset": 20
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 9654549628,
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
  "duration": 272254162,
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
  "duration": 3839145626,
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
  "duration": 16733297147,
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
  "duration": 10297248854,
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
  "duration": 963805693,
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
      "offset": 20
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 2035816542,
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
      "offset": 21
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 130874444,
  "status": "passed"
});
formatter.after({
  "duration": 843944146,
  "status": "passed"
});
formatter.after({
  "duration": 14995192317,
  "status": "passed"
});
formatter.before({
  "duration": 2046370516,
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
  "name": "testing123 is under Favorites",
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
  "duration": 5590414684,
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
  "duration": 583141822,
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
  "duration": 7008534356,
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
  "duration": 7176269249,
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
  "duration": 6966658814,
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
  "duration": 7117280695,
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
  "duration": 1459549300,
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
  "duration": 7846514657,
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
      "offset": 20
    }
  ],
  "location": "Contact.contactCreationAssertions(String,String)"
});
formatter.result({
  "duration": 7639420417,
  "status": "passed"
});
formatter.after({
  "duration": 449699064,
  "status": "passed"
});
formatter.after({
  "duration": 13550009257,
  "status": "passed"
});
});