test suite

This is defined in the Mocha blocks

**describe** defines a test suit

**it** defines a specific test

Two variables of test:

-input
-result of function call

Then, this is defined in the Chai docs

Assertion:

expect(result).to.equal(x)

expect(call).to.throw(Error, "...")

https://www.chaijs.com/api/bdd/

'to' and 'be' are one of many chainable getters to improve the readability of your assertions.

'throw' and 'equal' are assertions

'expect' and 'should' are BDD assertion STYLES, whihc has its own set of assertions and getters

'assert' is a TDD assertion STYLE, which doesn't use getters / only assertions
