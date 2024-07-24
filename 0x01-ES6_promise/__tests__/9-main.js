import guardrail from '../9-try';
import divideFunction from '../8-try';

test('guardrail processes a successful function', () => {
  const result = guardrail(() => divideFunction(10, 2));
  expect(result).toEqual([5, 'Guardrail was processed']);
});

test('guardrail processes a function that throws an error', () => {
  const result = guardrail(() => divideFunction(10, 0));
  expect(result).toEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
});
