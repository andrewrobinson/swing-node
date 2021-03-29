const assert = require('assert');
const calculator = require("./calculator2")

describe("Calculator2", function() {
  describe("getScore", function() {
    it("should return 100 out of 200 for Mary loves James", async function() {

      const p1 = {
        "name": "Mary"
      }
      const p2 = {
        "name": "James"
      }
               
      const ret = calculator.getScore(p1,p2)

      assert.equal(100, ret.score);
      assert.equal(200, ret.maximum);

    });
  });
});