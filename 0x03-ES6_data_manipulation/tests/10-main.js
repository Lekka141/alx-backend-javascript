import updateUniqueItems from '../10-update_uniq_items';
import groceriesList from '../9-groceries_list';

describe('updateUniqueItems', () => {
  it('should update the quantity of unique items to 100', () => {
    expect.assertions(1);
    const map = groceriesList();
    updateUniqueItems(map);
    const expected = new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 100],
      ['Rice', 100],
      ['Banana', 5],
    ]);
    expect(map).toStrictEqual(expected);
  });

  it('should throw an error if argument is not a map', () => {
    expect.assertions(1);
    expect(() => updateUniqueItems({})).toThrow('Cannot process');
  });
});
