__
Examples: 

Feature: summary of the problem  - phrase
Scenerio: first aspect of problem - active sentence.  User requests a self before closing of trading.


Steps
Given - pre-conditions before behavior beings (passive) // actor location
When - the behavior being speified / action by the actor (passive)
Then - expected changes / testable outcome achieved (passive )



Given the user has loaded the inbox page in desktop mode
Then the patientname column will show the first name first


Given the user has loaded the inbox page in tablet mode
then the patientname column will show the last name first

 
Scenerio: Ipad doesn't warn of 13-line interpretation limit

Background: 

Given a user is accessing the Responsive UI from Ipad or Tablet
When the user adds more than 13 statements
Then the interpretation border and labels turn red

Given a user is accessing the Responsive Study Page from Ipad or Tablet
And the interpretation border and labels are red,
When the user hits save
Then a notification appears that says "text exceeds 13-line limt" 
And it will stay on the screen until its clear icon is pressed
And the interpretation is not saved. 

cenario Outlines allow us to more concisely express these examples through the use of a template with placeholders:

Scenario Outline: Eating
  Given there are <start> cucumbers
  When I eat <eat> cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | eat | left |
    |  12   |  5  |  7   |
    |  20   |  5  |  15  |

    Backgrounds allows you to add some context to all scenarios in a single feature. A Background is like an untitled scenario, containing a number of steps. The difference is when it is run: the background is run before each of your scenarios, but after your BeforeScenario hooks (Hooking into the Test Process - Hooks).


Sources

https://automationpanda.com/bdd/

https://automationpanda.com/2017/01/27/bdd-101-gherkin-by-example/

https://docs.behat.org/en/v2.5/guides/1.gherkin.html

https://techbeacon.com/app-dev-testing/better-behavior-driven-development-4-rules-writing-good-gherkin?utm_content=buffer3bd8d&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer


Terms 

declarative - high-level / doesn't specify the exact procedure to be followed. 

4 types of sentences - declarative, imperative (command), interrogative (question), exclamatory.
- state information / ends with period
- gives command / makes request - period
- asks question
- express emotion