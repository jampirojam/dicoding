let numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);

numberSet.delete(4);

console.log(numberSet);

const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

delete artistsAndSongs["Keyakizaka46"];

console.log(artistsAndSongs);