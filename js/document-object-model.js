// console.dir(window); // window object is created by browser and we dont need to write it's  there by default
// console.dir(window.document); // window object is created by browser and we dont need to write it's  there by default
// console.dir(window.document.body); // window object is created by browser and we dont need to write it's  there by default

// DOM MANIPULATION
/*
let heading = document.getElementById("heading") :-
    can be used to get element by id
    if id is not found then it will output <null>

let heading = document.getElementsByClassName("heaading")
    can be used to get element by class name
    if class name is not found then it will output <empty HTMLCollection>

let heading = document.getElementsByTagName("h2")
    can be used to get element by tag name
    if tag name is not found then it will output <empty HTMLCollection>

Query Selector can be used to select the like we do in css

querySelector() : first matching element (if element not found then returns null)
querySelectorAll() : all matching element in a NodeList (if element not found then returns empty node list)

let el = document.querySelector("tag-name")
let el = document.querySelector(".class-name")
let el = document.querySelector("#id")
we can also use querySelectorAll() to get all element


                LEARNT FROM COURSE
tagName : returns tag for element nodes
innerText : returns the text content of the element and all its children
innerHTML : returns the plain text or HTML contents in the element
textContent : returns textual content even for hidden elements


                LEARNT BY SELF DISCOVRED
children : it gives children it returns HTMLCollection
*/

/*
THIS IS WHERE I WASTED MY 3HRS FOR NOTHING BUT UNDERSTANDIN AN SIMPLE LOOP LOGIC 
IT TOOK THREE HOURS JUST BECAUSE FOR SOME REASON IF U HAVE AN GRAMMARLY EXTENSION IT WOULDNT COUNT THAT FOR THE CHILD FROM JS BUT IF U JUST PRINT IT THERE IT WOULD SHOW LENGTH 

** console.log(document.children[0].children.length) this thing prints three if ran on browser but 2 if wrriten here in js file why ? i still cant figure it out
** console.log(document.children[0].children)

let doc = document;

console.log("Inside document:");
console.dir(doc);

console.log("Inside first loop (ch1) → document.children:");
for (let ch1 of doc.children) {
    console.dir(ch1);

    console.log(ch1.children);
    if (ch1.children.length > 0) {
        console.log("Inside second loop (ch2) → ch1.children:");
    }


    for (let ch2 of ch1.children) {
        console.dir(ch2);


        console.log(ch2.children);
        if (ch2.children.length > 0) {
            console.log("Inside third loop (ch3) → ch2.children:");
        }


        for (let ch3 of ch2.children) {
            console.dir(ch3);          
        }
    }
}

*/

/*
Attributes
    .getAttribute( attr ) //to get the attribute value
    .setAttribute( attr, value ) //to set the attribute value
    .classList : gives collection of class attribute for an element
        .add() // to add class
        .remove() // to add class
Style
    node.style

Insert Elements         let el = document.createElement(“div“)
    node.append( el )   //adds at the end of node (inside)
    node.prepend( el ) //adds at the start of node (inside)
    node.before( el ) //adds before the node (outside)
    node.after( el ) //adds after the node (outside)
Delete Element
    node.remove( ) //removes the node
*/