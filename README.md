LAS3007 Assignment

Maven Configuration for Evernote examples:

Local Chrome : clean test -Dbrowser=localChrome "-Dcucumber.options=--tags @all"
Local Firefox: clean test -Dbrowser=localFirefox "-Dcucumber.options=--tags @all"
Chrome using Selenium Grid : clean test -Dbrowser=gridChrome "-Dcucumber.options=--tags @all"
Firefox using Selenium Grid: clean test -Dbrowser=gridFirefox "-Dcucumber.options=--tags @all"

Other tag examples: @2a,@2b,@search,@tag,@note,@1a

Selenium Grid used is version 2.48.2

Command to start Selenium Grid hub: java -jar selenium-server-standalone-2.48.2.jar -role hub
Command to start Selenium Grid nodes: java -jar selenium-server-standalone-2.48.2.jar -role node -hub http://localhost:4444/grid/register -browser "browserName=firefox,maxInstances=7,platform=MAC" -browser "browserName=chrome,maxInstances=7,platform=MAC" -Dwebdriver.chrome.driver=/Users/waylon/projects/plas-assign/browserdriver/chrome/chromedriver

Maven Configuration for Mobile Application Contact: clean test "-Dcucumber.options=--tags @android"