function map<T, U>(arr: T[], fn: (value: T, index: number) => U): U[] {
  const res: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
}

// Example 1
const arr1 = [1, 2, 3];
const plusOne = function (n: number) {
  return n + 1;
};
console.log(map(arr1, plusOne));

// Example 2
const arr2 = [1, 2, 3];
const plusI = function (n: number, i: number) {
  return n + i;
};
console.log(map(arr2, plusI));

// Example 3
const arr3 = [1, 2, 3];
const constant = function () {
  return 42;
};
console.log(map(arr3, constant));
