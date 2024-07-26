const { HolbertonClass, StudentHolberton, listOfStudents } = require('../9-hoisting');

test('HolbertonClass and StudentHolberton instantiation', () => {
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);

  expect(student1.fullStudentDescription).toBe('Guillaume Salva - 2020 - San Francisco');
  expect(student2.fullStudentDescription).toBe('John Doe - 2020 - San Francisco');
});
