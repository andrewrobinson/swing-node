const assert = require('assert');
const calculator = require("./classicLove")
const calculatorHelper = require("./helpers/classicLoveHelper")
const sinon = require("sinon");

describe("classicLove", function() {

    describe("getScore", function() {

      const calc = calculator(calculatorHelper);

        it("should return a score of 86 out of 100 for objects with name: Mary and name: James", async function() {
    
          const p1 = {
            "name": "Mary"
          }
          const p2 = {
            "name": "James"
          }
                   
          const ret = calc.getScore(p1,p2)
    
          assert.equal(86, ret.score);
          assert.equal(100, ret.maximum);
    
        });
      });


      describe("getScore maxes out at 100", function() {

          it("should return a score of 100 out of 100 when calculatorHelper returns > 100", async function() {

            //sinon seems to pollute all instances of this, hence other tests fail
            // const stubbedCalculatorHelper = sinon.stub(calculatorHelper, "calculate").returns("250");

            const stubbedCalculatorHelper =  {
              calculate: function() {
                return "120"
              }
            }

            const calcu = calculator(stubbedCalculatorHelper);
      
            const p1 = {
              "name": "Mary"
            }
            const p2 = {
              "name": "James"
            }
                     
            const ret = calcu.getScore(p1,p2)
      
            assert.equal(100, ret.score);
            assert.equal(100, ret.maximum);

            // stubbedCalculatorHelper.restore();
      
          });
        });



});