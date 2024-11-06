/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Tulis kode di bawah ini
const minimal = (a, b) => a < b || a === b ? a : b;

console.log(minimal(1, 4)); // output: 1
console.log(minimal(3, 2)); // output: 2
console.log(minimal(3, 3)); // output: 3

function findIndex(arr, num) {
    let newArr = new Array();
    newArr = arr;

    for (let i = 0; i < newArr.length; i++) {
        if (num === newArr[i]) {
            return i;
        }
    }
    
    return -1;
}

let numbers = new Array();
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

console.log(findIndex(numbers, 3));
console.log(findIndex(numbers, 6));
console.log(findIndex(numbers, 5));