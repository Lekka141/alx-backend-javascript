const ClassRoom = require('../0-classroom');

test('ClassRoom instantiation', () => {
  const room = new ClassRoom(10);
  expect(room._maxStudentsSize).toBe(10);
});
