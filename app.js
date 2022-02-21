const rect = require('./rectangle');
//now this file knows to look in the same folder as itself for a js file named rectangle

function solveRect(length, width) {
    console.log(`Solving for rectangle with dimensions: ${length}, ${width}`);

    if (length <= 0 || width <= 0){
        console.log(`Rectangle dimensions must be greated than zero. Received: ${length}, ${width}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(length, width)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(length, width)}`);
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5); //invalid
solveRect(5, -3); //invalid
