function customReducer(nums, fn, init) {
    var val = init;
    for (var i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}
// example: 1
var nums1 = [1, 2, 3, 4];
var fn1 = function (accum, curr) { return accum + curr; };
var init1 = 0;
console.log(customReducer(nums1, fn1, init1)); // 10
// example: 2
var nums2 = [1, 2, 3, 4];
var fn2 = function (accum, curr) { return accum + curr * curr; };
var init2 = 100;
console.log(customReducer(nums2, fn2, init2)); // 130
// example: 3
var nums3 = [];
var fn3 = function (accum, curr) { return 0; };
var init3 = 25;
console.log(customReducer(nums3, fn3, init3)); // 25
