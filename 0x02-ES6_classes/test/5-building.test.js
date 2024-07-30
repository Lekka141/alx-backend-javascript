import Building from '../5-building.js';

test('Building instantiation', () => {
    const b = new Building(100);
    expect(b.sqft).toBe(100);
});
