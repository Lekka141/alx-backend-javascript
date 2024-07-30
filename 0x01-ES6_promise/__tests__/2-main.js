import handleResponseFromAPI from '../2-then';

test('handleResponseFromAPI handles resolved promise', () => {
  const promise = Promise.resolve();
  return handleResponseFromAPI(promise).then(response => {
    expect(response).toEqual({ status: 200, body: 'success' });
  });
});

test('handleResponseFromAPI handles rejected promise', () => {
  const promise = Promise.reject();
  return handleResponseFromAPI(promise).catch(error => {
    expect(error instanceof Error).toBe(true);
  });
});
