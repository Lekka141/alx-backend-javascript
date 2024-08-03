import getListStudents from '../0-get_list_students';

describe('getListStudents', () => {
  it('should return the list of students', () => {
    expect.assertions(1);
    const expected = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
    const students = getListStudents();
    expect(students).toStrictEqual(expected);
  });
});
