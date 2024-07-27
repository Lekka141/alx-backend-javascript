console.log('Before hoisting: ', ClassRoom);

import ClassRoom from '../0-classroom.js';

console.log('After hoisting: ', ClassRoom);

test('Hoisting test', () => {
    expect(ClassRoom).toBeDefined();
});
