import Car from './10-car.js';

/**
 * Represents an electric car.
 * @extends Car
 */
export default class EVCar extends Car {
  /**
   * Creates a new @see {@link EVCar}.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor of the car.
   * @param {String} color - The color of the car.
   * @param {String} range - The range of the car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
