(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function area() {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = (Math.PI * Math.pow(this.radius, 2));
            return area; // TODO: return the proper value
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.
            var area = this.getArea();
            area = parseInt(area);
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding === true) {
                return Math.round(area);
            } else {
                return area;
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };


    // log info about the circle
    console.log("Raw circle information: " + circle.getArea());
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number: " + circle.logInfo());
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information: " + circle.getArea());
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number: " + circle.logInfo());
    circle.logInfo(true);
})();