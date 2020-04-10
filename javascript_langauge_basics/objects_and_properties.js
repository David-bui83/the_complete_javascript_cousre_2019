/**********************************
* OBJECTS AND PROPERTIES
*/

// Creating object with literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1999,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.firstName); // Using dot notation to access property
console.log(john['lastName']); // Using bracket notation to access property
var x = 'birthYear';
console.log(john[x]); // Another way to access property


john.job = 'desinger'; // Mutating data with dot notation
john['isMarried'] = true; // Mutating data with bracket notation

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lsatName'] = 'Smith';
console.log(jane);