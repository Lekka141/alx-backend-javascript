const EVCar = require('../100-evcar');
const Car = require('../10-car');

test('EVCar instantiation', () => {
  const evCar = new EVCar('Tesla', 'Electric', 'Blue', '300 miles');
  expect(evCar.brand).toBe('Tesla');
  expect(evCar.motor).toBe('Electric');
  expect(evCar.color).toBe('Blue');
  expect(evCar.range).toBe('300 miles');
});

test('EVCar cloneCar method', () => {
  const evCar = new EVCar('Tesla', 'Electric', 'Blue', '300 miles');
  const carClone = evCar.cloneCar();
  expect(carClone).toBeInstanceOf(Car);
  expect(carClone).not.toBeInstanceOf(EVCar);
});
