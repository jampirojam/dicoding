// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'notes.txt');

const note = fs.readFileSync(dir, 'UTF-8');
console.log(note);
