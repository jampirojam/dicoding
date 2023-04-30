let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// Menambah Array ke Indeks terakhir
myArray.push('JavaScript');
console.log(myArray);

// Menghapus Array Indeks terakhir
myArray.pop();
console.log(myArray);

// Menghapus Array Indeks pertama
myArray.shift();
console.log(myArray);

// Menambah Array ke Indeks pertama
myArray.unshift("Apple");
console.log(myArray);

// Menghapus indeks dan menjadikan empty value
delete myArray[1];
console.log(myArray);

// Menganti isi array
myArray[1] = "Ojam"
console.log(myArray);

// Menghapus berdasarkan indeks hingga berapa elemen
myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

// Menambah array 
myArray.splice(1, 0, 'February');
console.log(myArray);