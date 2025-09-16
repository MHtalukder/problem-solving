function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function replaceNonCoprimes(nums) {
  const stack = [];

  for (let num of nums) {
    stack.push(num);

    while (
      stack.length > 1 &&
      gcd(stack[stack.length - 1], stack[stack.length - 2]) > 1
    ) {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(lcm(a, b));
    }
  }

  return stack;
}

// Example
console.log(replaceNonCoprimes([6, 4, 3, 2, 7, 6, 2])); 
// Output: [12, 7, 6]
