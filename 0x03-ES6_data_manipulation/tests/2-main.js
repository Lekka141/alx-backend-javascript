import getListStudents from '../0-get_list_students';
import getStudentsByLocation from '../2-get_students_by_loc';

describe('getStudentsByLocation', () => {
  it('should return students in San Francisco', () => {
    expect.assertions(1);
    const students = getListStudents();
    const expected = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
    expect(getStudentsByLocation(students, 'San Francisco')).toStrictEqual(expected);
  });
});
