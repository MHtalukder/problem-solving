function customReducer<T, U>(nums: T[], fn: (accum: U, curr: T) => U, init: U) : U {
    let val: U = init;
    for(let i =0; i<nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}


// example: 1
const nums1: number[] = [1, 2, 3, 4];
const fn1 = (accum: number, curr: number) => accum + curr;
const init1: number = 0;
console.log(customReducer(nums1, fn1, init1);  // 10


// example: 2
const nums2: number[] = [1, 2, 3, 4];
const fn2 = (accum: number, curr: number) => accum + curr*curr;
const init2 = 100;
console.log(customReducer(nums2, fn2, init2); // 130

// example: 3
const nums3: number[] = []
const fn3 = (accum: number, curr: number) => 0;
const init3: number = 25;
console.log(customReducer(nums3, fn3, init3)); // 25






