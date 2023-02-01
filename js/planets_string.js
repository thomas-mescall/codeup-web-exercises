(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log("Printing the index of 'The Sun'");
    var theSun = planets.indexOf("The Sun");
    console.log(theSun);


    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log("Printing the last index of 'Pluto'");
    var pluto = planets.lastIndexOf("Pluto");
    console.log(pluto);

    console.log("Printing new array containing 'Uranus' and 'Neptune' using slice");
    var outCasts = planets.slice(7,9);
    console.log(outCasts);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var index = planets.indexOf("Earth");
    console.log(index);

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);

    console.log("Printing new array of countries using split method");
    var counTrees = "America, Iran, Iraq, Afgahnistan, Canada, Mexico, Brazil, Nigeria, Vietnam";
    var countreesArr = counTrees.split();
    console.log(countreesArr);

    console.log("Converting countries array into a string");
    var countrieString = countreesArr.join();
    console.log(countrieString);
})();