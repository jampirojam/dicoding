let favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
 
[, , thirdFood ] = favorites;
 
console.log(thirdFood);

let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);

console.log();

// With Temp initialize
var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

console.log();

// Without Temp Initialize
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

console.log();

// default value
favorites = ["Seafood"];
[myFood, herFood] = favorites
 
console.log(myFood);
console.log(herFood);

console.log();

// define value
[myFood, herFood = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);