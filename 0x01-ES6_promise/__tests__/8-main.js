import divideFunction from '../8-try';

test('divideFunction divides numbers correctly', () => {
  expect(divideFunction(10, 2)).toBe(5);
});

test('divideFunction throws error when dividing by zero', () => {
  expect(() => divideFunction(10, 0)).toThrow('cannot divide by 0');
});
