var createCounter = function (init) {
  let current: init;
  return {
    increment: function () {
      this.current++;
    },
    decrement: function () {
      this.current--;
    },
    reset: function () {
      this.current = init;
    },
  };
};

var counter = createCounter(5);

console.log(counter.current); // Output: 10
