Functions - whenever I want to perform a specific task multiple times. Instead of copy pasting the entire piece of code multiple times, I can wrap that piece of code in function and then call that function multiple times. This way my code becomes much more modular and also short in size.

Syntax to write a function - 
function function_name {
    // the entire code of the function comes inside these 2 curly brackets
}
Now whenevr I want to call my function, I will just call it using the name of the function and the whole code gets executed - 
Syntax for calling the function -
function_name(); 

Example of a function requiring parameters - 
function sum(a, b) {
  var sum = a+b;
  console.log(sum);
}

sum(2, 3);

When we are passing values during the function call, they are called as arguments. When we are receiving the values in different variables in the function signature, the it is called parameters. Hence, in the above example - 2 & 3 are arguments and a & b are parameters. Inside the function call, the parameters store the value of the given arguments. 

In Java and in most programming languages, the number of arguments should always be equal to the number of parameters. If it is unequal then it throws an error. JS is a very forgiving language and thus it doesn't throw an error.

If you pass more arguments than required, then suppose there are 2 parameters and the 10 arguments passed, then the first 2 arguments will be stored in the 2 parameters and the remaining 8 arguments are ingnored in the function.

If you pass less number of arguments than parameters available, then for the left over parameters, it takes undefined value. 