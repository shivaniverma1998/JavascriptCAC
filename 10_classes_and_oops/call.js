// In JavaScript, the execution context is an environment where JavaScript code is executed.
//  It defines the scope, variables, and functions accessible to the code at a particular point in time. 


// Types of Execution Contexts:
// There are two types of execution contexts: global and function. 
// The global execution context is created when a JavaScript script
//  first starts to run, and it represents the global scope in JavaScript.
//   A function execution context is created whenever a function is called,
//    representing the function's local scope.

// Global Execution Context (GEC):
// This is the default execution context created when a
//  JavaScript script starts running. It includes global variables and functions.

// Function Execution Context (FEC):
// This is created every time a function is called. Each function call has 
// its own FEC, which is destroyed when the function completes execution.

// The call stack is a data structure that keeps track of the execution
//  contexts during the program's execution. When a function is called, 
//  a new execution context is pushed onto the call stack. When the function completes, 
//  its execution context is popped off the stack. 

// What is the Call Stack?
// To keep the track of all the contexts, including global and functional,
//  the JavaScript engine uses a call stack. A call stack is also known 
//  as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

// It uses the LIFO principle (Last-In-First-Out). When the engine 
// first starts executing the script, it creates a global context and pushes 
// it on the stack. Whenever a function is invoked, similarly, the JS engine
// creates a function stack context for the function and pushes it to the top 
// of the call stack and starts executing it.



function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

//When execution of the current function is complete, then the JavaScript 
//engine will automatically remove the context from the call stack and it goes back to its parent.

// The syntax of the call() method is:

// func.call(thisArg, arg1, ... argN)
//Note: By using call(), we can use the functions belonging to one object to be assigned and called for a different object.



//Example 2: With and Without Using call() Method

// function that finds product of two numbers
function product(a, b) {
    return a * b;
  }
  
  // invoking product() without using call() method
  let result1 = product(5, 2);
  
  console.log("Return value Without using call() method: " + result1);
  
  // invoking product() using call() method
  let result2 = product.call(this, 5, 2);
  
  console.log("Return value Using call() method: " + result2);