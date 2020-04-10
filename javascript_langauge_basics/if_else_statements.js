/**************************
* If / else statments
*/

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
   console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = false;

if(isMarried){
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var markBMI, markHeight, markMass, johnBMI, johnHeight, johnMass, markHasHigherBMI;
markHeight = 1.8;
markMass = 90.7;
johnHeight = 1.79;
johnMass = 81.6;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

//markHasHigherBMI = markBMI > johnBMI;
//
//console.log('Is Mark\'s BMI higher than John\'s? ' + markHasHigherBMI);


if(markBMI > johnBMI){
    console.log('Mark\'s BMI is higher than Jonh\'s');
} else {
    console.log('Jonh\'s BMI si higher than Mark\'s');
}