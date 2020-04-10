/*******************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more 
advanced version using everything we learned.

This time, John and his family went to 5 different restaurants.
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than 
$50, 15% when the bill is between $50 and $200, and 10% if 
the bill is more than $200.

Implement a tip calculator using objects and loops: 
1. Create an object with an array for the bill values
2. Add a method to calcualte the tip
3.this method should include a loop to iterate over all the 
paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, 
and 2) an array contianing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then 
fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, 
going to 4 different restaurants. The bills were $77, $375, $110, 
and $45. Mark likes to tip 20% of the when the bill is less than 
$100, 10% when the bill is between $100 and $300, and 25% if the 
bill is more than $300 (different than John).

5. Implement the same functionality as before, thie time using 
Mark's tipping rules
6. Create a function (not a method) to calculate the average of
of a given array of tips. HINT: loop over the array, and in each 
iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of 
elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK
*/

var johnTip = {
    fullName: 'John Smith',
    billArray: [124, 48, 268, 180, 42],
    calculateTip: function() {
        this.tipArray = [];
        this.totalArray = [];
        for(var i = 0; i < this.billArray.length; i++) {
            var percentage;
            var bill = this.billArray[i];
            if(bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15
            } else {
                percentage = .1;
            }
            this.tipArray[i] = bill * percentage;
            this.totalArray[i] = bill + (bill * percentage); 
        }
    }
}

johnTip.calculateTip();
console.log(johnTip.tipArray);
console.log(johnTip.totalArray);

var markTip = {
    fullName: 'Mark Miller',
    billArray: [77, 5, 110, 45],
    calculateTip: function() {
        this.tipArray = [];
        this.totalArray = [];
        for(var i = 0; i < this.billArray.length; i++) {
            var percentage;
            var bill = this.billArray[i];
            if (this.billArray[i] < 100) {
               percentage = .2;
            } else if (this.billArray[i] >= 100 && this.billArray[i] < 300) {
                percentage = .1
            } else {
                percentage = .25;
            }
            
            this.tipArray[i] = bill * percentage;
            this.totalArray[i] = bill + (bill * percentage);
        }
    }
}

markTip.calculateTip();
console.log(markTip.tipArray);
console.log(markTip.totalArray);


function calculateAverageTip(arr) {
    var sumOfArray = 0;
    for(var i = 0; i < arr.length; i++) {
        sumOfArray += arr[i];
    }
    return sumOfArray/arr.length;
}

johnTip.average = calculateAverageTip(johnTip.tipArray);
markTip.average = calculateAverageTip(markTip.tipArray);

if(johnTip.average > markTip.average){
   console.log( johnTip.fullName + ' has the higher tip average of ' + johnTip.average);
} else if (johnTip.average < markTip.average) {
    console.log(markTip.fullName + 'has the higher tip average of ' + markTip.average);
} else {
    console.log('Both have the same average.');
}

console.log(johnTip);
console.log(markTip);