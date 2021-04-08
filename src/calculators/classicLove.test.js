import assert from 'assert';
import ClassicLove from "./classicLove.js";
import ClassicLoveHelper from "./helpers/classicLoveHelper.js";
import sinon from "sinon";


describe("classicLove", function() {

    describe("getScore", function() {

        it("should return a score of 86 out of 100 for objects with name: Mary and name: James", async function() {

          const calc = new ClassicLove(new ClassicLoveHelper());

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

            // https://stackoverflow.com/questions/21072016/stubbing-a-class-method-with-sinon-js
            const helperStub = new ClassicLoveHelper()
            sinon.stub(helperStub, 'calculate').callsFake(() => "250");
            // sinon.stub(helper, 'calculate').returns("250")

            const calc = new ClassicLove(helperStub);
      
            const p1 = {
              "name": "Mary"
            }
            const p2 = {
              "name": "James"
            }
                     
            const ret = calc.getScore(p1,p2)
      
            assert.equal(100, ret.score);
            assert.equal(100, ret.maximum);
      
          });
        });

});