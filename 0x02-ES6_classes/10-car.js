/**
 * Represents a car.
 */
export default class Car {
  /**
   * Creates a new @see {@link Car}.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor of the car.
   * @param {String} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
