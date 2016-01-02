$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 16788654039,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login from sign in button",
  "description": "",
  "id": "login;login-from-sign-in-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@1a"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the sign in link from sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter waylonmifsud@gmail.com as emailaddress",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter 3v3rn0t3 as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 2804086205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in button",
      "offset": 33
    }
  ],
  "location": "Login.signInClick(String)"
});
formatter.result({
  "duration": 23666226370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "waylonmifsud@gmail.com",
      "offset": 8
    }
  ],
  "location": "Login.inputEmailAddress(String)"
});
formatter.result({
  "duration": 151526248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3v3rn0t3",
      "offset": 8
    }
  ],
  "location": "Login.inputPassword(String)"
});
formatter.result({
  "duration": 78728410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign up",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 13787694567,
  "status": "passed"
});
formatter.match({
  "location": "Login.loggedInCheck()"
});
formatter.result({
  "duration": 2285363057,
  "status": "passed"
});
formatter.after({
  "duration": 185562715,
  "status": "passed"
});
formatter.before({
  "duration": 8905350212,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login from header menu",
  "description": "",
  "id": "login;login-from-header-menu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@1a"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I navigate to https://evernote.com/?var\u003d1",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on the sign in link from header menu",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter waylonmifsud@gmail.com as emailaddress",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter 3v3rn0t3 as password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com/?var\u003d1",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 15833594924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "header menu",
      "offset": 33
    }
  ],
  "location": "Login.signInClick(String)"
});
formatter.result({
  "duration": 9030771507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "waylonmifsud@gmail.com",
      "offset": 8
    }
  ],
  "location": "Login.inputEmailAddress(String)"
});
formatter.result({
  "duration": 161747370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3v3rn0t3",
      "offset": 8
    }
  ],
  "location": "Login.inputPassword(String)"
});
formatter.result({
  "duration": 93038814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign up",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 18369336841,
  "status": "passed"
});
formatter.match({
  "location": "Login.loggedInCheck()"
});
formatter.result({
  "duration": 2995716832,
  "status": "passed"
});
formatter.after({
  "duration": 169547602,
  "status": "passed"
});
formatter.before({
  "duration": 8449051010,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login from header menu sign in link",
  "description": "",
  "id": "login;login-from-header-menu-sign-in-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@1a"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I navigate to https://evernote.com/?var\u003d2",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on the sign in link from sign in header button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter waylonmifsud@gmail.com as emailaddress",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter 3v3rn0t3 as password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com/?var\u003d2",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 14456784872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in header button",
      "offset": 33
    }
  ],
  "location": "Login.signInClick(String)"
});
formatter.result({
  "duration": 253650213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "waylonmifsud@gmail.com",
      "offset": 8
    }
  ],
  "location": "Login.inputEmailAddress(String)"
});
formatter.result({
  "duration": 3979165661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3v3rn0t3",
      "offset": 8
    }
  ],
  "location": "Login.inputPassword(String)"
});
formatter.result({
  "duration": 78675250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign up",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 6459820991,
  "status": "passed"
});
formatter.match({
  "location": "Login.loggedInCheck()"
});
formatter.result({
  "duration": 3725879877,
  "status": "passed"
});
formatter.after({
  "duration": 163336158,
  "status": "passed"
});
formatter.before({
  "duration": 8087517653,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login with no credentials",
  "description": "",
  "id": "login;login-with-no-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@1b"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on the sign in link from sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the error message specifies that This is a required field.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 2115948980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in button",
      "offset": 33
    }
  ],
  "location": "Login.signInClick(String)"
});
formatter.result({
  "duration": 21588634680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign up",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 934594052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 33
    }
  ],
  "location": "Login.errorDisplayedCheck(String)"
});
formatter.result({
  "duration": 147240842,
  "status": "passed"
});
formatter.after({
  "duration": 161742464,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "login;login-with-incorrect-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@1c"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on the sign in link from sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I enter \u003cusername\u003e as emailaddress",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the error message specifies that Incorrect username and/or password.",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "login;login-with-incorrect-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 47,
      "id": "login;login-with-incorrect-credentials;;1"
    },
    {
      "cells": [
        "www@www.com",
        "wwwggg"
      ],
      "line": 48,
      "id": "login;login-with-incorrect-credentials;;2"
    },
    {
      "cells": [
        "a@ggg.co.uk",
        "aaa"
      ],
      "line": 49,
      "id": "login;login-with-incorrect-credentials;;3"
    },
    {
      "cells": [
        "xyz@abc.it",
        "rabbit"
      ],
      "line": 50,
      "id": "login;login-with-incorrect-credentials;;4"
    },
    {
      "cells": [
        "def@qwe.de",
        "horses"
      ],
      "line": 51,
      "id": "login;login-with-incorrect-credentials;;5"
    },
    {
      "cells": [
        "gblabcref@rabobank.fr",
        "qwerty"
      ],
      "line": 52,
      "id": "login;login-with-incorrect-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7947655672,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "login;login-with-incorrect-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@1c"
    },
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on the sign in link from sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I enter www@www.com as emailaddress",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter wwwggg as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the error message specifies that Incorrect username and/or password.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1665335632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in button",
      "offset": 33
    }
  ],
  "location": "Login.signInClick(String)"
});
formatter.result({
  "duration": 17671503826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www@www.com",
      "offset": 8
    }
  ],
  "location": "Login.inputEmailAddress(String)"
});
formatter.result({
  "duration": 145467169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wwwggg",
      "offset": 8
    }
  ],
  "location": "Login.inputPassword(String)"
});
formatter.result({
  "duration": 73183323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign up",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 2666429708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect username and/or password.",
      "offset": 33
    }
  ],
  "location": "Login.errorDisplayedCheck(String)"
});
formatter.result({
  "duration": 47942877,
  "status": "passed"
});
formatter.after({
  "duration": 163773008,
  "status": "passed"
});
formatter.before({
  "duration": 8841638450,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "login;login-with-incorrect-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@1c"
    },
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on the sign in link from sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I enter a@ggg.co.uk as emailaddress",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter aaa as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the error message specifies that Incorrect username and/or password.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1896793282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in button",
      "offset": 33
    }
  ],
  "location": "Login.signInClick(String)"
});
formatter.result({
  "duration": 21697447066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a@ggg.co.uk",
      "offset": 8
    }
  ],
  "location": "Login.inputEmailAddress(String)"
});
formatter.result({
  "duration": 122349244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 8
    }
  ],
  "location": "Login.inputPassword(String)"
});
formatter.result({
  "duration": 64228635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign up",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 2625836657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect username and/or password.",
      "offset": 33
    }
  ],
  "location": "Login.errorDisplayedCheck(String)"
});
formatter.result({
  "duration": 45146206,
  "status": "passed"
});
formatter.after({
  "duration": 154774846,
  "status": "passed"
});
formatter.before({
  "duration": 7410657441,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "login;login-with-incorrect-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@1c"
    },
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on the sign in link from sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I enter xyz@abc.it as emailaddress",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter rabbit as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the error message specifies that Incorrect username and/or password.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1809237177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in button",
      "offset": 33
    }
  ],
  "location": "Login.signInClick(String)"
});
formatter.result({
  "duration": 25669556669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@abc.it",
      "offset": 8
    }
  ],
  "location": "Login.inputEmailAddress(String)"
});
formatter.result({
  "duration": 164515511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rabbit",
      "offset": 8
    }
  ],
  "location": "Login.inputPassword(String)"
});
formatter.result({
  "duration": 74305772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign up",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 2742099892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect username and/or password.",
      "offset": 33
    }
  ],
  "location": "Login.errorDisplayedCheck(String)"
});
formatter.result({
  "duration": 55234270,
  "status": "passed"
});
formatter.after({
  "duration": 154682369,
  "status": "passed"
});
formatter.before({
  "duration": 8328590126,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "login;login-with-incorrect-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@1c"
    },
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on the sign in link from sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I enter def@qwe.de as emailaddress",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter horses as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the error message specifies that Incorrect username and/or password.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1928979667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in button",
      "offset": 33
    }
  ],
  "location": "Login.signInClick(String)"
});
formatter.result({
  "duration": 15598889774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def@qwe.de",
      "offset": 8
    }
  ],
  "location": "Login.inputEmailAddress(String)"
});
formatter.result({
  "duration": 147764008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "horses",
      "offset": 8
    }
  ],
  "location": "Login.inputPassword(String)"
});
formatter.result({
  "duration": 77370377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign up",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 2681924505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect username and/or password.",
      "offset": 33
    }
  ],
  "location": "Login.errorDisplayedCheck(String)"
});
formatter.result({
  "duration": 56873750,
  "status": "passed"
});
formatter.after({
  "duration": 161494623,
  "status": "passed"
});
formatter.before({
  "duration": 7731735463,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Login with incorrect credentials",
  "description": "",
  "id": "login;login-with-incorrect-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@1c"
    },
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I click on the sign in link from sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I enter gblabcref@rabobank.fr as emailaddress",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter qwerty as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click the sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the error message specifies that Incorrect username and/or password.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1880398856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in button",
      "offset": 33
    }
  ],
  "location": "Login.signInClick(String)"
});
formatter.result({
  "duration": 29589441249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gblabcref@rabobank.fr",
      "offset": 8
    }
  ],
  "location": "Login.inputEmailAddress(String)"
});
formatter.result({
  "duration": 154102620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty",
      "offset": 8
    }
  ],
  "location": "Login.inputPassword(String)"
});
formatter.result({
  "duration": 72214768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign up",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 2638270640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect username and/or password.",
      "offset": 33
    }
  ],
  "location": "Login.errorDisplayedCheck(String)"
});
formatter.result({
  "duration": 60274272,
  "status": "passed"
});
formatter.after({
  "duration": 158296373,
  "status": "passed"
});
formatter.uri("note/note.feature");
formatter.feature({
  "line": 3,
  "name": "Note",
  "description": "",
  "id": "note",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 2,
      "name": "@note"
    }
  ]
});
formatter.before({
  "duration": 8655396263,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1904003252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 41895094118,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create New Note",
  "description": "",
  "id": "note;create-new-note",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@2a"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I create 1 note with title as test title a and body as test body a",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the test title a is in the notes list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "test title a",
      "offset": 30
    },
    {
      "val": "test body a",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 9552174279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test title a",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 27
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2094023289,
  "status": "passed"
});
formatter.after({
  "duration": 16620338443,
  "status": "passed"
});
formatter.after({
  "duration": 251201116,
  "status": "passed"
});
formatter.before({
  "duration": 7519004033,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1855889820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 32674928314,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Create New Note Log Out and In and check that note is still there",
  "description": "",
  "id": "note;create-new-note-log-out-and-in-and-check-that-note-is-still-there",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@2b"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I create 1 note with title as test title b and body as test body b",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I logout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I navigate to https://evernote.com",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the test title b is in the notes list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "test title b",
      "offset": 30
    },
    {
      "val": "test body b",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 13948174644,
  "status": "passed"
});
formatter.match({
  "location": "Login.logout()"
});
formatter.result({
  "duration": 2959478473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 15849459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 10028389719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test title b",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 27
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2121289011,
  "status": "passed"
});
formatter.after({
  "duration": 16584166914,
  "status": "passed"
});
formatter.after({
  "duration": 250524620,
  "status": "passed"
});
formatter.before({
  "duration": 7301810272,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 2464690863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 39748420470,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Shortcut functionality",
  "description": "",
  "id": "note;shortcut-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@2c"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I create 1 note with title as test title c and body as test body c",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click the add to shortcut button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click the shortcuts button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the test title c is in the shortcuts list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "test title c",
      "offset": 30
    },
    {
      "val": "test body c",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 15574261051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "add to shortcut",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 611520104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shortcuts",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 875308488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test title c",
      "offset": 4
    },
    {
      "val": "shortcuts",
      "offset": 27
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2095292500,
  "status": "passed"
});
formatter.after({
  "duration": 21127832798,
  "status": "passed"
});
formatter.after({
  "duration": 240546956,
  "status": "passed"
});
formatter.before({
  "duration": 7843355035,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1862609210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 32594644408,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Table functionality",
  "description": "",
  "id": "note;table-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@2d"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I create 1 note with title as test title d and body as test body d",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click the table button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I create a 3x3 table",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the 3x3 table is created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "test title d",
      "offset": 30
    },
    {
      "val": "test body d",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 11614394705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "table",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 1303659568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    },
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "Note.createTable(int,int)"
});
formatter.result({
  "duration": 18676650479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 4
    },
    {
      "val": "3",
      "offset": 6
    }
  ],
  "location": "Note.assertTableCreation(int,int)"
});
formatter.result({
  "duration": 5171307953,
  "status": "passed"
});
formatter.after({
  "duration": 16066619618,
  "status": "passed"
});
formatter.after({
  "duration": 287697706,
  "status": "passed"
});
formatter.before({
  "duration": 8079079996,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1817935326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 35170753518,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Sorting of notes",
  "description": "",
  "id": "note;sorting-of-notes",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@2e"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I create 3 note with title as test sort title e and body as test sort body e",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click the options button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select the Title (ascending) sort order",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the sort order should be Title in ascending sort order",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I click the options button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select the Title (descending) sort order",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the sort order should be Title in descending sort order",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I click the options button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I select the Date Created (oldest first) sort order",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the sort order should be Date Created in oldest first sort order",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click the options button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select the Date Created (newest first) sort order",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the sort order should be Date Created in newest first sort order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "test sort title e",
      "offset": 30
    },
    {
      "val": "test sort body e",
      "offset": 60
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 28657885352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "options",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 196005019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title (ascending)",
      "offset": 13
    }
  ],
  "location": "Note.selectSortMethodOption(String)"
});
formatter.result({
  "duration": 2661571663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title",
      "offset": 25
    },
    {
      "val": "ascending",
      "offset": 34
    }
  ],
  "location": "Note.assertSortingIsCorrect(String,String)"
});
formatter.result({
  "duration": 796473820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "options",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 357577353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title (descending)",
      "offset": 13
    }
  ],
  "location": "Note.selectSortMethodOption(String)"
});
formatter.result({
  "duration": 2305983934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title",
      "offset": 25
    },
    {
      "val": "descending",
      "offset": 34
    }
  ],
  "location": "Note.assertSortingIsCorrect(String,String)"
});
formatter.result({
  "duration": 610811166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "options",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 121665806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date Created (oldest first)",
      "offset": 13
    }
  ],
  "location": "Note.selectSortMethodOption(String)"
});
formatter.result({
  "duration": 2399209819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date Created",
      "offset": 25
    },
    {
      "val": "oldest first",
      "offset": 41
    }
  ],
  "location": "Note.assertSortingIsCorrect(String,String)"
});
formatter.result({
  "duration": 690602341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "options",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 326016108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date Created (newest first)",
      "offset": 13
    }
  ],
  "location": "Note.selectSortMethodOption(String)"
});
formatter.result({
  "duration": 2212562780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date Created",
      "offset": 25
    },
    {
      "val": "newest first",
      "offset": 41
    }
  ],
  "location": "Note.assertSortingIsCorrect(String,String)"
});
formatter.result({
  "duration": 620337845,
  "status": "passed"
});
formatter.after({
  "duration": 22059399087,
  "status": "passed"
});
formatter.after({
  "duration": 256782640,
  "status": "passed"
});
formatter.uri("notebook/notebook.feature");
formatter.feature({
  "line": 3,
  "name": "Notebook",
  "description": "",
  "id": "notebook",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 2,
      "name": "@notebook"
    }
  ]
});
formatter.before({
  "duration": 8023562809,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1839107848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 38250693754,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create New Notebook",
  "description": "",
  "id": "notebook;create-new-notebook",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@4"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click the notebook button",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the create new notebook button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I set the notebook title as test notebook",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I create 1 note with title as test title a and body as test body a",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "test title a note is under the test notebook notebook",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "delete test notebook notebook",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "notebook",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 3841466860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create new notebook",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 759346358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test notebook",
      "offset": 28
    }
  ],
  "location": "Notebook.inputSearchBox(String)"
});
formatter.result({
  "duration": 1541329390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "test title a",
      "offset": 30
    },
    {
      "val": "test body a",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 8741684324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test title a",
      "offset": 0
    },
    {
      "val": "test notebook",
      "offset": 31
    }
  ],
  "location": "Notebook.assertNoteLinkedToNotebook(String,String)"
});
formatter.result({
  "duration": 2663517170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test notebook",
      "offset": 7
    }
  ],
  "location": "Notebook.deleteNotebook(String)"
});
formatter.result({
  "duration": 5034332225,
  "status": "passed"
});
formatter.after({
  "duration": 197971436,
  "status": "passed"
});
formatter.uri("search/search.feature");
formatter.feature({
  "line": 3,
  "name": "Search",
  "description": "",
  "id": "search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 2,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 7597324059,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1541671627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 50383850045,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Search for a note title",
  "description": "",
  "id": "search;search-for-a-note-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@3a"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I create 3 note with title as test title a and body as test body a",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I search for test title a",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the 1 test title a is in the notes list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "test title a",
      "offset": 30
    },
    {
      "val": "test body a",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 30002155485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 408537403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test title a",
      "offset": 13
    }
  ],
  "location": "Search.inputSearchBox(String)"
});
formatter.result({
  "duration": 331738485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 test title a",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 29
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2153901566,
  "status": "passed"
});
formatter.after({
  "duration": 22438531140,
  "status": "passed"
});
formatter.after({
  "duration": 253506290,
  "status": "passed"
});
formatter.before({
  "duration": 6762346104,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 2063303964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 32067943639,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search in a note body",
  "description": "",
  "id": "search;search-in-a-note-body",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@3b"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I create 3 note with title as test title a and body as test body a",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I search for test body",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the 1 test title a is in the notes list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "test title a",
      "offset": 30
    },
    {
      "val": "test body a",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 29920767193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 262884890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test body",
      "offset": 13
    }
  ],
  "location": "Search.inputSearchBox(String)"
});
formatter.result({
  "duration": 342340130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 test title a",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 29
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2141759645,
  "status": "passed"
});
formatter.after({
  "duration": 22588976791,
  "status": "passed"
});
formatter.after({
  "duration": 246360031,
  "status": "passed"
});
formatter.uri("tag/tag.feature");
formatter.feature({
  "line": 3,
  "name": "Tag",
  "description": "",
  "id": "tag",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 7628853632,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1507579566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 26845387144,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Tag functionality",
  "description": "",
  "id": "tag;tag-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@6"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I create 3 note with title as test title a and body as test body a",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I assign tag to 1 test title a",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I assign tag to 2 test title a",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the tag button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on tag from the tag menu",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the 1 test title a is in the notes list",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the 2 test title a is in the notes list",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click the tag button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I delete tag named tag",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "test title a",
      "offset": 30
    },
    {
      "val": "test body a",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 30429489539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag",
      "offset": 9
    },
    {
      "val": "1 test title a",
      "offset": 16
    }
  ],
  "location": "Tag.assignTagToNote(String,String)"
});
formatter.result({
  "duration": 3167012047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag",
      "offset": 9
    },
    {
      "val": "2 test title a",
      "offset": 16
    }
  ],
  "location": "Tag.assignTagToNote(String,String)"
});
formatter.result({
  "duration": 2867380812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 792162190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag",
      "offset": 11
    }
  ],
  "location": "Tag.selectTag(String)"
});
formatter.result({
  "duration": 4355091965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 test title a",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 29
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2141584828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 test title a",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 29
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2078723688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 129292793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag",
      "offset": 19
    }
  ],
  "location": "Tag.deleteTag(String)"
});
formatter.result({
  "duration": 3120080524,
  "status": "passed"
});
formatter.after({
  "duration": 21349886564,
  "status": "passed"
});
formatter.after({
  "duration": 301569306,
  "status": "passed"
});
formatter.uri("trash/trash.feature");
formatter.feature({
  "line": 3,
  "name": "Trash",
  "description": "",
  "id": "trash",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 2,
      "name": "@trash"
    }
  ]
});
formatter.before({
  "duration": 7206125031,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 1452709858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 33473999040,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Trash functionality",
  "description": "",
  "id": "trash;trash-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@5a"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click the notebook button",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the trash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the empty trash button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the notes button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I create 3 note with title as test title a and body as test body a",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I delete all notes",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click the notebook button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click the trash button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the 1 test title a is in the notes list",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the 2 test title a is in the notes list",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the 3 test title a is in the notes list",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click the empty trash button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the trash is empty",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "notebook",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 2613344203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trash",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 2304080688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "empty trash",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 8000380929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "notes",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 644954314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "test title a",
      "offset": 30
    },
    {
      "val": "test body a",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 30603421809,
  "status": "passed"
});
formatter.match({
  "location": "Trash.deleteAllNotes()"
});
formatter.result({
  "duration": 11858513094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "notebook",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 230402268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trash",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 2156289024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 test title a",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 29
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2240764446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 test title a",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 29
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2180946459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 test title a",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 29
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2097206972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "empty trash",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 7450516290,
  "status": "passed"
});
formatter.match({
  "location": "Trash.assertTrashEmpty()"
});
formatter.result({
  "duration": 28690425,
  "status": "passed"
});
formatter.after({
  "duration": 185626641,
  "status": "passed"
});
formatter.before({
  "duration": 8051518469,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://evernote.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://evernote.com",
      "offset": 14
    }
  ],
  "location": "Navigation.iNavigateTo(String)"
});
formatter.result({
  "duration": 2671503326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign in",
      "offset": 13
    }
  ],
  "location": "Login.login(String)"
});
formatter.result({
  "duration": 38742259460,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Trash Restore",
  "description": "",
  "id": "trash;trash-restore",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@5b"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I create 1 note with title as test title b and body as test body b",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I delete all notes",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click the notebook button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click the trash button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I restore test title b",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click the notes button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the test title b is in the notes list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "test title b",
      "offset": 30
    },
    {
      "val": "test body b",
      "offset": 55
    }
  ],
  "location": "Note.createNewNote(int,String,String)"
});
formatter.result({
  "duration": 9091174191,
  "status": "passed"
});
formatter.match({
  "location": "Trash.deleteAllNotes()"
});
formatter.result({
  "duration": 5072314241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "notebook",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 262159355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trash",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 2249079230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test title b",
      "offset": 10
    }
  ],
  "location": "Trash.restoreNote(String)"
});
formatter.result({
  "duration": 2309595395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "notes",
      "offset": 12
    }
  ],
  "location": "Button.buttonClick(String)"
});
formatter.result({
  "duration": 741719632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test title b",
      "offset": 4
    },
    {
      "val": "notes",
      "offset": 27
    }
  ],
  "location": "Note.assertNoteCreated(String,String)"
});
formatter.result({
  "duration": 2109173957,
  "status": "passed"
});
formatter.after({
  "duration": 15848415859,
  "status": "passed"
});
formatter.after({
  "duration": 239309675,
  "status": "passed"
});
});