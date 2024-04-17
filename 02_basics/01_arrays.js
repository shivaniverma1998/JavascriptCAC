//array

const myArr = [0,1,2,3,4,5] // always in square bracket    and elements can be in number or string collection opf multiple items in single variable(myArr)
  // decalare in de\ifferent way

  const myhero = ["gold" , "silver"]

  const myArr2 = new Array(1,2,3,4)
  console.log(myArr2);
  console.log(myArr);   // zero base indexing 
console.log(myArr[1]);
// array-copy operations create shallow copies.  shallow copy of an object is a copy whose properties share the same references
// it means if we make any changes it will be made changes on original 

// Array methods

myArr.push(9);
myArr.push(7);
myArr.pop();
myArr.unshift(9);
myArr.unshift(-2);   // unshift is uised when we have to put value in the front
myArr.shift();  // it will remove first  element from front
console.log(myArr);
console.log(myArr.includes(9));  // boolean type -it means if myArray include 9 or not it return true if 9 present or false not present

console.log(myArr.indexOf(9));  //index of 9 is zero
console.log(myArr.indexOf(100));  // as it returns  -1 bcz 100 not present in array

const newArr = myArr.join()   // join() actually bind the both array and convert it to string type
console.log(newArr);


console.log(typeof(newArr));  // join() actually bind the both array and convert it to string type

// slice or splice 

// 1. slice 

console.log("A",myArr);

const  myn1 = myArr.slice(1,3)   // it slice the array and take out its (1,3) part
console.log("B",myArr);
console.log(myn1);


console.log("********* next operation*******")
const  myn2 = myArr.splice(1,3) // the difference between  splice and slice is splice will  take oyut the subarray and original array will change also  made 
console.log("C",myArr);
console.log(myn2);