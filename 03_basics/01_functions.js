//PART 1 IN VIDEO OF FUNCTIONS AND PARAMETER IN JS


function addnumbers(number1, number2){ //number1 and  number2 are parameters as in other language
    console.log(number1+number2)  
}

//this is the way to call function
addnumbers()  //its gives NaN itmeans not an number
addnumbers(33,77)
addnumbers(33,"77") // it gives 3377: it treat both as string
addnumbers(33,"a")
addnumbers(33,null) //33 and null are arguments

const result =addnumbers(3,5)

console.log(result)   //yeh undefined de rha hai 


//correct way to show function output rather han above
function multiply(num1, num2){
    let resulto = num1 * num2;
    return resulto //return k baad kuch print ni hota
 
}
const resulto = multiply(9, 11)

console.log(resulto) 

function loginusermessage(username = "sam"){
    if(username === undefined){  // also use as !username
        console.log("please enter username");
        return
    }
    return `${username} just login`
}

//how to exeute function given below CORRECT WAY by taking parameter

console.log(loginusermessage("shivani"))

//console.log(loginusermessage()) show undefined output  kyuki define hi nahi kiya
 

//PART 2 VIDEO  FUNCTIONS WITH OBJECTS AND ARRAY IN JS

function calculatecartprice(...num1){  // the saaara khel is dot ka hai by one value we can store so many values by dot
    return num1
}

console.log(100, 200, 3000)


//val1 val2  me value gyi chpaaak
function calci2(val1 , val2 , ...numo){
    return numo
}

console.log(calci2(1000, 2000, 3000, 5000))   // isne numo ki value print kraadi bas  baaki values  val1 val2 me gyi  kyuki return numo tha

//HOW TO OBJECT IN FUNCTION 



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

//HOW TO PASS ARRAY IN FUNCTION

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



