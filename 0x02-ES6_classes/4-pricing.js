import Currency from './3-currency.js';

/**
 * Represents a pricing.
 */
export default class Pricing {
    /**
   * Creates a new @see {@link Pricing}.
   * @param {Number} amount - The amount.
   * @param {Currency} currency - The currency.
   */
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        if (typeof value !== 'number') {
            throw new TypeError('amount must be a number');
        }
        this._amount = value;
    }

    get currency() {
        return this._currency;
    }

    set currency(value) {
        if (!(value instanceof Currency)) {
            throw new TypeError('currency must be a Currency');
        }
        this._currency = value;
    }

    /**
   * Displays the full price.
   * @returns {String} The full price.
   */
    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    /**
   * Converts the price.
   * @param {Number} amount - The amount.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} The converted price.
   */
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number') {
            throw new TypeError('amount must be a number');
        }
        if (typeof conversionRate !== 'number') {
            throw new TypeError('conversionRate must be a number');
        }
        return amount * conversionRate;
    }
}
