const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);  this will gives you empty {} object  as this is node engine
//when we run this console.log(this); on web browser  console  it will return many objects  (windoow oobjects/global object)

function chai1(){
    let username = "hitesh"
    console.log(this.username);
}

chai1()

console.log(" the above chai1 fn gives undefined value for  this.username  ( we cant use this  in function ike this)***************")

const chai2 = function () {
    let username = "hitesh"
    console.log(this.username);
}

chai2()

console.log("*****here in chai2 function  this keyword is also failed to access chai2 fn variable ****")



const chai3 =  () => {
    let username = "hitesh"
    console.log(this);
}


chai3()
console.log("**the  above one is chai3 function is arrow function  which is used like ' => ' **")


console.log("******example for arrow function********")

const addTwo1 = (num1, num2) => {
    return num1 + num2   //explicit return :jab return lagaan apdra hai 
}
console.log(addTwo1(3, 4))



const addTwo2 = (num1, num2) =>  num1 + num2
console.log(addTwo2(3, 4))




const addTwo3= (num1, num2) => ( num1 + num2 )   // without  curly braces function is called implicit return



const addTwo4 = (num1, num2) => ({username: "hitesh"})  // in this arrow type function cariable should be int curve braces ()





// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()