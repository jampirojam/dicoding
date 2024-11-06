/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'input.txt');

// read data input
const readableStream = fs.createReadStream(dir, {
    highWaterMark: 15
});

const writeSomething = fs.createWriteStream(
    path.resolve(__dirname, 'output.txt')
);

String 

readableStream.on('readable', () => {
    try {
        writeSomething.write(`${readableStream.read()}\n`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
        console.log('Gagal membaca berkas');
        return;
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});