const rect = {
    perimeter: (x,y) => 2 * (x + y),
    area: (x,y) => x * y
};

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
solveRect(0, 5);
solveRect(5, -3);
