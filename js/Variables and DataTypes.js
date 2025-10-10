/*
ES6 (ECMAScript 2015) 
ES6, officially known as ECMAScript 2015, was the biggest update to JavaScript ever.
After its release, the standards body decided to release smaller, annual updates, 
so subsequent versions are named by the year (ES2016, ES2017, etc.).

Its goal was to modernize the language and fix common frustrations developers had. 
Some of its most important new features include:

--->let and const: New ways to declare variables with better scoping rules than the old var.

--->Arrow Functions (=>): A shorter, cleaner syntax for writing functions.

--->Promises: A much better way to handle asynchronous operations 
    (like fetching data from a server), avoiding "callback hell."

--->Classes: A simpler syntax for creating objects and handling inheritance, 
    making JavaScript feel more like other object-oriented languages.

--->Template Literals: The ability to create strings using backticks (`) 
    which can span multiple lines and directly include variables (${myVar}).

--->Destructuring: An easy way to extract values from arrays or objects into distinct variables.

--->Default Parameters: The ability to give a default value to a function parameter.

-------------------------------------------------------------------------------------------------------------------------------------------------------

in javascript before 2015 'var' was used it allows redeclaring,updating and it will become an global scope varriable 
in mordern era we dont use 'var' except we use 'let' also we can also use the
'const' stops user from updating the value also it is MUST TO ASIGN AN INTIAL VALUE TO CONST 

const a; //this gives an error
let a; console.log(a) // this gives output as undefined 
// by default varriables are unasigned varriables are assigned with undefined

-------------------------------------------------------------------------------------------------------------------------------------------------------

typeof → unary operator, not a function
Parentheses are optional, mainly used for grouping or clarity
Use typeof variable as the clean and conventional form ✅

const person = { name: "Aarnav", age: 18 }; 

// ✅ Allowed — modifying property
person.age = 19;

// ❌ Not allowed — reassigning entire object
person = { name: "Alpha" }; // ❌ TypeError

-------------------------------------------------------------------------------------------------------------------------------------------------------

let car = { brand: "Tesla" };

// ✅ modify property
car.brand = "BMW";

// ✅ reassign entire object
car = { brand: "Audi" };

-------------------------------------------------------------------------------------------------------------------------------------------------------

*/


let a="Hello world"
const person = { name: "Aarnav", age: 18 };
console.log(a);
console.log("person:-", person)
console.log("person.age:- ", person.age) //works fine
console.log("person[\"age\"]:- ", person["age"]) //works fine


// -------------------------------------------------------------------------------------------------------------------------------------------------------
// without default case
let fruit = 'Apple';
let message;

switch (fruit) {
  case 'Apple':
    message = 'Apples are red and keep the doctor away.';
    break;
  case 'Banana':
    message = 'Bananas are yellow and full of potassium.';
    break;
  case 'Orange':
    message = 'Oranges are a great source of Vitamin C.';
    break;
}
console.log(message); // Output: Apples are red and keep the doctor away.


// -------------------------------------------------------------------------------------------------------------------------------------------------------
// with default case
fruit = 'Grapes';
message;

switch (fruit) {
  case 'Apple':
    message = 'Apples are red.';
    break;
  case 'Banana':
    message = 'Bananas are yellow.';
    break;
  case 'Orange':
    message = 'Oranges are orange.';
    break;
  default:
    message = "Sorry, I don't have information about that fruit.";
}
console.log(message); // Output: Sorry, I don't have information about that fruit.


// -------------------------------------------------------------------------------------------------------------------------------------------------------
// fall-though for multiple cases with same value
fruit = 'Strawberry';
let fruitColor;

// This is the correct way to group cases
switch (fruit) {
  case 'Apple':
  case 'Strawberry':
  case 'Cherry':
    fruitColor = 'Red';
    break;
  case 'Banana':
  case 'Lemon':
    fruitColor = 'Yellow';
    break;
  default:
    fruitColor = 'Unknown';
}

console.log("The fruit color is ${fruitColor}."); // Output: The fruit color is Red.




/*

In Python, this feature is called an f-string (formatted string literal).
In JavaScript, it's called a Template Literal (or template string).
In Java Traditional, it's called a Formatted String.
In Java 21+, it's called a String Templates.


python:-
print(f"this is an Formatted String Literal with value of a = {a}")

javascript:-
console.log(`this is an Template Literal with value of a = ${a}`)

java (traditional):- 
String message = String.format("this is an Formatted String Literal with value of a = %s",a)
System.out.println(message);

java (21+):-
String message = STR."this is an Formatted String Literal with value of a = \{a}"
System.out.println(message);

*/
