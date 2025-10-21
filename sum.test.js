const sum = require('./sum');
test('adds 1 + 2 = 3', () => { // définit un test.
  expect(sum(1, 2)).toBe(3); // on attend que le résultat soit 3.
});
