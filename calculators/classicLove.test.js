const assert = require('assert');
const calculator = require("./classicLove")

describe("classicLove", function() {

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

});