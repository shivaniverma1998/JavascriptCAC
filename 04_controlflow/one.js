//**********if control flow********


//condition type :
const isLoggedin = true
const temp = 55
if(temp < 50) { //conditiona true hori h th andar ka code execute hota hai
    console.log("less than 50")
}
else{
    console.log("temp greater than 50")
}

//*****type of assignment operator ****<,>,<=,>=,==,!=, === ( yeh data k type ko bhi check krta hai )

// var ek aesa type hai jo scope k bahar  bhi acces ho jata hai

const balance = 1000

if(balance> 500) console.log("test") //omplicit scope /one line scope

const userLoggedin = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedin && debitcard && 2==3){
    console.log("allow to buy courses")
}
else{
    console.log("not allowed to buy courses")
}

//or case
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}