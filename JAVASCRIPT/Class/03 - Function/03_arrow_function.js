// REGULAR
// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

// ARROW
const askHello = (greet) => {
    console.log(`${greet}!`)
}

const askName = (name) => {
    console.log(`Namamu siapa ${name}?`)
}

sayHello("Hello");
sayName("Ojam");

askHello("Hai juga");
askName("Ojam");

// ARROW 1 PARAM

const say = name => {
    console.log(`Nama saya ${name}`)
}

say("Leia");

const sayHell = () => {
    console.log("Selamat pagi semuanya!")
};

sayHell();

// WITHOUT CURLY BRACKETS
const haiName = name => console.log(`Nama saya ${name}`);
haiName("Leia");

const haiHello = () => console.log("Selamat pagi semuanya!");
haiHello();

const perkalian = (a, b) => a * b;
console.log(perkalian(3, 4));