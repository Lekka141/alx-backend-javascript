import hasValuesFromArray from '../7-has_array_values';

describe('hasValuesFromArray', () => {
  it('should return true if all elements in array exist within the set', () => {
    expect.assertions(3);
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1])).toBe(true);
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10])).toBe(false);
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10])).toBe(false);
  });
});
