const fib = require('./fib');

test('fib', () => {
  for (let i = 0; i < 2; i++) {
    expect(fib(i)).toBe(1);
  }

  expect(fib(3)).toBe(3);
  expect(fib(4)).toBe(5);
  expect(fib(5)).toBe(8);
});
