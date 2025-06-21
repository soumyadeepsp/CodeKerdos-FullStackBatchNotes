// Arrays - A data structure that holds a collection of items

// How to code arrays???
var a = 10;
var b = 20;
var c = 30;
var arr = [a, b, c]; // This is how you create an array in JS
// You can store variables or values directly while creating an array
var arr = [10, 20, 30];
// You can also create an array in this format
var arr = new Array(10, 20, 30); // This is also valid but not preferred
// The first method is a good programming practice and is more readable

// You can also create an empty array and then add items to it
var arr = []; // This is an empty array
// You can add items to an empty array using the push() method
arr.push(10); // Adds 10 to the end of the array
arr.push(20); // Adds 20 to the end of the array
arr.push(30); // Adds 30 to the end of the array

// In Java, arrays are homogenous but in JS arrays are heterogenous.
// Heterogenous means you can store different types of data in the same array.
// Homogenous means you can store only one type of data in the array. In Java, while creating an array,
// you have to specify the type of data that will be stored in the array. Once specified, 
// you can only store those type of data in the array.
// In JS, you can store different types of data in the same array.
var arr = [10, "Hello", true, null, undefined]; // This is a heterogenous array

// In JS, just like Python or Java, you access individual elements using 0-level indexing
arr[0]; // This will give you the 1st element of the array which is 10
arr[1]; // This will give you the 2nd element of the array which is "Hello"
arr[2]; // This will give you the 3rd element of the array which is true
arr[3]; // This will give you the 4th element of the array which is null
arr[4]; // This will give you the 5th element of the array which is undefined
// So indices run from 0 to length-1

arr.length; // This will give you the length of the array which is 5 in this case

// If you tru to access an index that is greater than or equal to its length or is negative, 
// then it will return undefined
arr[5]; // This will return undefined because there is no 6th element in the array
arr[-1]; // This will also return undefined because there is no negative indexing in JS arrays

// SOME POPULAR ARRAY METHODS/FUNCTIONS
// 1. push() - Adds an item to the end of the array
arr.push(40); // Adds 40 to the end of the array and returns nothing

// 2. pop() - Removes the last item from the array and returns it
var lastItem = arr.pop(); // Removes the last item from the array and returns it
// lastItem will be 40 and arr will be [10, "Hello", true, null, undefined]

// 3. unshift() - Adds an item to the beginning of the array
arr.unshift(5); // Adds 5 to the beginning of the array and returns the new length of the array
// arr will be [5, 10, "Hello", true, null, undefined]

// 4. shift() - Removes the first item from the array and returns it
var firstItem = arr.shift(); // Removes the first item from the array and returns it
// firstItem will be 5 and arr will be [10, "Hello", true, null, undefined]

// 5. indexOf() - Returns the index of the first occurrence of an item in the array
arr.indexOf("Hello"); // This will return 1 because "Hello" is at index 1 in the array
// If the item is not found, it will return -1
arr.indexOf("World"); // This will return -1 because "World" is not in the array

// 4. lastIndexOf() - Returns the index of the last occurrence of an item in the array
arr.lastIndexOf("Hello"); // This will return 1 because "Hello" is at index 1 in the array
// If the item is not found, it will return -1
arr.lastIndexOf("World"); // This will return -1 because "World" is not in the array

// 5. includes() - Returns true if the item is found in the array, otherwise false
arr.includes("Hello"); // This will return true because "Hello" is in the array
arr.includes("World"); // This will return false because "World" is not in the array

// 6. slice() - Returns a shallow copy of a portion of the array into a new array object
var newArr = arr.slice(1, 3); // This will return a new array [10, "Hello"] from index 1 to index 2
// The original array will remain unchanged
// If you don't pass any arguments, it will return a copy of the entire array
var newArr = arr.slice(); // This will return a new array [10, "Hello", true, null, undefined]

// 7. concat() - Returns a new array that is the result of concatenating two or more arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2); // This will return a new array [1, 2, 3, 4, 5, 6]
// The original arrays will remain unchanged
// You can also concatenate multiple arrays at once
var arr4 = [7, 8, 9];
var arr5 = arr1.concat(arr2, arr4); // This will return a new array [1, 2, 3, 4, 5, 6, 7, 8, 9]
// The original arrays will remain unchanged

// 8. join() - Joins all the elements of the array into a string
var str = arr.join(", "); // This will return a string "10, Hello, true, null, undefined"
// You can specify a separator to join the elements
var str = arr.join(" - "); // This will return a string "10 - Hello - true - null - undefined"
// If you don't pass any separator, it will join the elements with a comma
var str = arr.join(); // This will return a string "10,Hello,true,null,undefined"

// 9. reverse() - Reverses the order of the elements in the array
arr.reverse(); // This will reverse the order of the elements in the array
// The original array will be modified
// arr will be [undefined, null, true, "Hello", 10]

// 10. sort() - Sorts the elements of the array in place and returns the sorted array
arr.sort(); // This will sort the elements of the array in ascending order
// The original array will be modified

// 11. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
// It can be used to add or remove items from the array
// It takes three arguments: index, how many items to remove, and items to add
arr.splice(2, 1, "New Item"); // This will remove 1 item from index 2 and add "New Item" at index 2
// The original array will be modified
// arr will be [10, "Hello", "New Item", null, undefined]
// If you don't pass any items to add, it will just remove the items
arr.splice(2, 1); // This will remove 1 item from index 2 and not add any items
// The original array will be modified
// arr will be [10, "Hello", null, undefined]
// After giving the index and the number of elements to delete, whatever elements more you pass on are added from that index.

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