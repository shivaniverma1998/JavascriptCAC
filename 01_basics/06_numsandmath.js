const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(6));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//console.log(Math.pow(2, 3));

// +++++++++++++ Maths +++++++++++++++++++++++++++++


 console.log(Math);
 console.log("Absolute value :",Math.abs(-4));
 console.log("round off value : ",Math.round(4.6));
console.log("ceil value :",Math.ceil(4.2));
 console.log("floor value :",Math.floor(4.9));
 console.log("minimum value : ", Math.min(4, 3,0.1,  6, 8));
console.log("maximum value : ",Math.max(4, 3, 6, 8));

console.log("random value that always return  from zero to one [0,1]",Math.random());
console.log((Math.random()*10) + 1);

console.log("the random value wrap up in floor value  we have added 1 because in case the value is 0.01 it will not show 0 it will added +1  : ",Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log("math.rand give 0.something but (max- min +1) give value 0 to 10  and we added min also so that it will always  greater then 10",Math.floor(Math.random() * (max - min + 1)) + min)


console.log(Math.min(2.99999, 3,8,77,4,1));
console.log(Math.random());// it will  always return values btw 0 to 1
