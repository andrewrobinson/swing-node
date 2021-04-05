const assert = require('assert');
const calculator = require("./classicLoveHelper")

describe("classicLoveHelper", function() {

    describe("calculate", function() {
        it("should return 86 for Mary, James", async function() {
            assert.equal("86", calculator.calculate("Mary", "James"));
        });

        it("should return 86 for James, Mary", async function() {
            assert.equal("86", calculator.calculate("James", "Mary"));
        });

        it("should return 69 for Andrew, Ruth", async function() {
            assert.equal("69", calculator.calculate("Andrew", "Ruth"));
        });
        it("should return 69 for Ruth, Andrew", async function() {
            assert.equal("69", calculator.calculate("Ruth", "Andrew"));
        });


    });

    //this is stage 1 of converting the inputs
    describe("countChars", function() {
        it("should return 2211111221 for Mary loves James", async function() {
            assert.equal("2211111221", calculator.countChars("Mary", "James"));
        });
        it("should return 2211111221 for mary loves james", async function() {
            assert.equal("2211111221", calculator.countChars("mary", "james"));
        });
    });

    //this is stage 2 of converting the inputs. 'calculate' calls this recursively until 2 digits remain
    describe("shortenNumber", function() {
        it("should shorten 2211111221 to 34322", async function() {
            assert.equal("34322", calculator.shortenNumber("2211111221"));
        });
        it("should shorten 34322 to 563", async function() {
            assert.equal("563", calculator.shortenNumber("34322"));
        });
        it("should shorten 563 to 86", async function() {
            assert.equal("86", calculator.shortenNumber("563"));
        });
    });

});