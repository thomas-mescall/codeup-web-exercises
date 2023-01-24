//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

//1) creating for loop within a function that takes in a number and spits out the number multiplied incremently up to 10.
function showMultiplicationTable(x) {
    for(let i = 0; i <= 10; i++) {
        let num = i * x;
        console.log(num);

    }
}

//2) Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example: