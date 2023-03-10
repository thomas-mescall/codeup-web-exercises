"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(x) {
//     //x = prompt("name a color")
//     if (x == 'red') {
//         return ("red is the color of Mars");
//     } else if (x == 'blue') {
//         return ("blue is the color of the sky");
//     } else if (x == 'yellow') {
//         return ("yellow is the color of the Sun");
//     } else if (x == 'orange') {
//         return ("orange is the color of an orange");
//     } else if (x == 'green') {
//         return("green is the color of grass");
//     } else if (x == 'indigo') {
//           return("indigo is the color of royalty");
//     } else if (x == 'violet') {
//           return("violet is a color that I can't think of anything for -_-")
//     } else{
//         return("That color does not exist")};
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//var randoColor = analyzeColor(randomColor);
//console.log(randoColor);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//var randColor = analyzeColor(randomColor);
/*
function analyzeColor(x){
    switch (x) {
        case 'red':
            return("red is the color of Mars");
            break;
        case 'blue':
            return("blue is the color of the sky");
            break;
        case 'yellow':
            return("yellow is the color of the Sun");
            break;
        case 'orange':
            return("orange is the color of an orange");
            break;
        case 'green':
            return("green is the color of grass");
            break;
        case 'indigo':
            return("indigo is the color of royalty");
            break;
        case 'violet':
            return("violet is a color that I can't think of anything for -_-");
            break;
        default:
            return("That is not a color");
            break;
        }
        alert("Please pick a color");
    }
*/

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/*
//function analyzeColor(userIn){
    var userIn = prompt("What is your favorite color?");
    switch (userIn) {
        case 'red':
            alert("red is the color of Mars");
            break;
        case 'blue':
            alert("blue is the color of the sky");
            break;
        case 'yellow':
            alert("yellow is the color of the Sun");
            break;
        case 'orange':
            alert("orange is the color of an orange");
            break;
        case 'green':
            alert("green is the color of grass");
            break;
        case 'indigo':
            alert("indigo is the color of royalty");
            break;
        case 'violet':
            alert("violet is a color that I can't think of anything for -_-");
            break;
        default:
            alert("That is not a color");
            break;
    }
}
*/

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(x,y){
    switch (x) {
        case 0:
            return y;
            break;
        case 1:
            return (y - (y * .1));
            break;
        case 2:
            return (y - (y * .25));
            break;
        case 3:
            return (y - (y * .35));
            break;
        case 4:
            return y / 2;
            break;
        case 5:
            return 0;
            break;
        default:
            return "please enter valid input";
            break;
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
// var totalBill = prompt("What is your total bill?");
// var luckyTotal = calculateTotal(luckyNumber, totalBill);
// //var newBill = totalBill * luckyTotal;
// alert("Your lucky number is: " + luckyNumber);
// alert("Your price before your discount was $" + totalBill);
// alert("Your price after the discount is $" + luckyTotal);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


if (confirm("Would you like to enter a number?")) {
    let num = prompt("Please enter a number:");
    if(num === NaN) {
        alert("That is not a number!!!")
    }
    if (num % 2 === 0) {
        alert("The number is even.");
    } else {
        alert("The number is odd.");
    }
    num = Number(num);
    alert("The number plus 100 is " + (num + 100) + ".");
    if (num >= 0) {
        alert("The number is positive.");
    } else {
        alert("The number is negative.");
    }
}


/*
var numQ = confirm("Would you like to enter a number?");
var x = prompt("Please enter a vaild number");
if(numQ === true) {

    if(x%2==0) {
        alert("Your number is even");
    } else{"Your number is odd"};
    //alert("Your number + 100 = "x+100);
    if(x<0){
        alert("Your number is even");
    } else("Your number is odd");
}
function numManip() {
    var y = confirm("Would you like to enter a number?");
    if (y) {
        function numS(x) {
            var x = prompt("Please enter your number");

    else
        {
            alert("Please enter a valid number")
        }
        ;
        if (x % 2 == 0) {
            alert("The number you have entered is even");
        } else if (x % 2 != 0) {
            alert("The number you have entered is odd");
        }
        alert("Your number plus 100 is: "
        x + 100
    )
        ;
        if (x < 0) {
            alert("The number you have entered is negative");
        } else if (x > 0) {
            alert("The number you have entered is positive");
        }
    }
  }
}

 */