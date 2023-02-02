(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
// var person = {};
//     person.firstname = "Thomas";
//     person.lastname = "Mescall";
//
//     console.log("My name is " + person.firstname + " " + person.lastname);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
// person.sayHello = "Greetings! From: " + person.firstname + " " + person.lastname;
//
//     console.log(person.sayHello);
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    //thomas-mescall
    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    // var discount = 0.12;
    // for(var i = 0; i < shoppers.length; i++) {
    //     var shopper = shoppers[i];
    //     if(shopper.amount > 200) {
    //         var discountActive = shopper.amount * discount;
    //         var newAmount = shopper.amount - discountActive;
    //         console.log(shopper.name + ", your total before discount was $" + shopper.amount + " and after is $" + newAmount);
    //     } else {
    //         console.log(shopper.name + ", you did not recieve a discount. Your total is $" + shopper.amount);
    //     }
    // }



    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    //console.log(shoppers.name);
    // function shopDis() {
    //     while (shoppers) {
    //         if (shoppers.amount > 200) {
    //             var discount = (12/100);
    //             discount = discount * shoppers.amount;
    //             console.log(shoppers.name " your discount is " + discount + " off your order of " + shoppers.amount);
    //         } else if (shoppers.amount < 200) {
    //             console.log(shoppers.name
    //             " your discount is " + discount + " off your order of " + shoppers.amount);
    //         }
    //     }
    // }
// function discount() {
//     if(amount > 200) {
//         amount *= .12;
//     } else {continue};
//     console.log(shoppers.name + " you have recieved a discount of " + amount + "off your original price of " + shoppers.amount);
// }
// main
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var books = [
    //     {title: "Water", author: {firstname: "H2", lastname: "O"}},
    //     {title: "Cat and the Hat", author: {firstname: "Dr.", lastname: "Suess"}},
    //     {title: "Sandwitch", author: {firstname: "Peanut Butter", lastname: "Jelly"}},
    //     {title: "Drinks", author: {firstname: "Chocolate", lastname: "Milk"}},
    //     {title: "ISP", author: {firstname: "AT&T", lastname: "Verizon"}},
    // ]

             /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// for(var i = 0; i < books.length; i++) {
//         var read = books[i];
//     console.log("Book #" + (i + 1));
//     console.log("Title: " + read.title);
//     console.log("Author: " + read.author.firstname + " " + read.author.lastname);
//      }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // while(true) {
    //     var bookIn = prompt("Please enter your book name");
    //     var title = bookIn;
    //     var authorIn = prompt("Please enter your author name");
    //     var author = authorIn;
    // }


})();

function createBook(titleIn, authorName) {
    return {title: titleIn, author: authorName};
    }
    var newBooks = [
    createBook("Seatbelt Safety", "Waul Palker"),
    createBook("Family", "Vinn Diesel"),
    createBook("Let's go for a walk", "My Dog")
    ];

console.log(newBooks);


function showBookInfo(x) {
        console.log("Title: " + newBooks[x].title);
        console.log("Author: " + newBooks[x].author);
    }



//****courtesy of Austin****
// function createBook (title, first, last) {
//     return {
//         title: title,
//         author: {
//             firstName: first,
//             lastName: last
//         }
//     }
// }
// var newBooks = [
//
//     createBook("The Art of Loyalty", "Benedict", "Arnold"),
//     createBook("Common Cents", "Thomas", "Lincoln"),
//     createBook("The Little Giant", "Peter", "Dinklage"),
//     createBook("Bonds of Family", "Jaime", "Lannister"),
//     createBook("Don't Lose Your Head", "Ned", "Stark")
// ];
//
// console.log(newBooks);
//
// // bonus question 2 below
// function showBookInfo(x) {
//     console.log("Book #" + (newBooks.indexOf(newBooks[x]) + 1) + "\n" +
//         "Title: " + newBooks[x].title + "\n" +
//         "Author: " + newBooks[x].author.firstName + " " + newBooks[x].author.lastName + "\n---");
//
// }
// showBookInfo(3);
//
// newBooks.forEach(function(showBook) {
//     console.log(showBook);
// });