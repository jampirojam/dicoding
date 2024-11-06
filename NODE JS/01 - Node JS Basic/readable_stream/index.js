const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, 'article.txt');
 
const readableStream = fs.createReadStream(dir, {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
        console.log('Gagal membaca berkas');
        return;
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});