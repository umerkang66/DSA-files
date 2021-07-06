'use strict';

const addTo80 = number => number + 80;
addTo80(35);

const memoizedAddTo80 = () => {
  const cache = {};

  return number => {
    if (cache[number]) return cache[number];
    else return (cache[number] = number + 80);
  };
};

const memoized = memoizedAddTo80();
memoized(5);
memoized(5);
memoized(5);

// FIBONACCI BY RECURSIVE: MAKING IT O(N)
const fibonacci = n => {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(15));

const fibonacciMaster = () => {
  const cache = {};

  return function fib(n) {
    if (cache[n]) return cache[n];
    if (n < 2) return n;
    else return (cache[n] = fib(n - 2) + fib(n - 1));
  };
};

const fibonacciMemoized = fibonacciMaster();
console.log(fibonacciMemoized(15));
