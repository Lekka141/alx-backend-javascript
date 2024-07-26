/**
 * Represents a building.
 */
export default class Building {
  /**
   * Creates a new @see {@link Building}.
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
