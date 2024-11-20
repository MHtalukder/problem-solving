function map(arr, fn) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i));
    }
    return res;
}
// Example 1
var arr1 = [1, 2, 3];
var plusOne = function (n) {
    return n + 1;
};
console.log(map(arr1, plusOne));
// Example 2
var arr2 = [1, 2, 3];
var plusI = function (n, i) {
    return n + i;
};
console.log(map(arr2, plusI));
// Example 3
var arr3 = [1, 2, 3];
var constant = function () {
    return 42;
};
console.log(map(arr3, constant));
