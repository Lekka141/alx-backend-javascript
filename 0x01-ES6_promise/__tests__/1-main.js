import getFullResponseFromAPI from '../1-promise';

test('getFullResponseFromAPI returns a successful response', () => {
  return getFullResponseFromAPI(true).then(response => {
    expect(response).toEqual({ status: 200, body: 'Success' });
  });
});

test('getFullResponseFromAPI returns an error response', () => {
  return getFullResponseFromAPI(false).catch(error => {
    expect(error).toEqual(new Error('The fake API is not working currently'));
  });
});
