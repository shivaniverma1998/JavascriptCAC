//ES6

class User {

    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptedPassword(){  //this is classes's method
        return `${this.password}abcd`
    }
    changeUsername(){ //this is also method
        return `${this.username.toUpperCase()}`
    }
}
//object
const shivani = new  User("shivi", "shivi@gmail.com", "948123")

console.log(shivani);
console.log(shivani.encryptedPassword());
console.log(shivani.changeUsername());

// behind the scene

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptedPassword = function(){
    return `${this.password}abc`
}

User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("tea", "tea@gmail.com", "123")

console.log("this is method called here with tea object => ",tea.encryptedPassword());
console.log(tea.changeUsername());                                                                                                                                                                                                                                                             



