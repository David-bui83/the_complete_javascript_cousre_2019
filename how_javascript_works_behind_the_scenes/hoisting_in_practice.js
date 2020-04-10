/****************************
* HOISTING
*/


// Functions
// Hoisting - let us use the function before declaring it
// Hoisting - only works with function statement 
calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);
}

// Does not work because this is a function expression
//retirement(1965);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// Variables

// Javacript knows there will be a variable with the same name but it does
// not know the value, which is why we get the undefined
console.log(age); // will get undefined 
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}
foo();

console.log(age);

