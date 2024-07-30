import Pricing from '../4-pricing.js';
import Currency from '../3-currency.js';

test('Pricing instantiation', () => {
    const p = new Pricing(100, new Currency('EUR', 'Euro'));
    expect(p.amount).toBe(100);
    expect(p.currency).toBeInstanceOf(Currency);
});

test('Pricing displayFullPrice', () => {
    const p = new Pricing(100, new Currency('EUR', 'Euro'));
    expect(p.displayFullPrice()).toBe('100 Euro (EUR)');
});

test('Pricing convertPrice', () => {
    expect(Pricing.convertPrice(100, 1.2)).toBe(120);
});
