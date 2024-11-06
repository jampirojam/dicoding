import _ from 'lodash';

const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);

sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sum);

sum = _.sum(myArray);
 
console.log(sum);