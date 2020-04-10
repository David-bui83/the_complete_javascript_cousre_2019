/************************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John 
compared their BMIs. Let's now implement the same functionality
with object's and methods.
1. For each of them, create an object with properties for their 
full name, mass, and height  
2. Then, add a method to each object to calculaste the BMI. Save
the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI,
together with the full name and teh respective BMI. Don't forget
they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

GOOD LUCK =)
*/

var John = {
    fullName: 'John',
    height: 1.9,
    mass: 80,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var Mark = {
    fullName: 'John',
    height: 1.9,
    mass: 75,
    calcBMI: function() { 
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


if(John.calcBMI() > Mark.calcBMI()) {
    console.log(John.fullName + ' has the higher BMI of ' + John.bmi);
} else if(Mark.calcBMI() > John.calcBMI()) {
    console.log(Mark.fullName + ' has teh higher BMI of ' + Mark.bmi);
} else {
    console.log('They have the same bmi');
}

