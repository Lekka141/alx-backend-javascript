import groceriesList from '../9-groceries_list';

describe('groceriesList', () => {
  it('should return a map of groceries', () => {
    expect.assertions(1);
    const expected = new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5],
    ]);
    expect(groceriesList()).toStrictEqual(expected);
  });
});
