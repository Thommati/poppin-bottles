const assert = require('chai').assert;
const bottles = require('../bottles');

describe('#bottles()', () => {
  it('should return 15 with an investment of 10', () => {
    assert.strictEqual(bottles(10), 15);
  });

  it('should return 35 with an investment of 20', () => {
    assert.strictEqual(bottles(20), 35);
  });

  it('should return 55 with an investment of 30', () => {
    assert.strictEqual(bottles(30), 55);
  });

  it('should return 75 with an investment of 40', () => {
    assert.strictEqual(bottles(40), 75);
  });

  it('should return 3 with an investment of 4', () => {
    assert.strictEqual(bottles(4), 3);
  });

  it('should return 0 with an investment of 0', () => {
    assert.strictEqual(bottles(0), 0);
  });

  it('should return 0 with an investment of less than 0', () => {
    assert.strictEqual(bottles(-1), 0);
  });

  it('should return 0 when investment is not a number', () => {
    assert.strictEqual(bottles('dog'), 0);
  });
});
