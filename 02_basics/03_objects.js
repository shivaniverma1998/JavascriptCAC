//The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer

//there are two types to create object one is singleton(when create by constructor it has one instances) and when we create by literals (it has many instances)
//Object.create
//object lierals

// create symbol

const mySym = Symbol("key1")

const JsUser = {
    name : "shivani",  // it has value-key computer process name as "name" string
    age : 25,
    [mySym]: "mykey1",    /// to use as mySym as symbol use [mySym]
    "full name" : "shivaney",
    location : "noida",
    email: "shivani@gmail.com",
    isloggedin : false, //boolean type
    lastlogginDays : ["monday", "tuesday"] // array type object



}


//two types of access of object by dot and [""]
console.log(JsUser.email)
console.log(JsUser["email"])   // here email should be in  quotes  becz it should be track as string 
console.log(JsUser["full name"])   // full name istreated as string here sos hould be in [""]

console.log(typeof JsUser.mySym)  
  // this line will treat this as string
//console.log( JsUser[mySym])  

  //how to change  object value 
  
  JsUser.email = "shivaneygpt@gmail.com"

  //how to freeze object means  dont allow to change in object 
  
  //Object.freeze(JsUser)

  JsUser.email = "LAKAHANPAL@gmail.com"  // AB value hange ni hogi upr freeze kr diya

  console.log(JsUser)

  //how to create functions

  JsUser.greetings = function(){
    console.log("Hello  Js User");
  }

  JsUser.greetings = function(){
    console.log(`Hello  Js User,${this.name}`);
    console.log(`this is email of Jsuser,${this.email}`);

  }

  console.log(JsUser.greetings);  // function anonymous 
  console.log(JsUser.greetings());

  
