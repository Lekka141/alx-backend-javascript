const Currency = require('../3-currency');

test('Currency instantiation', () => {
  const currency = new Currency('$', 'Dollars');
  expect(currency.code).toBe('$');
  expect(currency.name).toBe('Dollars');
});

test('Currency displayFullCurrency', () => {
  const currency = new Currency('$', 'Dollars');
  expect(currency.displayFullCurrency()).toBe('Dollars ($)');
});
