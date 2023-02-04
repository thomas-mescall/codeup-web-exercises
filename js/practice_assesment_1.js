// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
//
//
console.log("Problem One");
console.log(timesFour(0))//0
console.log(timesFour(-5))//-20
console.log(timesFour('Texas'))//false
console.log(timesFour([2,1,0]))//false
console.log(timesFour(true))//false
console.log(timesFour(null))//false

function timesFour(x) {
    if(x === Number(x)) {
        return  x *= 4;
    } else {
        return false;
    }
}

// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
console.log("Problem Two");

console.log(convertDaystoHours(0)) //0
console.log(convertDaystoHours('5')) // 120
console.log(convertDaystoHours('Texas')) //false
console.log(convertDaystoHours([2, 1, 0])) //false
console.log(convertDaystoHours(true)) //false
console.log(convertDaystoHours(false)) //false

function convertDaystoHours(x) {
    if(parseInt(x) == x) {
        return x *= 24;
    } else {
        return false;
    }
}

// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
console.log("Problem Three");
console.log(calculateTax(25, 8))				 // “$27.00"
console.log(calculateTax(10, 12)           )  // “$11.20”
console.log(calculateTax(120, 15.5))			 //	“$138.60"
console.log(calculateTax(10, true))           // false
console.log(calculateTax([1, 2, 3], 10))      // false
console.log(calculateTax("Codeup", 100))      // false
console.log(calculateTax())                   // false

function calculateTax(x, y) {
    if(parseFloat(x) == x && parseFloat(y) == y) {
        var tax = (x+y)*.08;
        var sum = x+y+tax;
        return sum;
    } else {
        return false;
    }
}
