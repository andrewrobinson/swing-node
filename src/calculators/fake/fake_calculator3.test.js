const assert = require('assert');
const calculator = require("./fake_calculator3")

describe("Fake Calculator3", function() {
  describe("getScore", function() {
    it("should return 0 out of 6 for Mary loves James", async function() {

      const p1 = {
        "name": "Mary"
      }
      const p2 = {
        "name": "James"
      }
               
      const ret = calculator.getScore(p1,p2)

      assert.equal(0, ret.score);
      assert.equal(6, ret.maximum);

    });
  });
});