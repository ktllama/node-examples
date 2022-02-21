const rect = require('./rectangle');
//now this file knows to look in the same folder as itself for a js file named rectangle
//now rect is expecting a function not an object

function solveRect(length, width) {
    console.log(`Solving for rectangle with dimensions: ${length}, ${width}`);

    rect(length, width, (err, rectangle) => {
        if (err){
            console.log('ERROR:', err.message);    
        } else {
            console.log(`Area of rectangle with dimensions ${length}, ${width} is: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle with dimensions ${length}, ${width} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5); //invalid
solveRect(5, -3); //invalid
