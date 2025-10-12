//-------------------------------------------------------------------------------------------------------------------------------------------------------
//for loop
for(let i=0 ; i<5 ; i++) {
    console.log("hello loop I'm Aarnav");
}

for(let i=0 ; i<5 ; i++) {
    for(let j=0 ; j<=i ; j++) {
        console.log("*");
    }
    console.log("\n")
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//while loop
let i = 0;
while(i<5) { //checks condition then run in the block inside if the condition is true
    console.log("i = ",i)
    i++
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//do while loop
i=0 
do{ //runs at least single time since it do block runs before condition check
    console.log("i = ",i)
    i++
} while (i<5)

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//for-of loop
//Used for: iterating over the values of an iterable object — e.g. arrays, strings, maps, sets, etc.
let str = "I'm Aarnav Sharma"
for(let val of str) {
    console.log(val)
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//for-in loop
//Used for: iterating over the keys (property names) of an object.
let student = {
    name: "Rahul Kumar",
    age: 19,
    height: "173cm",
    cgpa: 7.5,
    isPass: true,
};
for(let key in student) {
    console.log(`Key=${key} value=${student[key]}`);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//Strings in js
//NOTE STRINGS IN JAVASCRIPT ARE IMMUTABLE


let paragraph = `                this is an special type of string in java script called template literal
                we can use it for the multi line string and also we can use it for the formatted string
                this formated string phenomena in which we can embed the placeholders in string is called
                string interpolation we can type an dollar sign and typing the curly braces we can type an 
                variable to print its value or we can use an expresstion to inside the curly braces like 
                1+2+3 which will print 6 there                                                           `;
console.log(paragraph);

// string methods

console.log(paragraph.toUpperCase());
console.log(paragraph.toLowerCase());


/*
trim methods remove the leading and trailing spaces in an string, 
hence spaces in starting and ending are removed does not affect spaces inside the stirng
*/
console.log(paragraph.trim());


/*
in string.slice starting index is inclusive, ending index is exclusive if only one argumnent is passed it will be considred as
start and it will slice from start (inclusive) to the end of string
*/
console.log(paragraph.slice(0, 100)); 


console.log(paragraph.concat("this is appended using the concat() method in string"));
console.log(paragraph.replace("s","--s letter is replaced with ABCDEFGHI"));
console.log(paragraph.replaceAll("s","--s letter is replaced with ABCDEFGHI"));
console.log(`using the paragraph.charAt(18) = ${paragraph.charAt(18)}`);

s = "I LOVE JS";
s[0] = "S"; // this will not change the  I into S since string in javascript are Immutable
console.log(s);
s = s.replace("I","S");
console.log(s);


// it was an quesiton in the lecture :-
// let fullName = prompt("enter the your name");
// let tempEmailId = "@".concat(fullName).concat(fullName.length);
// console.log(tempEmailId);