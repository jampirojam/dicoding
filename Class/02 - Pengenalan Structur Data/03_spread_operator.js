const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// Operator biasa
console.log(favorites);
// Spread operator
console.log(...favorites);

const others = ["Cake", "Pie", "Donut"];

// Array Terpisah
let allFavorites = [favorites, others];
console.log(allFavorites);

// Penggabungan Array
allFavorites = [...favorites, ...others];
console.log(allFavorites);