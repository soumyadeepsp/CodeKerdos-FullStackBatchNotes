// LOOPS

// 1. FOR LOOP
for (var i=1; i<10; i++) {
    console.log(i); // Outputs numbers from 1 to 9
}
// The first part(var i=1;) is the initialization of the loop variable.
// The second part(i<10;) is the condition that must be true for the loop to continue.
// The third part(i++) is the increment of the loop variable after each iteration.

// 2. WHILE LOOP
var j = 1; // Initialize the loop variable
while (j < 10) {
    console.log(j); // Outputs numbers from 1 to 9
    j++; // Increment the loop variable
}
// The while loop continues as long as the condition (j < 10) is true.
// The loop variable (j) is incremented inside the loop body.
// If the condition is false at the start, the loop body will not execute at all.

// 3. DO-WHILE LOOP
var k = 1; // Initialize the loop variable
do {
    console.log(k); // Outputs numbers from 1 to 9
    k++; // Increment the loop variable
} while (k < 10);
// The do-while loop guarantees that the loop body will execute at least once,
// even if the condition (k < 10) is false at the start.
// The loop variable (k) is incremented inside the loop body.
// The condition is checked after the loop body has executed.
// The loop will continue until the condition becomes false.
// The do-while loop is useful when you want to ensure that the loop body runs at least once,
// regardless of the initial condition.

// 4. FOR-IN LOOP (used for iterating over object properties)
// var arr = [1,2,3,4,5];
for (var index in arr) {
    console.log(index); // Outputs the index of each element in the array
    console.log(arr[index]); // Outputs the value of each element in the array
}

// INBUILT FUNCTIONS FOR ARRAYS

// 1. FOR-OF LOOP (used for iterating over iterable objects like arrays, strings, etc.)
for (var value of arr) {
    console.log(value); // Outputs the value of each element in the array
}
// The for-in loop iterates over the enumerable properties(indixes) of an object.
// The for-of loop iterates over the values of an iterable object.

// 6. FOR EACH METHOD (used for iterating over arrays)
arr.forEach(function(value, index) {
    console.log(index); // Outputs the index of each element in the array
    console.log(value); // Outputs the value of each element in the array
});
// The forEach method is a higher-order function that takes a callback function as an argument.
// The callback function is called for each element in the array, with the value and index as arguments.
// It is a more concise way to iterate over arrays compared to traditional loops.
// Note: The forEach method does not return a new array, it simply executes the callback function for each element.
// It is useful for performing side effects like logging, modifying elements, etc.

function myfunction(value, index) {
    console.log(index, value);
}
arr.forEach(myfunction);
// I can define the callback function outside the forEach method and pass it as an argument also.
// This is useful for reusability and cleaner code.

// 2. MAP METHOD (used for transforming arrays)
var newArr = arr.map(function(value, index) {
    return value * 2; // Returns a new array with each element multiplied by 2
});
// The for each method just performs some operation over the array elements
// The map method can perform some operations over the array elements and create a new array from the modified array
// The map function returns a new array and thus I can store it in a new variable.

// 3. FILTER METHOD (used for filtering arrays)
var filteredArr = arr.filter(function(value, index) {
    return value > 2; // Returns a new array with elements greater than 2
});
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// It is useful for extracting a subset of elements from an array based on a condition.
// The filter method returns a new array and thus I can store it in a new variable.

// 4. REDUCE METHOD (used for reducing arrays to a single value)
var sum = arr.reduce(function(accumulator, value) {
    return accumulator + value; // Returns the sum of all elements in the array
}, 0); // The second argument is the initial value of the accumulator
// The reduce method executes a reducer function on each element of the array, resulting in a single output value.
// It is useful for aggregating data, such as calculating sums, products, or other transformations.
// The reduce method takes a callback function and an initial value as arguments.
// The callback function takes two arguments: the accumulator and the current value.
// The accumulator is the accumulated value from the previous iterations, and the current value is the current element being processed.

// Whatever you want to do with the reducer function, you can do it using the forEach function.
// Have a look at the example below:
var sum = 0;
arr.forEach(function(value) {
    sum += value; // Adds each element to the sum
});
console.log(sum); // Outputs the sum of all elements in the array

// 3 very important function of array - forEach, map, and filter

// 4. FIND METHOD (used for finding an element in an array)
var foundElement = arr.find(function(value) {
    return value > 2; // Returns the first element greater than 2
});
// The find method returns the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.
// It is useful for searching for a specific element in an array based on a condition.
// The find method takes a callback function as an argument.
// The callback function takes one argument: the current element being processed.
// The find method does not return a new array, it returns the first matching element or undefined.

// 5. FIND INDEX METHOD (used for finding the index of an element in an array)
var foundIndex = arr.findIndex(function(value) {
    return value > 2; // Returns the index of the first element greater than 2
});
// The findIndex method returns the index of the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.
// It is useful for finding the position of a specific element in an array based on a condition.
// The findIndex method takes a callback function as an argument.
// The callback function takes one argument: the current element being processed.
// The findIndex method does not return a new array, it returns the index of the first matching element or -1.