var assert = require("assert").strict;

function sum(a, b) {
    return a + b;
}


assert(sum(1,2) === 3, "1+2=3");

assert.equal(sum(1,2), 3);
assert.notEqual(sum(1,2), "3");

assert.notEqual(sum(1,2), 1);