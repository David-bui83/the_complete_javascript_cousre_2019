/////////////////////////////////
// Lecture: The this keyword

//console.log(this);

//calculateAge(1985);
//function calculateAge(year) {
//    console.log(2016 - year);
//    console.log(this); // get the window object because this function is in the global scope
//}


// Regular functions belong to the window object 
// methods belong object

// The this keyword only become something when the method is called

var john = {
    name: 'John', 
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // get the john object because it is called by the john object
        console.log(2016 - this.yearOfBirth);
        
//        function innerFunction() {
//            console.log(this); // back to the window object because it is a regular function
//        }
//        innerFunction();
    }
}

john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

// Method barrowing 
mike.calculateAge = john.calculateAge;
mike.calculateAge();