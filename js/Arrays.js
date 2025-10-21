// both are valid ways to create an array
// let arr4 = Array(1,2,3,4,5,6,7); this is using constructor, cant be used for single value since it creates a new, empty array with its length property set to that number.
// let arr4 = [1,2,3,4,5,6,7]; this is using literal

let marks = [20,30,40,50];
let random = [2, "a", true, 24.76, [4,5,6,"this is inner array"]];
let new_student = {
    std_name : "student007",
    age : 54,
    height : "6'2 ft"
};
let arrayOfAll = [marks, random, student];
console.log(marks)
console.log(random)
console.log(new_student)
console.log(arrayOfAll)

for (let i of marks) {
    console.log(i)
}
for (let i in new_student) {
    console.log(`the value stored at key \"${i}\" is ${new_student[i]}`)
}

const ar1 = [1,2,3,4,5];
Object.freeze(ar1);
let ar2 = ar1;
ar2[0] = 99; // the freeze will will lock array's elements 
ar1[0] = 99; // the freeze will will lock array's elements 
// ar1 = [2,3,4,5,6,7] // to prevent this reasign of refrence we can make it const
console.log(ar1);
console.log(ar2);

testArray = ["potato", "apple", "litichi", "tomato"];
console.log(testArray)
testArray.push("chips", "burger", "panner");
console.log(testArray)
testArray.pop()

//using concat
indianHeros = ["krish","shaktiman"];
marvelHeros = ["ironman", "spiderman", "thor"]
dcHeros = ["superman", "batman"];
allHeros = indianHeros.concat(marvelHeros).concat(dcHeros);
console.log(indianHeros);
console.log(marvelHeros);
console.log(dcHeros);
console.log(allHeros);

//using to string
console.log(allHeros.toString());

// using unshift and shift
allHeros.unshift("shift method");
console.log(allHeros);
allHeros.shift();
console.log(allHeros);

//using splice
arr123 = ["0","1","2","3","4","5","6","7","8","9","10"];
arr123.splice(3,2,"three","four");
console.log(arr123);
/*
array methods

push() : append in the list
pop() : delete's the last value and returns it, if array is empty returns undefined.
unshift(): add to start of the list
shift() : removes the first value and returns it

toString() : returns all array items seprated with an comma without affecting original array.
concat() : used to concatenate, joins multiple array and returns the result.

slice() : is same as python slicing it returns piece of list it takes start(inclusive), end(exclusive/non-inclusive) without affecting original array.



splice() :

    📘 Array.splice() — Summary Notes  
    Purpose: Used to add, remove, or replace elements in an array.
    Mutates Original Array: ✅ Yes (changes the array directly)
    Returns: An array of removed elements
    if deleteCount is not passed it will delete all elements from start index given
    🧠 Syntax
    array.splice(start, deleteCount, item1, item2, ...)
    start → Index where modification begins
    deleteCount → Number of elements to remove
    item1, item2, ... → Elements to add at the start index (optional)
*/


