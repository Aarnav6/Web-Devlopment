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


//-------------------------------------------------------------------------------------------------------------------------------------------------------


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


HIGHER ORDER FUNCTION ARE :
    1. FUNCTIONS THAT TAKE FUNCTION AS A PARAMETER 
    or / either
    2. RETURN AN FUNCTION

    eg. forEach(), map() are higher order functions
*/


//-------------------------------------------------------------------------------------------------------------------------------------------------------


let nums1 = [0,1,2,3,4,5,6,7,8,9];

/*
for each loop in array is an callback function in javascript
forEach (value, index<optional>, array<optional>) 
the index and array are optional and are available for almost all the  
arr2.forEach((val, idx, ary) => console.log(`value: ${val}    idx: ${idx}    ary: ${ary}`));
arr2 = ['a','b','c','d','e','1','2','3'];
arr2.forEach( function(val) {console.log(val)} );
arr2.forEach( (val) => {console.log(val)} );
*/
//forEach() to calulate square of nums
console.log("using forEach for printing array bellow :")
let printArray = (num) => console.log(num);
nums1.forEach (printArray);

/*
map() is used to create a new array with the result of some operation.
the value from its callback returns are used to form new array 
its same as forEach() except it creates an new array from returns unlike the forEach()
*/
//map(va,index<optional>, array<optional>) to find the cube of each value
let findCube = (val) => val**3; // same as val * val * val
let cubeArray = nums1.map(findCube);
console.log("mapped cube array = ",cubeArray); // printing mapped array

/*
filter() is used when we want to form an new array based on 
include or exclude an value from an array 
*/
//filter() to create an array of even numbers
let findEven = (val) => val%2 === 0;
let evenArray = nums1.filter(findEven);
console.log("filtered even array =",evenArray); // printing filtered array

/*
reduce() is used to ouput a single value by performing 
some operations on elements of the array
eg. can be used for finding the sum or average of all elements of array

it takes to values in parameter (accumlator,current) 
the returned value is stored again in accumulator

the fowllowing arrow function can be used inside the reduce to find sum of elements of array :
eg. (res,curr) => res+curr; 

    output = nums1.reduce((res,curr) => res+curr);
    console.log(output);
*/

//reduce() to find average of an array
let findAverage = (accu,curr,idx,arr) => {
    if(idx === arr.length-1) {
        return (accu+curr) / arr.length; // return average if were on the last element
    }
    return accu+curr; // keep adding if not on the last element
}
let averageValue = nums1.reduce(findAverage);
console.log("average =",averageValue); // printing reduced array

//-------------------------------------------------------------------------------------------------------------------------------------------------------

/*


THERE ARE TWO TYPES OF IIFE (IMEDIATELY INVOKED FUNCTIONS EXPRESSION)
    must be seprated with semicolons if multiple
    are invoked imediately after declarattion
    
    USED FOR THE PREVENTING GLOBAL garbage

// named IIFE
(
    function chai(name) {
        console.log(`${name} is drinking chai`)
    }
)("someone");

// anonymous arrow IIFE
(
    () => console.log(`chai aur code`)
)()

*/