import getListStudents from '../0-get_list_students';
import updateStudentGradeByCity from '../4-update_grade_by_city';

describe('updateStudentGradeByCity', () => {
  it('should update grades for students in San Francisco', () => {
    expect.assertions(1);
    const updatedStudents = updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]);
    const expected = [
      {
        id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86,
      },
      {
        id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97,
      },
    ];
    expect(updatedStudents).toStrictEqual(expected);
  });

  it('should set grade to N/A if not in newGrades', () => {
    expect.assertions(1);
    const updatedStudents = updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }]);
    const expected = [
      {
        id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A',
      },
      {
        id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97,
      },
    ];
    expect(updatedStudents).toStrictEqual(expected);
  });
});
