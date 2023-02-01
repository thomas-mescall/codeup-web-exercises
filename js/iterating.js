(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ["Tom", "Tommy", "Thomas", "Tomas"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("                       ");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    function name() {
        for (var i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
    }
    console.log("                       ")
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    //First you need to write a helper function that pertains to the action you wish to instill upon your array (this case I created the 'name' function above). The .forEach function will access the said helper function and apply it to the array that is at the beginning (in this case 'names'). Ensure that your helper function name is similar to your array to establish a relationship for readability.
names.forEach(function(name){
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var myArr = [1,2,3,4,5];
function first(){
    return myArr[0];
}
    console.log(first());
function second(){
    return myArr[1];
}
    console.log(second());
function last(){
    return myArr[4];
}
    console.log(last());

   // console.log(first(), second(), last());

})();