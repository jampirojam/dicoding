// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

const memoryInformation = process.memoryUsage();

const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);

console.log(memoryInformation);