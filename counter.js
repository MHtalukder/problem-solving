function createCounter(n) {
  let current = n;

  // Return a function that increments and returns the counter
  return function () {
    return current++; // Return the current value and increment it.
  };
}

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
