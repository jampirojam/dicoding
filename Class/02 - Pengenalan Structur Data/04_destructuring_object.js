// Before ES6
/*
  const profile = {
      firstName: "John",
      lastName: "Doe",
      age: 18
    }
    
    const firstName = profile.firstName
    const lastName = profile.lastName
    const age = profile.age
    
    console.log(firstName, lastName, age)
*/

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}
 
// Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) 
// di sisi kiri dari operator assignment.
const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);

