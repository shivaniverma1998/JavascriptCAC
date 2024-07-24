// function sum(){
//     let a = 8;
//     const b = 2;
//     var c = a +b;

// }
// console.log(a,b,c);
// sum ();
// console.log(a,b,c);

// sum();
// console.log(c);


// ******************************************

// let arr = [1,2,3,4,5]
// console.log(arr[2],arr.length);
// arr.length = 0;
// console.log(arr[2],arr.length);

//**********************************************


// for (var i = 0; i < 3; i++) 
// {
//   setTimeout(function() { alert(i); }, 1000 + i);
// }
// Here's what happens step by step:

// Loop Execution: The for loop runs three times, starting with i = 0 and incrementing i until i = 2.

// setTimeout Function: Inside the loop, setTimeout is called each time. setTimeout is used to execute a function (function() { alert(i); }) after a specified delay (1000 + i milliseconds).

// Closure and Scope: The anonymous function inside setTimeout (function() { alert(i); }) creates a closure over the variable i. This means that each function retains a reference to the same i variable from the outer scope of the loop.

// Alert Function: After the specified delay (which increases with each iteration due to 1000 + i), each setTimeout callback function (function() { alert(i); }) is executed.

// Alert Content: When each callback function executes, it alerts the current value of i. However, due to closures and how JavaScript handles variable scope, by the time these functions execute (after the delays), i will have the value of 3 because that's the value it has after the loop completes.

// Therefore, despite the intention to alert 0, 1, and 2 respectively after 1000ms, 1001ms, and 1002ms, all three alerts will display 3. This happens because each callback function references the same variable i in the outer scope, which, by the time the functions are executed, has already been incremented to 3 by the end of the loop.

// To achieve the desired behavior of alerting 0, 1, and 2 correctly, you can use a closure to capture the value of i at each iteration, ensuring each callback function gets the correct value:

// javascript
// Copy code
// for (var i = 0; i < 3; i++) {
//   (function(j) {
//     setTimeout(function() { alert(j); }, 1000 + j);
//   })(i);
// }
// Here, the immediately-invoked function expression (IIFE) (function(j) { ... })(i) creates a new scope for each iteration of the loop, capturing the current value of i (as j) and passing it into the closure of setTimeout. This way, each alert will correctly display 0, 1, and 2 after the respective delays.

//***************************************************

// for(let i = 0; i <5; i++)
//     {
//         setTimeout(()=>{
//             console.log(i);
//         },0)
//     }

// ***********************************************************

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// ****************************************************************
// console.log(1+true);
// console.log(1+false);
// console.log(1+true); 
// console.log(1-false); 
// console.log(1+'2'-1);   // 1+ '2 => 1 concatenate with '2'   => '12' - 1   now - operator will perform as  '12' convert to number 12 - 1 => 11

//****************************************************************

(function fnA(a) {
    return (function fnB(b) {
      console.log(a); // What is logged?
    })(1);
  })(0);

  var obj = { a :1, b : 2, c: {age: 30}};
  var cloneobj = Object.assign({}, obj);
  console.log(cloneobj);
  obj.c.age = 45;
  console.log(obj);
  console.log(cloneobj);