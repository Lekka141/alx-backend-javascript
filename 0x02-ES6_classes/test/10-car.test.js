const Car = require('../10-car');

test('Car instantiation', () => {
  const car = new Car('Toyota', 'V8', 'Red');
  expect(car.brand).toBe('Toyota');
  expect(car.motor).toBe('V8');
  expect(car.color).toBe('Red');
});

test('Car cloneCar method', () => {
  const car = new Car('Toyota', 'V8', 'Red');
  const carClone = car.cloneCar();
  expect(carClone).toBeInstanceOf(Car);
});
