import assert from 'assert';
import ClassicLoveHelper from './classicLoveHelper.js';

describe('classicLoveHelper', () => {
  const classicLoveHelper = new ClassicLoveHelper();

  describe('calculate', () => {
    it('should return 86 for Mary, James', async () => {
      assert.equal('86', classicLoveHelper.calculate('Mary', 'James'));
    });

    it('should return 86 for James, Mary', async () => {
      assert.equal('86', classicLoveHelper.calculate('James', 'Mary'));
    });

    it('should return 69 for Andrew, Ruth', async () => {
      assert.equal('69', classicLoveHelper.calculate('Andrew', 'Ruth'));
    });
    it('should return 69 for Ruth, Andrew', async () => {
      assert.equal('69', classicLoveHelper.calculate('Ruth', 'Andrew'));
    });
  });

  // this is stage 1 of converting the inputs
  describe('countChars', () => {
    it('should return 2211111221 for Mary loves James', async () => {
      assert.equal('2211111221', classicLoveHelper.countChars('Mary', 'James'));
    });
    it('should return 2211111221 for mary loves james', async () => {
      assert.equal('2211111221', classicLoveHelper.countChars('mary', 'james'));
    });
  });

  // this is stage 2 of converting the inputs. 'calculate' calls this recursively until 2 digits remain
  describe('shortenNumber', () => {
    it('should shorten 2211111221 to 34322', async () => {
      assert.equal('34322', classicLoveHelper.shortenNumber('2211111221'));
    });
    it('should shorten 34322 to 563', async () => {
      assert.equal('563', classicLoveHelper.shortenNumber('34322'));
    });
    it('should shorten 563 to 86', async () => {
      assert.equal('86', classicLoveHelper.shortenNumber('563'));
    });
  });
});
