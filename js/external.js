console.log("Hello from external JavaScript!");

//Use the alert function to show a message that says 'Welcome to my Website!'.
alert("Welcome to my website! Please make yourself at home");

//Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
// For example, if the user enters "blue", your code should alert a message that says:
// "Great, blue is my favorite color too!"
let color = prompt("What is your favorite color?");
alert("Outstanding! My favorite color is " + color + " too!");

/*
Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
*/
let littleFish = prompt("How many times did you watch The Little Mermaid?");
let littleBear = prompt("How many times did you watch Brother Bear?");
let littleMan = prompt("How many times did you watch Hercules?");
let pricePer = prompt("How much should each movie be everytime you watch it?")
let movieT = Number(littleMan) + Number(littleBear) + Number(littleFish);
let total = alert("You have spent " + (movieT * pricePer) + " on watching movies");

let gooG = prompt("How much should Google pay you hourly?");
let googH = prompt("How many hours are you working for Google this week?");
let googT = gooG * googH;
let facE = prompt("How much should Facebook pay you hourly?");
let faceH = prompt("How many hours are you working for Facebook this week?");
let faceT = facE * faceH;
let amaZ = prompt("How much should Amazon pay you hourly?");
let amazH = prompt("How many hours are you working for Amazon this week?");
let amazT = amaZ * amazH;
let moneySum = googT + faceT + amazT;
alert("You shall earn: " + moneySum);

let capacity = confirm("Is the class full?");
let conflict = confirm("Does this class conflict with your schedule?");
let desicion = capacity && conflict;
alert("Congratulations! The desicion for your class is: " + desicion);

let offer = confirm("Is the offer expired?");
//let offerEx = "Sorry but the offer has expired";
let premiumStat = confirm("Are you a premium member?");
let itemCount = confirm("Are there more than two items?");
let premiumMem = premiumStat && !offer;
let plebMem = (itemCount == true) && !offer;
if(premiumMem === 1) {
    alert("Thank you for shopping with us");
}
else if(plebMem === 1) {
    alert("Thank you for shopping with us...pleb");
}
//else {"The offer is expired at this time"};




