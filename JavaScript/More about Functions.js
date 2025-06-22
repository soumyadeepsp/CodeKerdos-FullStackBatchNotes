// DIFFERENT WAYS OF WRITING A FUNCTION:

// 1. Function Declaration (this is the normal way of doing things)
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Outputs: Hello, Alice!

// 2. Named Function Expression (this is a variable that holds a function with a name)
// This arises because in JS, we can store a function in a variable.
var greetNamedExpression = function greetFunc(name) {
    console.log("Hello, " + name + "!");
};
greetNamedExpression("Charlie"); // Outputs: Hello, Charlie!
// I can no more call the above function through its name. I have to use its variable name
// to call the function. Function name is no more avaialble in the global scope.

// 3. Unnamed Function Expression (this is a variable that holds a function)
// Since, I cannot call the function globally using the function name,
// I can even remove it and it will be called unnamed function declaration.
var greetExpression = function(name) {
    console.log("Hello, " + name + "!");
};
greetExpression("Bob"); // Outputs: Hello, Bob!

// The named function expression comes in handy if I have a recursive function.
// The function name is not available globally but inside the function itself, it is available.
// In recursion through, we can also use the variable name inside the function.
const myFactFunction = function factorial(n) {
    if (n==1) {
      return 1;
    }
    // return n*myFactFunction(n-1);
    return n*factorial(n-1); // Here I am using the function name to call the function recursively.
}
console.log(myFactFunction(5));
// In the function above, I can use the variable name to call the function recursively.
// I can also use the function name to call the function recursively.

// 4. Arrow Function (this is a shorter syntax for writing functions)
const greetArrow = (name) => {
    console.log("Hello, " + name + "!");
};
greetArrow("Dave"); // Outputs: Hello, Dave!

// Store a normal function in a variable and it becomes a named function expression.
// Then remove the function name and it becomes an unnamed function expression.
// Then remove the function keyword and add an arrow symbol and it becomes an arrow function.

// In the latest versions of JavaScript, arrow functions are preferred
//  in 99% of the cases for their concise syntax.

// IIFE(Immediately Invoked Function Expression)
// This is a function that is defined and immediately called and executed.
(function() {
    console.log("This is an IIFE!");
})(); // Outputs: This is an IIFE!
// IIFE is used to create a local scope for variables and functions
// It helps to avoid polluting the global scope with variables and functions
// IIFE can also take parameters
(function(name) {
    console.log("Hello, " + name + "!");
})("Eve"); // Outputs: Hello, Eve!
// IIFE can also return a value
(function() {
    return "This is an IIFE that returns a value!";
})();
// Outputs: This is an IIFE that returns a value!
// An IIFE cannot be called later on using the function name.

// CALLBACK FUNCTIONS
// A callback function is a function that is passed as an argument to another function
function processData(data, callback) {
    // Simulate some processing
    console.log("Processing data: " + data);
    // Call the callback function with the processed data
    callback(data + " processed");
}
processData("Sample Data", function(result) {
    console.log("Callback called with result: " + result);
});
// Outputs:
// Processing data: Sample Data
// Callback called with result: Sample Data processed
// A normal function becomes a callback function when it is passed as an argument to another function.

// PURE FUNCTIONS - any funtion that only uses or changes the parameters given to it
// and not any external variable is called a pure function.
// IMPURE FUNCTIONS - any funtion that uses or changes any external variable is called an impure function.

// Example of a pure function
function add(a, b) {
    return a + b; // Only uses the parameters a and b
}
// Example of an impure function
let externalVar = 10; // An external variable
function addWithExternalVar(a, b) {
    return a + b + externalVar; // Uses an external variable
}
// Pure functions are easier to test and debug because they always produce the same output for the same input
// and do not depend on external state.

// HIGHER ORDER FUNCTIONS
// A higher-order function is a function that takes another function as an argument
// or returns a function as its result.
function higherOrderFunction(callback) {
    // Call the callback function
    callback("Hello from higher-order function!");
}
higherOrderFunction(function(message) {
    console.log(message); // Outputs: Hello from higher-order function!
});

// CURRYING
// Currying is a technique in functional programming where a function with multiple arguments
// is transformed into a sequence of functions, each taking a single argument.
function myFunction(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
// You can call the function like this:
myFunction(1, 2, 3, 4);
  
function myFunction(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                console.log(a);
                console.log(b);
                console.log(c);
                console.log(d);
            };
        };
    };
}
// You can call the curried function like this:
myFunction(1)(2)(3)(4);
// This allows you to create more flexible and reusable functions.
// Currying is useful for creating specialized functions from a general function