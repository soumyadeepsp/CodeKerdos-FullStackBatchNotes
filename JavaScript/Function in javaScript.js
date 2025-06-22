// Functions - whenever I want to perform a specific task multiple times. Instead of copy pasting the entire piece of code multiple times, I can wrap that piece of code in function and then call that function multiple times. This way my code becomes much more modular and also short in size.

// Syntax to write a function - 
function function_name() {
    // the entire code of the function comes inside these 2 curly brackets
}
// Now whenevr I want to call my function, I will just call it using the name of the function and the whole code gets executed - 
// Syntax for calling the function -
function_name(); 

// Example of a function requiring parameters - 
function sum(a, b) {
  var sum = a+b;
  console.log(sum);
}

sum(2, 3); // calling a function with parameters

// When we are passing values during the function call, 
// they are called as arguments. 
// When we are receiving the values in different variables in the function signature, 
// the it is called parameters. 
// Hence, in the above example - 2 & 3 are arguments and a & b are parameters. 
// Inside the function call, the parameters store the value of the given arguments. 

// In Java and in most programming languages, 
// the number of arguments should always be equal to the number of parameters. 
// If it is unequal then it throws an error. 
// JS is a very forgiving language and thus it doesn't throw an error.

// If you pass more arguments than required, 
// then suppose there are 2 parameters and the 10 arguments passed, 
// then the first 2 arguments will be stored in the 2 parameters 
// and the remaining 8 arguments are ingnored in the function.
function sum(a, b) {
  var sum = a + b;
  console.log(sum);
}
sum(2, 3, 4, 5, 6, 7, 8, 9, 10); // Here only 2 arguments are used and rest are ignored.
// a takes 2 and b takes 3 but the rest arguments are ignored

// If you pass less number of arguments than parameters available, 
// then for the left over parameters, it takes undefined value. 
function sum(a, b) {
  var sum = a + b;
  console.log(sum);
}
sum(2); // Here only 1 argument is used and the other parameter b takes undefined value
// a takes 2 and b takes undefined

// DEFAULT PARAMETERS: You can assign some default value to paramters
//  if you think the function call may or may not pass the arguments for those parameters.
function sum(a, b = 0) {
  var sum = a + b;
  console.log(sum);
}
sum(2); // Here only 1 argument is used and the other parameter b takes default value 0
// a takes 2 and b takes 0

function sum(a=0, b=0) {
  var sum = a + b;
  console.log(sum);
}
sum(2); // Here only 1 argument is used and the other parameter b takes default value 0
// a takes 2 and b takes 0 because if an argument is passed then it overrides the default value
// If you pass an argument as undefined, then it will take the default value
function sum(a=0, b=0) {
  var sum = a + b;
  console.log(sum);
}
sum(undefined, 3); // Here a takes default value 0 and b takes 3
// a takes 0 and b takes 3 because undefined is passed as an argument
// If you pass null as an argument, then it will take null value
function sum(a=0, b=0) {
  var sum = a + b;
  console.log(sum);
}
sum(null, 3); // Here a takes null value and b takes 3
// a takes null and b takes 3 because null is passed as an argument

// CONCLUSION: If you don't pass a value or pass undefined, then the default value will be taken.
// Else, in every other case, the value passed as an argument will be taken.

// A function can also return something
function sum(a, b) {
  var sum = a + b;
  return sum; // This will return the sum of a and b
}
sum(2, 3); // Here result will be 5 - this will not print anything
// So, either I store it in a variable and print the variable. 
// Or directly put the function call in console.log
var result = sum(2, 3); // Here result will be 5
console.log(result); // This will print 5
console.log(sum(2, 3)); // This will also print 5

// REST OPERATOR IN FUNCTION PARAMETERS
// The rest operator (...) allows you to pass an indefinite number of arguments to a function
function sum(...arr) {
  let total = 0;
  for (var i=0; i<arr.length; i++) {
    total += arr[i]; // Adds each number in the args array
  }
  return total; // Returns the sum of all numbers
}
console.log(sum(1, 2, 3)); // Outputs: 6
console.log(sum(10, 20, 30, 40)); // Outputs: 100
console.log(sum(5, 10, 15, 20, 25)); // Outputs: 75
// You can also use the rest operator in combination with other parameters
function multiply(factor, ...numbers) {
  return numbers.map(num => num * factor); // Multiplies each number in the args array by the factor
}
console.log(multiply(2, 1, 2, 3)); // Outputs: [2, 4, 6]
console.log(multiply(3, 4, 5)); // Outputs: [12, 15]
// rest parameter should be the last parameter