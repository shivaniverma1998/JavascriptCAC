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
//functions and their scope 

function one(){
    const username = "shivani"

    function two(){
        const gender = "female"
        console.log(username);  //yeh child function  parent k variable  access kr skta h but parent ni kr skta(parent : one)
    }
    //console.log(gender);
    two()
}
one()

if(true){

    const username = "shivani"
    if(username ==="shivani"){
        const website = " meta"
        console.log(username + website)
    }
   // console.log(website);  ispe error ayega kyuki website variable  scope k andar h access ni kr skte
}
//console.log(username);  isme bhi error ayega bcz username is in the scope and we are trying to acces outside the scope

//+++++++++++++++++++++++++ iteresting ++++++++++++++4

function addone(num){
    return num +1
}

addone(5)

addtwo(5)   /// yhaa pr ek interesting concept  ki hamne phle declaration se phle access krna chaha  th iisliye error aya kyuki function variable k thrugh declaare hua  
const addtwo = function(num){  // but hamne yhaa par function ko  value me daaala hai 
    return num + 2
}

