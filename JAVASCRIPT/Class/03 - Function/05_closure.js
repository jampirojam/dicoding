function init() {
    const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init

    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

init();

// lexical closure
function newInit() {
    const name = 'Obi Wan';

    function greet() {
        console.log(`Halo, ${name}`);
    }

    return greet;
}

const myFunction = newInit();
myFunction();

let counter = 0;

const add = () => {
    return ++counter;
}

console.log(add());
console.log(add());
counter = 23;
console.log(add());

const tambah = () => {
    let counter = 0;
      return () => {
        return ++counter;
    };
  }
  
  const addCounter = tambah();
  
  console.log(addCounter());
  console.log(addCounter());
  console.log(addCounter());

  function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);