//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof id);
console.log(typeof heros);
console.log(typeof myObj);



// https://262.ecma-international.org/5.1/#sec-11.4.3
// /datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

// //i also learned here about stack and heap  
// where in stack the value are copied from the original  where as in heap the value is referenced from original if any changedmade it is made directly 
let oneuser = {
    email:  "Shivani",
    upi : "shivani@okaxis.com"
}

let twouser = oneuser

twouser.email = "Shivani1998@gmail.com"

console.log(oneuser.email);

console.log(twouser.email);