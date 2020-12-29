$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("_02_Country.feature");
formatter.feature({
  "line": 1,
  "name": "Country functionality",
  "description": "",
  "id": "country-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6192732,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Create Country",
  "description": "",
  "id": "country-functionality;create-country",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter username and password and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Navigate to country page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Create a country",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Success message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginSteps.navigate_to_basqar()"
});
formatter.result({
  "duration": 28926846388,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.enter_username_and_password_and_click_Login_button()"
});
formatter.result({
  "duration": 16155108534,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginSteps.user_should_login_successfully()"
});
formatter.result({
  "duration": 132852,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.navigate_to_country_page()"
});
formatter.result({
  "duration": 3435661381,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.create_a_country()"
});
formatter.result({
  "duration": 2178938666,
  "status": "passed"
});
formatter.match({
  "location": "_02_CountrySteps.success_message_should_be_displayed()"
});
formatter.result({
  "duration": 737066306,
  "status": "passed"
});
formatter.after({
  "duration": 7005728606,
  "status": "passed"
});
});