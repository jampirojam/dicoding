// Undefined
let undefinedType;
console.log(typeof(undefinedType));

// Number
let numberOne = 10;
console.log(typeof(numberOne))

let numberTwo = 17.25;
console.log(typeof(numberTwo))

// BigInt
// Selalu ada n di akhir
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof(bigNumber))

const bigIntButSmall = 7n;
console.log(bigIntButSmall)

// String
let greet = "Hello";
console.log(typeof(greet))

const question = '"What do you think of JavaScript?" I asked';
console.log(question)

const answerBackTick = `"I think it's awesome!" he answered confidently`;
console.log(answerBackTick)

const answerBackSlash = '"I think it\'s awesome!" he answered confidently';
console.log(answerBackSlash)

// Boolean
let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

// Null
let someLaterData = null;
console.log(someLaterData);

// Symbol
// Symbol disebut sebagai identifier yang unik 
// karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, 
// kedua nilainya tetap dianggap berbeda
const id = Symbol("id");
console.log(id);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

