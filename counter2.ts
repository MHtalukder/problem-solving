type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

const createCounter = (init: number): Counter => {
  let current = init;

  return {
    increment: (): number => ++current,
    decrement: (): number => --current,
    reset: (): number => (current = init),
  };
};

// Example usage
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset()); // 5
