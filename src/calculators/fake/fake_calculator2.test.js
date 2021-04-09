import assert from 'assert';
import calculator from './fake_calculator2.js';

/* eslint-disable */
describe('Fake Calculator2', () => {
  describe('getScore', () => {
    it('should return 100 out of 200 for Mary loves James', async () => {
      const p1 = {
        name: 'Mary',
      };
      const p2 = {
        name: 'James',
      };

      const ret = calculator.getScore(p1, p2);

      assert.equal(100, ret.score);
      assert.equal(200, ret.maximum);
    });
  });
});
