import ClassRoom from '../0-classroom.js';

test('ClassRoom instantiation', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
});
