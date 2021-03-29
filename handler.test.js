const assert = require('assert');
const handler = require("./handler")

describe("Handler", function() {
  describe("handlePost", function() {
    it("should return a result of 0.428", async function() {

      const p1 = {
        "name": "Mary"
      }
      const p2 = {
        "name": "James"
      }
               
      const ret = handler.handlePost(p1,p2)
      assert.equal("0.428", ret.result);

    });
  });
});