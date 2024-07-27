import EVCar from '../100-evcar.js';
import Car from '../10-car.js';

test('EVCar instantiation', () => {
    const evCar = new EVCar('Tesla', 'Electric', 'Blue', '300 miles');
    expect(evCar.brand).toBe('Tesla');
    expect(evCar.motor).toBe('Electric');
    expect(evCar.color).toBe('Blue');
});

test('EVCar cloneCar method', () => {
    const evCar = new EVCar('Tesla', 'Electric', 'Blue', '300 miles');
    const carClone = evCar.cloneCar();
    expect(carClone).toBeInstanceOf(Car);
    expect(carClone).not.toBeInstanceOf(EVCar);
});
