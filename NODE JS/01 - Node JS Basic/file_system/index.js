const fs = require('fs');

// use callback
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile('./todo.txt', 'UTF-8', fileReadCallback); // fail 
fs.readFile('./file_system/todo.txt', 'UTF-8', fileReadCallback); // success

// alternative
const data = fs.readFileSync('./file_system/todo.txt', 'UTF-8');
console.log(data);