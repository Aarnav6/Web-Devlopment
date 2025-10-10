console.log("\"5\" == 5 :- ", "5" == 5) // converts string into number then compare
console.log("\"5\" === 5 :- ", "5" === 5) // also checks type of data

/*

-------------------------------------------------------------------------------------------------------------------------------------------------------

+ (Unary Plus) : Tries to turn the value into a number.
- (Unary Negation): Turns the value into a number and flips its sign.
++ (Increment) : Adds one to a number.
-- (Decrement) : Subtracts one from a number.
! (Logical NOT) : Flips a value between true and false.
typeof : Tells you what type of data a value is (e.g., "string").
delete : Removes a specific property from an object.
== : Checks for equal value only (types can be different).
=== : Checks if both value AND type are the same.
!= : Checks for unequal value only (types can be different).
!== : Checks if value OR type are different.

-------------------------------------------------------------------------------------------------------------------------------------------------------

*/

// conditional Statements 
let age = 17;
let mode = "dark-mode";
let num = 86;
let color;

if(mode==="dark-mode") {
    color="dark"
    console.log("set the color=\"dark\"")
} else if (mode==="light-mode") {
    color="white"
    console.log("set the color=\"white\"")

} else {
    console.log("wrong input")
}

if(age>=18) {
    console.log("you can vote you are above 18")
} else {
    console.log("you can not vote you are under 18")
}

if(num%2===0) {
    console.log(num, " is even")
} else {
    console.log(num," is odd")
}

console.log("using ternary operator for age variable: ", age >= 18 ? "adult" : "not-adult");

/*
we can write one liners when we only have single objective after the condition
example:
 if(mode=="datk") console.log("its dark mode");

we can also use ternary operator like java

age >= 18 ? "adult" : "not-adult" ;
*/