HTML - to code what all things will be visible on the browser
CSS - to beautify whatever is in HTML
JS - to add functionality to whatever is shown in the browser(interactivity - response to any of my action)

How to add JS in your HTML code?
1. Internal JS - adding JS code in the same HTML file itself using script tags
Script tags can be given in both head and body. (for now - know that you can give it in either place)
2. Enternal JS -- adding JS code in another file with the extension .js. You link this new file to your HTML file using the script tag
eg - <script src="profile.js"></script>
src is the short form for source. It contains the path of the JS file whose code you want to run.
You can link as many number of JS files in your HTML file.

How to run JS code - 
1. By linking JS files to a dummy HTML file and then when we open the HTML file in a browser, it runs the jS files on the console.
2. You use your browser console to type JS code and run it.
3. Use an online website to run it. (onecompiler.com)

The first thing we learn - how to print something
Python: print() -> sumblime text, pycharm
Java: System.out.println(); -> eclipse, intellij
JavaScript: console.log(); -> VS Code

Just like in Java, JavaScript code also needs to end in ; always. Without ;, it works in non-strict mode(which is the default one). In strict mode, you will need to give a ;.
A good programming practice - even if it is in non-strict mode, always use a ;.

console.log(); -> you can print a number, decimal value, character, string, boolean, etc.

Comments in JS - 
1. Single Line Comment: //
2. Multi Line Comment: multiple // in every line OR /* */

How to write variables in JS?
Java: int a = 10;
Python: a = 10;
Javascript: var a = 10;
var is the short form for variable.

In python and JS, variables are loosely typed which means you don't have to sprcify what type of data you want to hold.
a = 10 -> python(no data type involed)
int a = 10; -> in Java, datatype is a must
var a = 10; -> JS(no data type involved)
In programming languages like Java, where we have tightly coupled variables - we need to define the data type of the variable during declaration only. Once the type of the variable is declared, you cannot change it and you can only store values of that data type in that variable.

var a = 10; -> this line consists of 2 parts - variable declaration, and variable definition
Just like in Java, you can break the the 2 statements tohether.
int a = 10;
int a;
a = 10;

var a  = 5;
var a; -> This portion is called variable declaration.
a = 10; -> This portfion is called defining the value of a variable.

This is one difference from java. In Java, the variable declaration cannot happen multiple times but the variable definition can gave multiupe times. In JS, even the variable declaration can happen multiple times.

In Java, you cannot access the value of a variable even before defining it. In JS, you can access the value of a variable even before defining it. So, in JS if you have just declared a variable, then also you can access it. The only problem is that it will store the value of "undefined".
REASON - There is some time between the varible decleration and defniton. Till then we have an automatically assigned undefined value in that variable. In Java, you cannot access a variable that has no value definied. But in JS, you can access a variable even if Only declaration might havde happened. The value of the variable before some value is assigned is undefined.

These are the 2 differences from Java - 
1. Multiple declarations can happen in JS.
2. Defined value is stored before definition and after declaration in JS.

Data Types in JavaScript: 
5 Primitive Data Types - number, string, boolean, null, undefined
1 Non-Primitive Data Type - object

number - includes all lengths of integers(byte, short, int, long)
number - 10, 1000002347823423432, 2.3672, 76234523874.23467237 everything gets included in number data type

string - everything which is either enclosed in single quotes or double quotes is a string
string - '3', 'f', "f", "3", 'hello', "hello", 'true', "false"

boolean - true, false (here the true and false starts with small case letters. In Java, they started with capital letters)

null - in Java, if any variable stores null, it immediately throws the null pointer exception. In JS, you can explicitly by yourself store null in a variable.
var a = null;

undefined - similar to null. 
var a = undefined;

The only difference between null and undefined is that of a good programming practice. 
Syntactically and use-case wise there is not much difference. 
Suppose, I have a variable and I don't know the value of it, then I may store null or undefined in it. Suppose this variable will never ever store a value then store null in it. But if currently it doesn't have a value but in the future it will have, then we store undefined in it. 

null means absence of value. Undefined means known absence of value.

Variable Naming Convention - 
1. A variable can contain small case letters.
2. A variable can contain upper case letters.
3. A variable can contain digits.
4. A variable can contain only 2 special characters - _ and $.
5. A variable cannot start with a digit.
eg of valid variable names - myVar, myvar, my_var, _myvar, $myvar, my$var, myVar2, 2myVar(this is not valid since this is starting with a number)

There are some popular variable name writing styles - my_var(snake case), myVar(camel case), my-var(kebab case)

3 Different ways of declaring a variable - 
1. var
2. let = similar to var but is defined only inside a specifc local scope
In JS, you can define a local scope using curly brackets.
The entire program is running on a global scope. We can create smaller local scopes inside the global scope.
Global scope contains the memory and few threads and all other resources which will be required to run my code.
Whenever I'm tryng to fetch the value of a variable, then JS first tries to search for it in its local scope. If it finds, then great otherwise it goes to its parent scope to search for it.

var a = 10;
var b = 30;
{
  let a = 20;
  {
    let a = 30;
    console.log("a inside child 2 = "+a);
  }
  console.log("a inside child 1 = "+a);
}
console.log("a inside parent which is global here = "+a);
Here, in the above piece of code - we are creating 1 child scope inside the global scope. Then we are creating another child scope inside our first child scope. Whenever U am trying to access the value of variable 'a', I am getting a value in that respective scope itself.

var a = 10;
var b = 30;
{
  {
    console.log("a inside child 2 = "+a);
  }
  console.log("a inside child 1 = "+a);
}
console.log("a inside parent which is global here = "+a);
Here all the 3 'a's will be 10 itself because any child scope which doesn not have the variable you are trying to acess will got and search in its parent scope. If not found, it will backtrack to its grand parent's scope too. 

let is a local delcarator while var is a global declarator.

var a = 10;
var b = 30;
{
  var a = 20;
  {
    var a = 30;
    console.log("a inside child 2 = "+a);
  }
  console.log("a inside child 1 = "+a);
}
console.log("a inside parent which is global here = "+a);
Here in the above case, all 3 'a's will be 30 itself because in the children scopes, i am not creating new 'a' variables. But I am just updating the value of the global 'a' variable.
THIS IS THE DIFFERENCE BETWEEN VAR AND LET.

3. const = It is also a local declarator just like Let but there is 1 additional feature -> In const, you cannot change the value of the variable after defined.

In const variables, you cannot just declare and not define it. Const variables need to be defined instantly when they are declared.
REASON - When a variable is just declared and not defined, then it takes the value as undefined. Later when we define it, the value changes. Since, in const we can never change the value, it cannot be just declared and not defined.

Arithmetic Operators in JS - +(addition), -(subtraction), /(decimal division), %(modular division), *(multiplication), **(exponent)

Assignment Operator - =

Relational Operator - >(greater than), <(less than),==(equal to), !=(not equal to), ===(case sensitive equal to), !==(case sensitive not equal to), >=(greater than or equal to), <=(less than or equal to)
"5"==5 -> this returns true because JS is a very linient programming language. It implicitly typecasts the string 5 into integer 5 and then compares and gives true
5==5 -> obviously true
"5"===5 -> in case of ===, it doesn't do any implicity type conversion before comparing. Thus it gives false. 
"5"!=5 -> here again it first implicitly converts string 5 into integer 5 and then compares and gives false.
"5"!==5 -> here it doesn't do any implicity type conversion and thus returns true


Logical Operators - &&(AND), ||(OR), !(NOT)

Bitwise Operators - &(AND), |(OR), ~(NOT), ^(XOR), <<(LEFT-SHIT), >>(RIGHT-SHIFT), >>>(ZERO FILL RIGHT-SHIFT)
XOR - true if both are different and false if both are same
LEFT-SHIFT - left-shift by n number of bits means adding n number of 0s at the end
RIGHT-SHIFT - right-shift by n number of bits means adding n number of 0s at the beginning and removing n number of bits from the end

Some inbuilt values in JS - 
1. Number.MAX_VALUE - gives you the largest positive value that can be stored in your computer using the JS programming language
2. Number.MIN_VALUE - gives you the smallest negative value that can be stored in your computer using the JS programming language
3. Infinity - represents Inifinity
Both Infinity and -Infinity are a valid thing in JS.
Infinity + Infinity = Infinity
Infinity - Infinity = NaN
Infinity * Infinity = Infinity
Infinity / Infinity = NaN
Anything divided by 0 is Infinity but take care of the sign.
Any operation with a NaN will result in a NaN.

String related Functions - 
1. str.length - this is not a function but a property/attribute of the string
2. str.charAt(i) - this returns the character at ith index
3. str1.concat(str2) - it adds str1 and str2 and returns a new value. This doesn't change the value of str1 or str2. It just adds them and returns the new concatenated value.
4. str.indexOf(c) - it returns the index of the given substring in the string. It returns -1 if the substring doesn't exist. If multiple occurances of that substring exists, then the index of the very first occurance is returned.
5. str.lastIndexOf(c) - it also works like indexOf. The only difference is that in case of multiple occurances of the substring it will give the index of the last occuring subsrting.

Type coercion/Implicite Type Casting -
1. string + number = concatenated string because the number gets implictly type casted into a string
"hello" + 54 = "hello54"
2. string - number = number
"54" - 4 = 50
"hello" - 4 = NaN
In string - number, JS implicitly tries to convert the string into a number. "54" can get converted into 54 but "hello" cannot get converted into a number and thus it gets converted into NaN. Then NaN-4 is NaN.
3. string - string = number
"54" - "4" = 50
4. string * number = number
"5" * 4 = 20
5. string * string = number
"5" * "4" = 20
6. string / number = number
"20" / 5 = 4
7. string / string = number
"20" / "5" = 4

Explicit Type Conversion - 
1. String() - it helps to convert number or null or undefined or boolean into a string.
String(10); String(null); String(undefined); String(true);
2. toString() - it is also used to convert a number or a boolean only to a string. It cannot be used to convert null or undefined into string.
(20).toString(); (true).toString(); true.toString();
3. Number() - it helped to convert a string or boolean or null or undefined into a number.
Number("2") = 2
Number("abc") = NaN
Number(true) = 1
Number(false) = 0
Number(null) = 0
Number(undefined) = NaN
4. parseInt() - it is also used to convert a string only into a number and not boolean or null or undefined.
parseInt("20") = 20
parseInt("abc") = NaN
parseInt(true) = error
parseInt(false) = error
parseInt(null) = error
parseInt(undefined) = error
5. Boolean - it helps us to convery a number or string or null or undefined into a boolean.
Boolean(20) = true
Boolean(0) = false
Boolean of any number except 0 will give true. Only 0 will give false.
Boolean of any string except empty string gives true. Only empty string gives false.
Boolean(null) = false
Boolean(undefined) = false
Boolean of only null, undefined, 0, and empty string is false. Rest everything is true.
6. + - it helps us to convert just a string into an integer.
+"42" = 42
+"abc" = NaN