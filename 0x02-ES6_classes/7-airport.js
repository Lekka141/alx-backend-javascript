/**
 * Represents an airport.
 */
export default class Airport {
    /**
   * Creates a new @see {@link Airport}.
   * @param {String} name - The name of the airport.
   * @param {String} code - The code of the airport.
   */
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    /**
   * Returns the code of the airport as the default string description.
   * @returns {String} The code of the airport.
   */
    get [Symbol.toStringTag]() {
        return this._code;
    }
}
