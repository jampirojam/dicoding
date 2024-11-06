// import different folder
const coffee = require('./data/coffee.js');
const { firstName, lastName } = require('./data/user.js');

const user = firstName + " " + lastName;
const coffeeName = coffee.name;
const coffeePrice = coffee.price;

const activity = user + " drink " + coffeeName + " at Coffee Jam with price IDR." + coffeePrice;

module.exports = activity;