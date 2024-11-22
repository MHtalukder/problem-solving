function filter<T>(arr: T[], fn: (value: T, index: number) => boolean): T[] {
  const filteredArr: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

// example: 1
const arr1: number[] = [0, 10, 20, 30];
const fn1 = function greaterThan10(n: number): boolean {
  return n > 10;
};
console.log(filter(arr1, fn1)); // [20, 30]

// example: 2
const arr2: number[] = [1, 2, 3];
const fn2 = function firstIndex(n: number, i: number): boolean {
  return i === 0;
};
console.log(filter(arr2, fn2)); // [1]

// example: 3
const arr3: number[] = [-2, -1, 0, 1, 2];
const fn3 = function plusOne(n: number): boolean {
  return n + 1;
};
console.log(filter(arr3, fn3)); // [-2, 0, 1, 2]
