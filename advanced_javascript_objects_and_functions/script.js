/******************************** 
* FUNCTION CONSTRUTOR 
*/ 

// Function constructor
//var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
//};
//
//// Function constructor to create object
//var Person = function(name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//
//
//Person.prototype.calculateAge = function(){
//    console.log(2016 - this.yearOfBirth);
//}
//
//Person.prototype.lastName = 'Smith';
//
//// Instanciation 
//// New operator create a new empty object and then a function is called
//var john = new Person('John', 1990, 'teacher');
//var jane = new Person('Jane', 1969, 'designer');
//var mark = new Person('Mark', 1948, 'retired');
//
//john.calculateAge();
//jane.calculateAge();
//mark.calculateAge();
//
//john.lastName = 'Black';
//console.log(john.lastName);
//console.log(jane.lastName);
//console.log(mark.lastName);

/********************************
* OBJECT.CREATE 
*/

// Object.create 
// object.create builds an object that inherites directly from the one that we pass into the first argument 
// benefit to object.create is that it allow objects to inherite complex properties in an easier way than prototypes
// because it allows us to specify which object properties should be a prototype
// Function contructor inherites from the contructor's prototype properties

//var personProto = {
//    calculateAge: function() {
//        console.log(2016 - this.yearOfBirth);
//    }
//}
//
//var john = Object.create(personProto);
//john.name = 'John';
//john.yearOfBirth = 1990;
//john.job = 'teacher';
//
//var jane = Object.create(personProto, {
//    name: { value: 'Jane'},
//    yearOfBirth: { value: 1969},
//    job: { value: 'designer'}
//});

/********************************
* PRIMITIVES VS OBJECTS
*/

//// Primitives
//var a = 23;
//var b = a;
//a = 46;
//
//console.log(a);
//console.log(b);
//
//// Objects
//var obj1 = {
//    name: 'John',
//    age: 26,
//}
//
//var obj2 = obj1;
//obj1.age = 30;
//
//console.log(obj1);
//console.log(obj2);
//
//// Functions
//var age = 27;
//var obj = {
//    name: 'Jonas',
//    city: 'Lisbon'
//}
//
//function change(a, b) {
//    a = 30;
//    b.city = 'San Francisco';
//}
//
//change(age, obj);
//
//console.log(age);
//console.log(obj.city);


/********************************
* PASSING FUNCTIONS AS ARGUMENTS
*/

//var years = [1990, 1965,1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for(var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge(el) {
//    return 2016 - el;
//}
//
//function isFullAge(el) {
//    return el >= 18;
//}
//
//function maxHeartRate(el) {
//    
//    if(el >= 18 && el <= 81){
//        return Math.round(106.9 - (0.67 * el));
//    } else {
//        return -1;
//    }
//    
//}
//
//
//var ages = arrayCalc(years, calculateAge);
//var fullAges = arrayCalc(ages, isFullAge);
//var rates = arrayCalc(ages, maxHeartRate);
//console.log(ages);
//console.log(fullAges);
//console.log(rates);


/********************************
* FUNCTIONS RETURNING FUNCTIONS
*/

//function interviewQuestions(job) {
//    if(job === 'designer') {
//        return function(name) {
//            console.log(name + ', can you please explain what UX design is?');
//        }
//    } else if (job === 'teacher') {
//        return function(name) {
//            console.log('What subject do you teach, ' +  name + '?');
//        }
//    } else {
//        return function(name) {
//            console.log('Hello ' + name + ', What do you do?');
//        }
//    }
//}
//
//var teacherQuestion = interviewQuestions('teacher');
//var  designerQuestion = interviewQuestions('designer');
//
//teacherQuestion('John');
//designerQuestion('John');
//designerQuestion('John');
//designerQuestion('Jane');
//designerQuestion('Mark');
//designerQuestion('Mike');
//
//interviewQuestions('teacher')('Mark'); // Calling the function right away


/********************************
* IIFE
*/

// IIFE - immediately invoke function - For data privacy

//function game() {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//}
//game();
//
//// IIFE turns a declaration into an expression
//// Make the elements inside the function private
//(function() {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//})();
//
////console.log(score); // Will get an error because score is not accessable from outside the iife
//
//(function(goodluck){
//    var score = Math.random() * 10;
//    console.log(score >= 5 - goodluck);
//})(5);

/********************************
* CLOSURES
*/

/*
CLOSURES SUMMARY
An inner function has always access to the vairable and parameters of its outer function, 
even after the outer function has returned
*/
//function retirement(retirementAge) {
//    var a = ' years left until retirement.';
//    return function(yearOfBirth) {
//        var age = 2016 - yearOfBirth;
//        console.log(retirementAge - age + a); 
//    }
//}
//
//var retirementUS = retirement(66);
//var retirementGermany = retirement(65);
//var retirementIceLand = retirement(67);
//
//
//retirementUS(1990);
//retirementGermany(1990);
//retirementIceLand(1990);
//
//// retirement(66)(1990); // This line is the same as the top two lines
//
//
//function interviewQuestions(job) {
//    return function(name) {
//        if(job === 'designer') {
//            console.log(name + ', can you please explain what UX designe is?');
//        } else if( job === 'teacher') {
//            console.log('What subject do you teach, ' + name + '?');
//        } else {
//            console.log('Hello' + name + ', what do you do?'); 
//        }
//    }
//}
//interviewQuestions('teacher')('John');


/********************************
* BIND, CALL AND APPLY
*/

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Laddies and gentlement! I\'m ' + this.name + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log( 'Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily', 
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// The call method allows one object to use another object methods
john.presentation.call(emily, 'friendly', 'afternoon');

// The apply method - is similar to the call method except it accept a single argument and array
//john.presentation.apply(emily, ['friendly', 'afternoon']);

// The bind method returns a function - allows us to preset parameters
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



var years = [1990, 1965,1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);






