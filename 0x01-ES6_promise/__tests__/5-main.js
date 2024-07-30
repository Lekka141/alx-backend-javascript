import uploadPhoto from '../5-photo-reject';

test('uploadPhoto returns a rejected promise with an error message', () => {
  return uploadPhoto('guillaume.jpg').catch(error => {
    expect(error).toEqual(new Error('guillaume.jpg cannot be processed'));
  });
});
