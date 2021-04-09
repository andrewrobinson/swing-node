import assert from 'assert';
import calculator from './fake_calculator1.js';
/* eslint-disable */

describe('Fake Calculator1', () => {
  describe('getScore', () => {
    it('should return 89 out of 100 for Mary loves James', async () => {
      const p1 = {
        name: 'Mary',
      };
      const p2 = {
        name: 'James',
      };

      const ret = calculator.getScore(p1, p2);

      assert.equal(89, ret.score);
      assert.equal(100, ret.maximum);
    });
  });
});
