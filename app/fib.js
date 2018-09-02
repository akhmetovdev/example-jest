const fib = number => {
  if (number <= 1) {
    return 1;
  }

  return fib(number - 1) + fib(number - 2);
};

module.exports = fib;
