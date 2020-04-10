/************************************
* Truthy and falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height; // falsy been has not be defined - undefined

height = 0; // truthy because variable is defined

if(height || height === 0) { // check if the variable is defined
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defiend');
}

// Equality operators
if(height == '23'){ // JavaScript converts value to string - type coercion
    console.log('The == operator does type coercion!');
}

// best to use === because it is strict in data type

