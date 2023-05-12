function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4));

function morning() {
    console.log("Good Morning!")
}

morning();

greeting("Ali", "Indonesia");

function greeting(name, language) {
    if (language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

// expression function
const newGreeting = function (name, language) {
    if (language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(newGreeting("Ojam", "English"));