const Airport = require('../7-airport');

test('Airport instantiation', () => {
  const airport = new Airport('San Francisco Airport', 'SFO');
  expect(airport.name).toBe('San Francisco Airport');
  expect(airport.code).toBe('SFO');
});

test('Airport toString', () => {
  const airport = new Airport('San Francisco Airport', 'SFO');
  expect(airport.toString()).toBe('[object SFO]');
});
