const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200
}

const isCoffeeMachineReady = true;

// can't use this for multiple export
// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

// multiple export
module.exports = {
  coffeeStock,
  isCoffeeMachineReady
};

console.log(module)