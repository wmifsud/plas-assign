$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("note/note.feature");
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
  "duration": 8216724090,
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
  "duration": 1632404338,
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
  "duration": 14514609546,
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
  "duration": 9976160733,
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
  "duration": 2147918054,
  "status": "passed"
});
formatter.after({
  "duration": 14264341060,
  "status": "passed"
});
formatter.after({
  "duration": 204044728,
  "status": "passed"
});
});