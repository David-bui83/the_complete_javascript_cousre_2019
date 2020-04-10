/*******************************
* ARRAYS 
*/


// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// Arrays are zero base which means the first elements start at index 0
console.log(names[0]);
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben'; // changing value in the array

// Append array
names[3] = 'Mary'; // adding another value
names[names.length] = 'Dan';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue') // add element to the end of the array
john.unshift('Mr.'); // add element to the start of array
john.pop(); // automatically remove last element
john.shift(); // automatically remove first element
console.log(john);

john.indexOf(1990) // return the position -- is usually used to check if element exist in array

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);