var createCounter = function (init) {
    var current = init;
    return {
        increment: function () { return ++current; },
        decrement: function () { return --current; },
        reset: function () { return (current = init); },
    };
};
// Example usage
var counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset()); // 5
