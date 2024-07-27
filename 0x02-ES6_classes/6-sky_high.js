import Building from './5-building.js';

/**
 * Represents a sky high building.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
    /**
   * Creates a new @see {@link SkyHighBuilding}.
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    }

    get floors() {
        return this._floors;
    }

    set floors(value) {
        this._floors = value;
    }

    /**
   * Displays an evacuation warning message.
   * @returns {String} The evacuation warning message.
   */
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}
