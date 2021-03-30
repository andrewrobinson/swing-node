const assert = require('assert');
const calculator = require("./classicLove")

describe("classicLove", function() {

    //this is the highest level function and the only one that needs to be 'public'
    describe("getScore", function() {
        it("should return a score of 86 out of 100 for objects with name: Mary and name: James", async function() {
    
          const p1 = {
            "name": "Mary"
          }
          const p2 = {
            "name": "James"
          }
                   
          const ret = calculator.getScore(p1,p2)
    
          assert.equal(86, ret.score);
          assert.equal(100, ret.maximum);
    
        });
      });

    //this is the next highest and could be "private" except I wanted to test from one place
    describe("calculate", function() {
        it("should return 86 for Mary, James", async function() {
            assert.equal("86", calculator.calculate("Mary", "James"));
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