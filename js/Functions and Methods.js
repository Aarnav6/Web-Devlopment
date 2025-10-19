//functions here are created by function keyword other part is normaly same as other languages
function sum(a,b) {
    return a+b;
}
function countVowels(str) {
    let count = 0
    const vow = Object.freeze(['a','e','i','o','u']);
    console.log(`input string is : ${str} `);
    for(ch of str) {
        if(vow.includes(ch)) {
            count++;
            console.log(`found an vowel ${ch}`);
        }
    }
    return count;
}
//in java script we can create arrow functions and they can be stored in an variable or can be passed as an argument if needed
const printHello = () => console.log("hello world, from the arrow function");

//calling functions 
console.log("sum(4,9) = ", sum(4,9));
console.log(`total vowels are = ${countVowels("aeiou")}`);
printHello();
/*
function in java script can be passed as an value or argument which can return an value as well
callback function is an concept of passing an function as an argument


function abc(num) {
    return num;
}
function printValue(abc){
    console.log(abc);
}


const person1 = {
    name: "Aarnav",
    greet: function printer() {
        console.log("Hello!");
    }
};
console.log(person1["greet"]);


for each loop in array is an callback function in javascript
forEach (value, index, array)


arr2 = ['a','b','c','d','e','1','2','3'];
arr2.forEach( function(val) {console.log(val)} );
arr2.forEach( (val) => {console.log(val)} );
*/

arr2 = ['a','b','c','d','e','1','2','3'];
arr2.forEach((val, idx, ary) => console.log(`value: ${val}    idx: ${idx}    ary: ${ary}`));


/*
HIGHER ORDER FUNCTION ARE :
    1. FUNCTIONS THAT TAKE FUNCTION AS A PARAMETER 
    or / either
    2. RETURN AN FUNCTION

    eg. forEach() is an higher order function
*/


//to calulate square of nums
let nums1 = [0,1,2,3,4,5,6,7,8,9];
let calculateSquare = (num) => {
    console.log(`square of ${num} = ${num**2}`); // same as val * val
}
nums1.forEach (calculateSquare);