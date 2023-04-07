TDD - tests written based on requirements, then implement code to pass tests
- write a failing test, write code that allows code to pass, refactor, repeat
- but what, how much to test, an dhow to understand fails

BDD - extends TDD
- allows dev where to start and what to test 
- combines TDD and Agile
- business needs are defined in code are are testable
- 

example mapping 
- know story
- know acceptance criteria - rules that restrain
- example - when x, I do y, and z happens
- questions that can't be immediately answered

write the requirements in a way that they can become the test itself. 

behavior - how a feature operates within a well-defined scernio of inpus, actions, and outcomes.

Gherkin is a human readable langauge for writing requirements that also serve as automated tests
- provides structure fr documenting examples of desired behavior
- it's a programming file
- saved as plain text / uses .feature file extension
- line-oriented, uses indentation to define structure, like python or yaml
- language is semantic, using special keywords allowing file to be parsed

keywords- 

feature: contains teh name of feature and description
scenerio: a single concrete example of how a system should behave - will have pass / fail results - a deterimanable business sitaution
- each feature will have 5-20 scenerios
given: descvribes the context / precondition
when - ids an event enacted by some actor
then - result / outcome

BDD frameworks
- serenity, specFlow, jasmine, cucumber, 

Cucumber is a fraework that understands Gherkin and runs the automated tests


Three Amigos - define clear ACs, id issues early, etc - bring up questions.
- about three perspectives, not 3 people.


https://cucumber.io/docs/gherkin/reference/

