const initializeRooms = require('../1-make_classrooms');
const ClassRoom = require('../0-classroom');

test('initializeRooms returns an array of ClassRoom objects', () => {
  const rooms = initializeRooms();
  expect(rooms).toHaveLength(3);
  expect(rooms[0]).toBeInstanceOf(ClassRoom);
  expect(rooms[0]._maxStudentsSize).toBe(19);
  expect(rooms[1]._maxStudentsSize).toBe(20);
  expect(rooms[2]._maxStudentsSize).toBe(34);
});
