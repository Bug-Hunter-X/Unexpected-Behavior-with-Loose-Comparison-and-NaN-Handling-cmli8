function foo(x) {
  if (Number.isNaN(x)) {
    return 0; 
  } else if (x === null) {
    return 0;
  } else if (x > 10) {
    return 2 * x;
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // 0
console.log(foo(12)); // 24
console.log(foo(5)); // 6
console.log(foo(NaN)); // 0