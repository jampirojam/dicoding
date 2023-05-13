// NON IMMUTABLE
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
    names,
    newNamesWithExcMark,
});

// IMMUTABLE
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

// NOT RECOMMENDED
const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);

// RECOMENDED
const createUserWithNewLastNames = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastNames('Potter', user);

console.log(newUser);