import HolbertonCourse from '../2-hbtn_course.js';

test('HolbertonCourse instantiation', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(course.name).toBe('ES6');
    expect(course.length).toBe(1);
    expect(course.students).toEqual(['Bob', 'Jane']);
});
