// Dates

let myDate = new Date()
console.log("date conversion by toString() function :--> ",myDate.toString());
console.log("date conversion by toSDatetring() function : --> ",myDate.toDateString());
console.log("date conversion by toLocaletring() function:-->",myDate.toLocaleString());
console.log("the type of Date in javascript is OBJECT : -->",typeof myDate);  // the type of Date is Object

let myCreatedate =  new Date(2023 , 0 , 23);

console.log("this is the format fortoLocaleDateString() :--> ",myCreatedate.toLocaleDateString());


console.log("this is the format fortoLocaleString()  : --> ",myCreatedate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("2024-01-12")

//console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()

 console.log(myTimeStamp);   // myTimestamp me value jayegi ki kitne milisecond hue hai ab tak
 console.log(myCreatedDate.getTime());  //line 19  wali date se ab tk kitne milisecond or time hua
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

 `${newDate.getDay()} and the time `

 newDate.toLocaleString('default', {
     weekday: "long",
    
 })


