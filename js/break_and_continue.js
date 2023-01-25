// 1) Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// Your output should look like this: Number to skip is: 27
//
// ask for user input; if wrong, keep asking; build loop to print all numbers between 1 - 50 excluding user input.
/*
for(let i = 0; i < 2; i++) {
    let numQ = prompt("What is a number between 1 - 50?");
        if (1 < numQ < 50) {
            break;
        } else {
            alert("Your number is invalid");
        }
}
 */
//loop to ask user input and check for odd
do {
    let numQ = prompt("Enter an odd number");
    if((1 < numQ < 50) && (numQ % 2 != 0)) {
        alert("Nice");
        //loop to output odd numbers while skipping input
       // while(true) {
            for (let i = 0; i < 50; i++) {
                if (i % 2 == 0) {
                    continue;
                } else if (i === numQ) {
                    console.log("Yikes! Skipping number: " + numQ)
                } else {
                    console.log("Here is an odd number: " + i);
                }
            }
       // }
        break;
    } else {
        alert("Yo that number is NOT odd")
    }
} while(true);


