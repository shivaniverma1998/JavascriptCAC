// console.log('A');
// setTimeout(() =>
// (console.log('B')))

// ['C', 'D'].forEach((x) => 
//     console.log(x))

// console.log('E');

// output in sequence : "A" "C" "D" "E" "B"

// const myObject = {
//     withValue: "have some value",
//     withNumber: 1234,
//     nullValue: null,
//     undefinedValue: undefined,
//     emptyValue: "",
//     falseValue: false
//   };
//   const removeFalsyElement = object => {
//     const newObject = {};
//     Object.keys(object).forEach(key => {
//       if (object[key]) {
//         newObject[key] = object[key];
//       }
//     });
//     return newObject;
//   };
//   console.log(removeFalsyElement(myObject));


// let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

// function removeFalsey(arr) {
//     // Return the first parameter of the callback function
//     return arr.filter((val) => val);
// }

// console.log(removeFalsey(arr));

function compactObject(obj, falsyValues = ['', null, undefined, false, 0]) {
    if (Array.isArray(obj)) {
      return obj
        .map(item => compactObject(item, falsyValues))
        .filter(item => falsyValues.indexOf(item) === -1 && item !== undefined);
    }
    
    if (obj && typeof obj === 'object') {
      const result = Object.entries(obj).reduce((acc, [key, value]) => {
        let cleanedValue = compactObject(value, falsyValues);
        if (falsyValues.indexOf(cleanedValue) === -1 && cleanedValue !== undefined) {
          acc[key] = cleanedValue;
        }
        return acc;
      }, {});
      
      // Return the object itself if it's empty, otherwise return the reduced object
      return Object.keys(result).length === 0 ? {} : result;
    }
    
    return obj;
  }
let obj = {
    a: 1,
    b: 0,
    c: '',
    d: null,
    e: undefined,
    f: false,
    g: {
      a: 1,
      b: 0,
      c: '',
      d: null,
      e: undefined,
      f: false,
    },
    j: {},
    h: [],
    i: [1],
  }
  console.log(compactObject(obj, [0, false, '', null, undefined]))
  // 👉 { a: 1, g: { a: 1 }, i: [ 1 ] }
  let input1 = "Hello, World!";
let output1 = compactObject(input1);
console.log(output1); // Expected output: "Hello, World!"

let input2 = {a: 1, b: "", c: null, d: 4, e: undefined};
let output2 = compactObject(input2);
console.log(output2); // Expected output: {a: 1, d: 4}


let input3 = {a: 1, b: {c: null, d: 2}, e: {f: "", g: 3}};
let output3 = compactObject(input3);
console.log(output3); // Expected output: {a: 1, b: {d: 2}, e: {g: 3}}

let input4 = {};
let output4 = compactObject(input4);
console.log(output4); // Expected output: {}

let input5 = [5, [0], [false, 16]];
let output5 = compactObject(input5);
console.log(output5); // Expected output: [5, [], [16]]

let input6 = {a: null, b: undefined, c: ""};
let output6 = compactObject(input6);
console.log(output6); // Expected output: {}

let input7 = [[[]], true, {}, [], 42, 232, 4242, 942];
let output7 = compactObject(input7);
console.log(output7); // Expected output: [[[]], true, {}, [], 42, 232, 4242, 942]
  
