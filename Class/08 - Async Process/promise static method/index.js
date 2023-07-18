// return all process
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
    .then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik

const promise11 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise21 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
const promise31 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise11, promise21, promise31])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // ups


// return fastest process
const race1 = new Promise((resolve) => setTimeout(() => resolve(1), 5000));
const race2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000)); // output
const race3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([race1, race2, race3])
  .then((value) => console.log(value)); // 2 setelah 1 detik

// return all process even the process is fail
const settle1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const settle2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const settle3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([settle1, settle2, settle3])
.then((results) => console.log(results));

// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected