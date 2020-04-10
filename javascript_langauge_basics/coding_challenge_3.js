/********************************
* CODING CHALLENGE 3
*/

/**
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as 
a function). he likes to top 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200, and 10% if the bill is more than 
$200.

In the end, John would like to have 2 aray: 
1) Containing all three tips (one for each bill)
2) Contianing all three final paid amounts (bill + tip)

(NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)

GOOD LUCK
*/

var tipArray = [];
var totalBillArray = [];
function tipCalculator(amount){
    if(amount < 50){
        return amount * 0.2;
    }else if (amount >= 50 && amount <= 200){
        return amount * 0.15;
    }else{
        return amount * 0.1;
    }
}

tipArray.push(Number(tipCalculator(124).toFixed(2)));
tipArray.push(Number(tipCalculator(48).toFixed(2)));
tipArray.push(Number(tipCalculator(268).toFixed(2)));

totalBillArray.push(124 + tipArray[0]);
totalBillArray.push(48 + tipArray[1]);
totalBillArray.push(268 + tipArray[2]);

console.log(tipArray);
console.log(totalBillArray);