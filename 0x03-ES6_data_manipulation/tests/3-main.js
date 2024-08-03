import getListStudents from '../0-get_list_students';
import getStudentIdsSum from '../3-get_ids_sum';

describe('getStudentIdsSum', () => {
  it('should return the sum of student ids', () => {
    expect.assertions(1);
    const students = getListStudents();
    expect(getStudentIdsSum(students)).toBe(8);
  });
});
