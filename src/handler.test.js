const assert = require('assert');
const handler = require("./handler")

const fakeCalculator1 = require('./calculators/fake/fake_calculator1');
const fakeCalculator2 = require('./calculators/fake/fake_calculator2');
const fakeCalculator3 = require('./calculators/fake/fake_calculator3');

describe("Handler", function() {

        // Calculator 1 returned a score of 89 out of a maximum of 100 
        // Calculator 2 returned a score of 100 out of a maximum score of 200 
        // Calculator 3 returned a score of 0 out of a maximum of 6.
        // The normalised scores are 0.89 and 0.50.
        // The aggregator will perform this calculation --> 0.89 x 0.2 + 0.5 x 0.5 + 0.0 x 0.3 = 0.428 
        // Your API method must then contain in its result the number 0.428 .

        const calculators = [
            {"weight": 0.2, "fn": fakeCalculator1}, 
            {"weight": 0.5, "fn": fakeCalculator2}, 
            {"weight": 0.3, "fn": fakeCalculator3}
        ];
        

    const myHandler = handler(calculators);
  
    describe("handlePost - when set up with the return values and weights from the instructions", function() {

    it("should return a result of 0.428 when calculator1 returns 89/100, calculator2 returns 100/200 and calculator3 returns 0/6", async function() {

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