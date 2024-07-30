import handleProfileSignup from '../6-final-user';
import signUpUser from '../4-user-promise';
import uploadPhoto from '../5-photo-reject';

jest.mock('../4-user-promise');
jest.mock('../5-photo-reject');

test('handleProfileSignup handles multiple promises', () => {
  signUpUser.mockResolvedValue({ firstName: 'Bob', lastName: 'Dylan' });
  uploadPhoto.mockRejectedValue(new Error('bob_dylan.jpg cannot be processed'));

  return handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg').then(results => {
    expect(results).toEqual([
      { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
      { status: 'rejected', value: 'Error: bob_dylan.jpg cannot be processed' }
    ]);
  });
});
