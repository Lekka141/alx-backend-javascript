const Building = require('../5-building');

test('Building instantiation', () => {
  const b = new Building(100);
  expect(b.sqft).toBe(100);
});

test('Building abstract method', () => {
  class TestBuilding extends Building {}

  expect(() => new TestBuilding(200)).toThrowError(Error);
});
