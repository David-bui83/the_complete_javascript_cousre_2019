////////////////////////////////////////////////
/// Lecture: Blocks an IIFEs
// Use for data privacies


//// ES6 -> IIFE
//{
//    const a = 1;
//    let b = 2;
//}
//
//
//
//
//// ES5 -> IIFE
//(funciton(){
//    var c = 3;
// })()


////////////////////////////////////////////////
/// Lecture: Strings in ES6 / ES2015

//let firstName = 'john';
//let lastName = 'Smith';
//const yearOfBirth = 1990;
//function calcAge(year) {
//    return 2016 - year;
//}
//
//// ES5
//console.log("this is" + firstName + ' ' + lastName + ' He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
//
//// ES6 - Template literal 
//console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);
//
//const n = `${firstName} ${lastName}`;
//console.log(n.startsWith('j'));  // true
//console.log(n.endsWith('th'));  // true
//console.log(n.endsWith('sm'));  // false
//console.log(n.includes(' ')); // true -> space 
//console.log(firstName.repeat(5)); // repeat
//console.log(`{firstName} `.repeat(5)) // repeat with a space

////////////////////////////////////////////////
/// Lecture: Arrow Funcitons: Basics

const years = [1990, 1985,1983,1997]

// ES5
var ages5 = years.map(function(el){
    return 2016 - el
});
console.log(ages5)

//ES6
const age6 = years.map(el => 2016 - el);

ages6 = years.map((el,index)=>{`Age element ${index + 1}: ${2016 - el}.`});
console.log(age6);

ages6 = years.map((el,index)=>{
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6)

////////////////////////////////////////////////
/// Lecture: Arrow Functions: Lexical 'this' keyword
// Arrow function don't get its own 'this' key word

// ES5
//var box5 = {
//    color: 'green',
//    position: 1,
//    clickMe: function(){
//        var self = this; 
//        document.querySelector('.green').addEventListener('click',function(){
//            var str = "This is box number" + self.position + ' and it is ' + self.color;
//            alert(str);
//        });
//    }
//}
//box5.clickMe();

// ES6
//const box6 = {
//    color: 'green',
//    position: 1,
//    clickMe: function(){
//        document.querySelector('.green').addEventListener('click',()=>{
//            const str = `This is box number ${this.position} and it is color ${this.color}.`
//            alert(str);
//        })
//    }
//}
//box6.clickMe()

// ES6 -> points to the browser object
//const box6 = {
//    color: 'green',
//    position: 1,
//    clickMe: ()=>{
//        document.querySelector('.green').addEventListener('click',()=>{
//            const str = `This is box number ${this.position} and it is color ${this.color}.`
//            alert(str);
//        })
//    }
//}
//box6.clickMe()

function Person(name){
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends){
    
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this)); // bind 'this' allows function to point to this
    console.log(arr);
}

var friends = ['Bob', 'Jans', 'Mark'];

new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends2){
    let arr = friends2.map(el=> `${this.name} is friends with ${el}.`);
    console.log(arr)
}

var friends2 = ['Mike', 'Hope', 'Dan']

new Person('Jim').myFriends6(friends2)

////////////////////////////////////////////////
/// Lecture: Dssctructuring

// ES5
var john = ['john',26];
//var name = john[0]
//var age = [0]

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age)

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement)

////////////////////////////////////////////////
/// Lecture: Arrays in ES6 / ES2015

const boxes = document.querySelectorAll('.box');

// ES5
//var boxesArr5 = Array.prototype.slice.call(boxes);
//boxesArr5.forEach(function(cur){
//    cur.style.backgroundColor = 'dodgerblue';
//})

// ES6
const boxesArr6 = Array.from(boxes);
//boxes.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue')

// ES5 
//for(var i = 0; i < boxesArr5.length; i++){
//    if(boxesArr5[i].className === 'box blue'){
//        continue
//    }
//    boxesArr5[i].textContent = 'I changed to blue!';
//}

// ES6
for(const cur of boxesArr6){
//    if(cur.className === 'box blue'){
//        continue
//    }
    if(cur.className.includes('blue')){
        continue;
    }
    
    cur.textContent = 'I changed to blue!';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full  = ages.map(function(cur){
    return cur >= 18;
})

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

////////////////////////////////////////////////
/// Lecture: The Spread Operator

function addfourAges(a, b, c, d){
    return a + b + c + d
}

var sum1 = addfourAges(18, 30, 12, 21);
console.log(sum1)

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addfourAges.apply(null,ages);
console.log(sum2);

// ES6
const sum3 = addfourAges(...ages);
console.log(sum3)


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith,...familyMiller]; // Combining two arrays
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes2 = document.querySelectorAll('.box');

const all = [h,...boxes2];
Array.from(all).forEach(cur => cur.style.color='purple');

////////////////////////////////////////////////
/// Lecture: Rest Parameters

// ES5
//function isFullAge5(limit) {
//    var argsArr = Array.prototype.slice.call(arguments, 1);
//    
//    argsArr.forEach(function(cur){
//        console.log((2016 - cur) >= limit);
//    })
//}
////
//isFullAge5(21, 1990,1999,1995);
//isFullAge5(1990,1999,1995,2016,1987)

// ES6 
function isFullAge6(limit,...years){
//    console.log(years)
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16,1990,1999,1995,2016, 1987);

////////////////////////////////////////////////
/// Lecture: Default Parameters

// ES5
//function SmithPerson(firstName, yearOfBirth, lastName, nationality){
//    
//    lastName === undefined ? lastName = "Smith" : lastname = lastName;
//    nationality === undefined ? nationality = 'american' : nationality = nationality;
//    
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.yearOfBirth = yearOfBirth;
//    this.nationality = nationality;
//}
//


// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1998,);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

////////////////////////////////////////////////
/// Lecture: Maps

const question = new Map();
question.set('question','what is the official name of the latest major JavaScript version?');
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!')

//console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)){
//    question.delete(4)
//    console.log('Answer 4 is here')
}
//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()){
    console.log(`This is ${key}, and it's set to ${value}`)
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}
//const ans = parseInt(prompt('Write the correct answer'));
//
//console.log(question.get(ans === question.get('correct')));


////////////////////////////////////////////////
/// Lecture: Classes

// ES5
//var Person5 = function(name, yearOfBirth, job){
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//
//Person5.prototype.calculateAge = function(){
//    var age = new Date().getFullYear() - this.yearOfBirth;
//    console.log(age);
//}
//    
//var john5 = new Person5('John', 1990, 'teacher');
//    
//// ES6
//class Person6 {
//    constructor(name, yearOfBirth, job){
//        this.name = name;
//        this.yearOfBirth = yearOfBirth;
//        this.job = job;
//    }
//    
//    calculateAge(){
//        var age = new Date().getFullYear() - this.yearOfBirth;
//        console.log(age);
//    }
//    
//    static greeting(){
//        console.log('Hey there!');
//    }
//}
//
//const john6 = new Person6('John', 1990, 'teacher');
//
//Person6.greeting();

////////////////////////////////////////////////
/// Lecture: Classes with Subclasses

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John',1990,'swimmer',3,10);

johnAthlete5.calculateAge()
johnAthlete5.wonMedal();

// ES6
class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John',1990,'swimmer',3,10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge()


////////////////////////////////////////////////
/// Lecture: Coding Challenge


class Element {
    constructor(name, builtYear){
        this.name = name;
        this.builtYear = builtYear;
    }
}


class Park extends Element {
    constructor(name, builtYear, area, numberOfTrees){
        super(name,builtYear);
        this.area = area; // km2
        this.numberOfTrees = numberOfTrees;
    }
    
    treeDensity(){
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} per square km.`);
    }
}

class Street extends Element {
    constructor(name, builtYear, length, size = 3){
        super(name,builtYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet() {
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'hugh');
        console.log(`${this.name}, build in ${this.builtYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987,0.2,215),new Park('National Park',1894,2.9,3541),new Park('Oak Park',1953,0.4,949)]

const allStreets = [new Street('Ocean Avenue',1999,1.1,4),new Street('4th Street',2015,0.8,), new Street('Sunset  Boulevard',1983,2.5,5)]


function calc(arr){
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum/arr.length];
}

function reportParks(p){
    console.log('------------ PARK REPORT ------------')
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.builtYear);
    const [totalAge, AvgAge] = calc(ages);
    console.log(`)ur ${p.length} parks have an average of ${AvgAge.toFixed(2)} years`);
    
    // Which park has more than 100 tree
    const i = p.map(el => el.numberOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s){
    console.log('------------ STREET REPORT ------------')
    
    // Total and average length of the town's streets
    const [ totalLength, avgLength] = calc(s.map(el=>el.length));
    console.log(`Our ${s.length} streets have a total lenght of ${totalLength} km, with an average of ${avgLength.toFixed(2)}`);
    
    // classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);

































