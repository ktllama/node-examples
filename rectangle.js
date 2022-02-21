module.exports = (x, y, callback) => {
    if ( x <= 0 || y <= 0){
        callback(new Error(`Rectangle dimensions must be greated than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() => 
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
}

//the callback param is a function that will be passed in when the function is called 
//error callback pattern is an expected convention among node developers
//en this error callback pattern we will check for the error condition- if the agruments we recieved through the function params are invalid in some way
//first thing the callback returns is an error object- which is a global function that contains info about an error
//can access x and y params in the inner function bc closures

// perimeter = (x,y) => 2 * (x + y);
// area = (x,y) => x * y;
