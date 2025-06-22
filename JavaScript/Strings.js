var a = "hello world";
var a = 'hello world';
// Anything you wrap in single quotes or double quotes is a string in JavaScript.
var b = "hello 'world'"; // You can use single quotes inside double quotes
var c = 'hello "world"'; // You can use double quotes inside single quotes
var d = 'a'; // Treated as a string in JS

// INBUILT FUNCTIONS TO MANIPULATE STRINGS
// 1. length - Returns the length of the string
var str = "hello world";
console.log(str.length); // Outputs: 11

// 2. toUpperCase() - Converts the string to uppercase
console.log(str.toUpperCase()); // Outputs: "HELLO WORLD"

// 3. toLowerCase() - Converts the string to lowercase
console.log(str.toLowerCase()); // Outputs: "hello world"

// 4. charAt(index) - Returns the character at the specified index
console.log(str.charAt(0)); // Outputs: "h"
// Just like elements in arrays are indexed from 0
// Characters in string are also indexed from 0

// 5. indexOf(substring) - Returns the index of the first occurrence of the substring
console.log(str.indexOf("world")); // Outputs: 6
// If the substring is not found, it returns -1
console.log(str.indexOf("earth")); // Outputs: -1

// 6. lastIndexOf(substring) - Returns the index of the last occurrence of the substring
console.log(str.lastIndexOf("o")); // Outputs: 7
// If the substring is not found, it returns -1
console.log(str.lastIndexOf("z")); // Outputs: -1

// 7. substring(start, end) - Returns the substring from start index(inclusive) to end index(exclusive)
console.log(str.substring(0, 5)); // Outputs: "hello"
// If end is not provided, it returns the substring from start index to the end of the string
console.log(str.substring(6)); // Outputs: "world"

// 8. slice(start, end) - Similar to substring but can accept negative indices
console.log(str.slice(0, 5)); // Outputs: "hello"
// works exactly like substring. Infact substring is used more and not slice in strings

// 9. split(separator) - Splits the string into an array of substrings based on the separator
console.log(str.split(" ")); // Outputs: ["hello", "world"]
// If the separator is not found, it returns an array with the original string
console.log(str.split("x")); // Outputs: ["hello world"]
// If no separator is provided, it returns an array with the original string
console.log(str.split()); // Outputs: ["hello world"]
// This is very useful if you want to convert a sentence into an array of words

// 10. replace(searchValue, newValue) - Replaces the first occurrence of searchValue with newValue
console.log(str.replace("world", "everyone")); // Outputs: "hello everyone"
// If the searchValue is not found, it returns the original string
console.log(str.replace("earth", "everyone")); // Outputs: "hello world"
// If you want to replace all occurrences, you can use a regular expression with the global flag
console.log(str.replace(/o/g, "a")); // Outputs: "hella warld"

// 11. trim() - Removes whitespace from both ends of the string
console.log("   hello world   ".trim()); // Outputs: "hello world"
// If there is no whitespace, it returns the original string
console.log("hello world".trim()); // Outputs: "hello world"
// If you want to remove whitespace from only one end, you can use trimStart() or trimEnd()

// 12. startsWith(searchString) - Returns true if the string starts with the specified searchString
console.log(str.startsWith("hello")); // Outputs: true
// If the string does not start with the searchString, it returns false
console.log(str.startsWith("world")); // Outputs: false

// 13. endsWith(searchString) - Returns true if the string ends with the specified searchString
console.log(str.endsWith("world")); // Outputs: true
// If the string does not end with the searchString, it returns false
console.log(str.endsWith("hello")); // Outputs: false

// 14. includes(searchString) - Returns true if the string contains the specified searchString
console.log(str.includes("world")); // Outputs: true
// If the string does not contain the searchString, it returns false
console.log(str.includes("earth")); // Outputs: false