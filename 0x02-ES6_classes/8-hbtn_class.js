/**
 * Represents a Holberton class.
 */
export default class HolbertonClass {
    /**
   * Creates a new @see {@link HolbertonClass}.
   * @param {Number} size - The size of the class.
   * @param {String} location - The location of the class.
   */
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    /**
   * Returns the size or location of the class based on the context.
   * @param {String} hint - The type of operation ('number' or 'string').
   * @returns {Number|String} The size or location of the class.
   */
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this._size;
        }
        if (hint === 'string') {
            return this._location;
        }
        return this;
    }
}
