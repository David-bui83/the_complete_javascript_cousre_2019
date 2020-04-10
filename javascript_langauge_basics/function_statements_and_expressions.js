/************************************
* FUNCTION STATEMENTS AND EXPRESSIONS 
*/

//// Function declaration
//function whatDoYouDo(job, firstName) {}


// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code'; // Don't need the break keyword because returns automatically exits the function
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beatiful websites';
        default:
            return firstName + ' does something else';
    }  
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));


// Statements don't produce immediate results
// Expressions produce results