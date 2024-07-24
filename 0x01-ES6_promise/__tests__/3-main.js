import handleProfileSignup from '../3-all';
import * as utils from '../utils';

jest.mock('../utils');

test('handleProfileSignup logs success message', () => {
  utils.uploadPhoto.mockResolvedValue({ status: 200, body: 'photo-profile-1' });
  utils.createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  const consoleSpy = jest.spyOn(console, 'log');

  return handleProfileSignup().then(() => {
    expect(consoleSpy).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
    consoleSpy.mockRestore();
  });
});

test('handleProfileSignup logs error message on failure', () => {
  utils.uploadPhoto.mockRejectedValue(new Error('Error'));
  utils.createUser.mockRejectedValue(new Error('Error'));

  const consoleSpy = jest.spyOn(console, 'log');

  return handleProfileSignup().catch(() => {
    expect(consoleSpy).toHaveBeenCalledWith('Signup system offline');
    consoleSpy.mockRestore();
  });
});
