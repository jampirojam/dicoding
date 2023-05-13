// CALLBACK USING MAP
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });

console.log(newArray);

// FILTER
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

// REDUCE
const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

// SOME
const array = [100, 342, 13, 464, 54];
const even = array.some(element => element % 2 === 0);

console.log(even);

// FIND
const findJames = students.find(student => student.name === 'James');
console.log(findJames);

// SORT
/*
    Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result 
    yaitu negatif (-), 0, dan positif (+).

    Jika, negative maka `a` akan diletakkan sebelum `b`
    Jika, positive maka `b` akan diletakkan sebelum `a`
    Jika, 0 maka tidak ada perubahan posisi.
*/
console.log(array.sort());
const compareNumber = (a, b) => {
    return a - b;
};
const sorting = array.sort(compareNumber);
console.log(sorting);

// EVERY
const scores = [70, 85, 90];
const minimumScore = 75;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

// FOREACH
// imperative version
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}

// declarative
names.forEach((name) => {
    console.log(`Hello, ${name}!`);
});


// foreach cannot using "limiter like break and continue"
for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Jeff') continue; // Bisa!

    console.log(`Hello, ${names[i]}!`);
}

names.forEach((name) => {
    if (name === 'Jeff') // continue; // Tidak Bisa!
    console.log(`Hello, ${name}`);
});