// 1) Create a while loop that uses console.log() to create the output shown below.
//2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// function funcWhile() {
//     let x = 2;
//     while (x <= 65536) {
//         console.log(x)
//         x = x * 2;
//     }
//         }

// 2) An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

//// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

//The output should be similar to the following:
//5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

//Before loop, write some code to generate a rand number 50 - 100 which = cones to sell. During loop, generate a second rand number 1- 5 = amount of cones purchase. Using a do-while loop, log amount of cones being sold to each person. Do all of this until you run out of cones.

//assign # of cones to sell
// var conesToSell = Math.floor(Math.random() * 50) + 50;
// //check how many cones
// console.log("There are " + conesToSell + "cones to sell!");
//     do{
//         //assign # of cones bought
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     //check if bought is too much
//         while(conesToSell < conesBought){
//             console.log("Sorry homey, can't sell you " + conesToSell + " cones.");
//             conesBought = Math.floor(Math.random() * 5) + 1;
//     }
//     //reasighn sell
//     conesToSell -= conesBought;
//     //# of cones left
//     console.log(conesBought + " cones sold!");
//     //check how many cones are left
//     console.log("There are " + conesToSell + " cones left.");
//     } while(conesToSell > 0);

