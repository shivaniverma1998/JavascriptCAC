const userEmail = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
const userEmail1 = []

if (userEmail) {   
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//falsy value  - false, 0 , -0, BigInt 0n, "", null , undefined, NaN

//Truthy value -"0", 'false', " ", []empty array, {} empty object, function(){} empty functin  ...all value except falsy value
 
const emptyobj = {

}

if (userEmail1.length === 0) {
    console.log("Array is empty");
}

//false == 0 true
//false == "" true
//0 == '' true 

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// ***********Nullish coalesecing operator************* (??): null . undefined

let val1;
//val1 = 5 ?? 10  
val1 = undefined ?? 15 //agr kahi undefined ki zarrt padi th vha  undefined le elga apne aap
val1 = null ?? 25 // agarr jaha zrrt padi th null define krdenge aesa vala case hai
val1 = null ?? 30 ?? 20 //phle value ko lega 
console.log(val1)

//*********terniary operator************

//condition ? true: false
 
const Masalateaprice = 10
Masalateaprice >=15 ? console.log("price is expensive than usual, iski dukaan band  karo ") : console.log("price is affordable , banda sahi banata hai chai !")
