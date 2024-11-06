// Object = key-value
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

// Ubah value object
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

console.log(spaceship);

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
delete spaceship.manufacturer;

const newSpaceship = spaceship
console.log(newSpaceship);