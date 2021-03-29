const assert = require('assert');
const handler = require("./handler")

const fakeCalculator1 = require('./calculators/calculator1');
const fakeCalculator2 = require('./calculators/calculator2');
const fakeCalculator3 = require('./calculators/calculator3');

const calculators = [
	{"weight": 0.2, "fn": fakeCalculator1}, 
	{"weight": 0.5, "fn": fakeCalculator2}, 
	{"weight": 0.3, "fn": fakeCalculator3}
];

describe("Handler", function() {
  
    const myHandler = handler(calculators);
  
    describe("handlePost", function() {

    it("should return a result of 0.428", async function() {

      const p1 = {
        "name": "Mary"
      }
      const p2 = {
        "name": "James"
      }
               
      const ret = myHandler.handlePost(p1,p2)
      assert.equal("0.428", ret.result);

    });
  });
});