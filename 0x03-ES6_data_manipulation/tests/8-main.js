import cleanSet from '../8-clean_set';

describe('cleanSet', () => {
  it('should return a cleaned set', () => {
    expect.assertions(1);
    expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon')).toBe('jovi-aparte-appetit');
  });
});
