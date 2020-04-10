/*
    MULTI-LINE COMMENT
*/

// SINGLE LINE COMMENT

/********************************
 * Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age); // Type coercion - javaScript automatically convert data from one type to anther

// Delcaring many variables on the same line
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation - changing the value of a variable
age = 'twenty eight'; 
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 var lastName = prompt('Eaht is his last Name?');
console.log(firstName + ' ' + lastName);