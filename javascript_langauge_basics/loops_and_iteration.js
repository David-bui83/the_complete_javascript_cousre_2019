/******************************
* LOOPS AND ITERATION
*/

// for loop
for(var i = 0; i < 10; i++) {
    console.log(i);
}
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 false, exit the loop!

for(var i = 1; i <= 20; i += 2) {
    console.log(i)
}
// log i up to and including 20 

var john = ['John', 'Smith', 1990, 'designer', false];
for(var i = 0; i < john.length; i++) {
    console.log(john[i]);
}


// while loop
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}

// continue and break statements
for(var i = 0; i < john.length; i++) {
    if( typeof john[i] !== 'string') continue; // when encounter something that is not a string, skip and continue to the next
    console.log(john[i]);
    
}// continue and break statements
for(var i = 0; i < john.length; i++) {
    if( typeof john[i] !== 'string') continue; // when encounter something that is not a string, break and exit the loop
    console.log(john[i]);
}

// Looping backwards
for(var i = john.length; i >= 0; i--) {
    console.log(john[i]);
}