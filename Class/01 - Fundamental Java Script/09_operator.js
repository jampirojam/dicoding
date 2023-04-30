// ASSIGNMENT

let x = 10;
let y = 5

console.log(x);
console.log(y);
console.log("+");
x += y; // artinya -> x = x + y;
console.log(x);
console.log(y);
console.log("-");
x -= y; // artinya -> x = x - y;
console.log(x);
console.log(y);
console.log("x");
x *= y; // artinya -> x = x * y;
console.log(x);
console.log(y);
console.log(":");
x /= y; // artinya -> x = x / y;
console.log(x);
console.log(y);
console.log("%");
x %= y; // artinya -> x = x % y;
console.log(x);

// COMPARISON

console.log(x < y);
console.log(x > y);

// sama (==) identik (===)
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// LOGICAL

let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false