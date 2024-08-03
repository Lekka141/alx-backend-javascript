import { queryAPI, weakMap } from '../100-weak';

describe('queryAPI', () => {
  const endpoint = { protocol: 'http', name: 'getUsers' };

  it('should initialize and track calls correctly', () => {
    expect.assertions(2);
    expect(() => {
      queryAPI(endpoint);
      queryAPI(endpoint);
      queryAPI(endpoint);
      queryAPI(endpoint);
    }).not.toThrow();
    expect(weakMap.get(endpoint)).toBe(4);
  });

  it('should throw error when call count exceeds limit', () => {
    expect.assertions(1);
    expect(() => {
      queryAPI(endpoint);
    }).toThrow('Endpoint load is high');
  });
});
