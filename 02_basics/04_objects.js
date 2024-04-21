//creating object

const  ttuser = new Object()

ttuser.id = "123abc"
ttuser.name = "harman"
ttuser.isloggedin = true
console.log(ttuser)


const regularuser = {
    email: "harman@gmail.com",
    fullname : {
        userfullname: {
            firstname: "shivani",
            lastname: "verma"
        }
            
    }
}
console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1 : "a",2: "b"}
const obj2 = { 3:"c", 4:"d"}

//we cant  merge objects with  statment like 
//onst obj3 = {obj1,obj2}
 //console.log(obj3)

 // instead  we have to use object.assign()


const returnedTarget = Object.assign(obj1, obj2);
//const returnedTarget = {...obj1, ...obj2} // can be used as this  by spread method
console.log(returnedTarget)

//cloning an object

const obj = { a: 1 };
const copy = Object.assign({}, obj); //  is the target    obj is the source
console.log(copy); // { a: 1 }

//when value from database

const users = [
    {
        id: 1,
        email: "sh@gmail.com"
    },
    {
        id: 1,
        email: "sh@gmail.com"
    },
    {
        id: 1,
        email: "sh@gmail.com"
    },
    {
        id: 1,
        email: "sh@gmail.com"
    },
]
users[1].email
console.log(ttuser);

console.log(Object.keys(ttuser))
; // iski uoput valueis array 
console.log(Object.values(ttuser));
console.log(Object.entries(ttuser));//[ [ 'id', '123abc' ], [ 'name', 'harman' ], [ 'isloggedin', true ] ]
// to avoid if there is no value avoid to crash 
console.log(ttuser.hasOwnProperty('isloggedout'))


const data ={
    dataname:"sh in shivani",
    age: "25",
    place: "noida"
}

//data.dataname instead of using  console.log(data.dataname);

const {dataname : namey} = data  //destructure object: hame kisi bhi value ko destructure kr skte hai just like here we destrsucture dataname to namey

//console.log(dataname);
console.log(namey);

//API : API IS nothing just a thing which deals with the values comes from backend

//api define in json form look like object

// {
//     "name" : "shivani",
//     "hobby" : "fashion",
//     "skinshade":"03"

// }


