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