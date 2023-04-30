// EXAMPLE 1
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");


// EXAMPLE 2
let x = 50;

if (x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}

// EXAMPLE 3
let language = "French";
let greeting = "Selamat Pagi"

if (language === "English") {
    greeting = "Good Morning!";
} else if (language === "French") {
    greeting = "Bonjour!"
} else if (language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

// EXAMPLE 4
const isMember = false;
const discount = isMember ? 0.1 : 0; // called tenary
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)


// EXAMPLE 5
/*
    Number 0
    BigInt 0n
    String kosong seperti “” atau ‘’
    null
    undefined
    NaN, atau Not a Number
*/
let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}