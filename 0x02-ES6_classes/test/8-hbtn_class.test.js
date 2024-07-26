const HolbertonClass = require('../8-hbtn_class');

test('HolbertonClass instantiation', () => {
  const hc = new HolbertonClass(12, "Mezzanine");
  expect(hc.size).toBe(12);
  expect(hc.location).toBe("Mezzanine");
});

test('HolbertonClass casting', () => {
  const hc = new HolbertonClass(12, "Mezzanine");
  expect(Number(hc)).toBe(12);
  expect(String(hc)).toBe("Mezzanine");
});
