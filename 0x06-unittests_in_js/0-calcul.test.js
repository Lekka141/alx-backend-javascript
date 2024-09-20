const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when both numbers are 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle mixed positive and negative numbers', () => {
    assert.strictEqual(calculateNumber(1.4, -1.5), 0);
    assert.strictEqual(calculateNumber(-2.3, 2.8), 1);
  });

  it('should round .5 values up', () => {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    assert.strictEqual(calculateNumber(2.5, 2.4), 5);
  });
});
