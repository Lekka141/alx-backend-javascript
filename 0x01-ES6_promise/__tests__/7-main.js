import loadBalancer from '../7-load_balancer';

test('loadBalancer returns the first resolved value', () => {
  const chinaDownload = new Promise(resolve => setTimeout(() => resolve('China'), 100));
  const USDownload = new Promise(resolve => setTimeout(() => resolve('US'), 50));

  return loadBalancer(chinaDownload, USDownload).then(value => {
    expect(value).toBe('US');
  });
});
