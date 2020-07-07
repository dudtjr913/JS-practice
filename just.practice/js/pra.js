var a = 1;
var b = a;

console.log(a, b); // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b); // 1  10
console.log(a === b); // false
