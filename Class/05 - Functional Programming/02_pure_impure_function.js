// IMPURE FUNCTION
let PI = 3.14;

const hitungLuasLingkarans = (jariJari) => {
    return PI * (jariJari * jariJari);
}

console.log(hitungLuasLingkarans(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah


const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});



// PURE FUNCTION
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96


const createPersonWithAges = (age, person) => {
    return { ...person, age };
};

const persons = {
    name: 'Bobo'
};

const newPersons = createPersonWithAges(18, persons);

console.log({
    persons,
    newPersons
});