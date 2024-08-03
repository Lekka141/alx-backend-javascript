import setFromArray from '../6-set';

describe('setFromArray', () => {
  it('should return a set from an array', () => {
    expect.assertions(1);
    expect(setFromArray([12, 32, 15, 78, 98, 15])).toStrictEqual(new Set([12, 32, 15, 78, 98]));
  });
});
