function filter(arr, fn) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
// example: 1
var arr1 = [0, 10, 20, 30];
var fn1 = function greaterThan10(n) {
    return n > 10;
};
console.log(filter(arr1, fn1)); // [20, 30]
// example: 2
var arr2 = [1, 2, 3];
var fn2 = function firstIndex(n, i) {
    return i === 0;
};
console.log(filter(arr2, fn2)); // [1]
// example: 3
var arr3 = [-2, -1, 0, 1, 2];
var fn3 = function plusOne(n) {
    return n + 1;
};
console.log(filter(arr3, fn3)); // [-2, 0, 1, 2]
