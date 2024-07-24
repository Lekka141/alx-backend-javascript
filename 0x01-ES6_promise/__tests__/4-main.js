import signUpUser from '../4-user-promise';

test('signUpUser returns a resolved promise with user details', () => {
  return signUpUser('Bob', 'Dylan').then(user => {
    expect(user).toEqual({ firstName: 'Bob', lastName: 'Dylan' });
  });
});
