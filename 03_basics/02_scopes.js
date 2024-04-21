//function abb(){}  //in function {} caled as scope for function hats why we use for function 

//const obj = {} here it is used for defining object 

//block scope and global scope

//when we use var in scope it will print its value outside the scope also thats why we avoid using it 

//var c = 300
let a = 300   // a in global scope
if (true) {
    let a = 10   // this is block scope or local scope inside curly braces {} the value doesnt go outside of scope
    const b = 20
    //var c  = 30
    console.log("INNER: ", a);
    
}

console.log(a);
//console.log(b);
//console.log(c);



