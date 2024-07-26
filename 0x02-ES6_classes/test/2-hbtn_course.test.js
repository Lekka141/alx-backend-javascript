const HolbertonCourse = require('../2-hbtn_course');

test('HolbertonCourse instantiation', () => {
  const course = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
  expect(course.name).toBe("ES6");
  expect(course.length).toBe(1);
  expect(course.students).toEqual(["Bob", "Jane"]);
});

test('HolbertonCourse attribute validation', () => {
  expect(() => new HolbertonCourse("ES6", "1", ["Bob", "Jane"])).toThrowError(TypeError);
  expect(() => new HolbertonCourse(123, 1, ["Bob", "Jane"])).toThrowError(TypeError);
  expect(() => new HolbertonCourse("ES6", 1, "Bob")).toThrowError(TypeError);
});
