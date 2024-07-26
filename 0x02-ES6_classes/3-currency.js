/**
 * Represents a currency.
 */
export default class Currency {
  /**
   * Creates a new @see {@link Currency}.
   * @param {String} code - The code of the currency.
   * @param {String} name - The name of the currency.
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Displays the full currency description.
   * @returns {String} The full currency description.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
