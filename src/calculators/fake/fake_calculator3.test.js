import assert from 'assert';
import calculator from './fake_calculator3.js';
/* eslint-disable */
describe('Fake Calculator3', () => {
  describe('getScore', () => {
    it('should return 0 out of 6 for Mary loves James', async () => {
      const p1 = {
        name: 'Mary',
      };
      const p2 = {
        name: 'James',
      };

      const ret = calculator.getScore(p1, p2);

      assert.equal(0, ret.score);
      assert.equal(6, ret.maximum);
    });
  });
});
