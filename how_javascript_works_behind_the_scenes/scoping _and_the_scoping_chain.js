/********************************
* SCOPING AND THE SCOPING CHAIN
*/

/*
- Scoping answers the question "where can we access a certain variable?"
- Each new function creates a scope: the space/enverionment, in which the 
variables is defines are accessible.
- Lexical scoping: a function that is lexically within another function gets 
access to the scope of the outer function
*/

//// Scope Chain -- only works from child to parent, not parent to child
//// Global scope [VOglobal] -- This is the global scope
//var a = 'Hello!';
//first(); 
//
//function first() {
//    var b = 'Hi!';
//    second(); // first() scope [VO1] + [VOglobal] // this is the local scope // it can access the global
//              // scope 
//    function second() {
//        var c = 'Hey!';
//        console.log(a + b + c); // second() scope [VO2] + [VO1] + [VOglobal] // this is lexcil scope 
//                                // it has access to the parent function and the global scope
//    }
//    
//}

// Execution stack - order in which functions are called
var a = 'Hello!';
first(); 

function first() {
    var b = 'Hi!';
    second(); 
    
    function second() {
        var c = 'Hey!';
        third();
    }
    
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

// Order in which functions are called DO NOT EQUAL order which the functions are created