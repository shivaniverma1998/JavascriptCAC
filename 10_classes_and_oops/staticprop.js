class User {
    constructor (username){
        this.username = username
    }
    logMe(){
        console.log(``);
    }
    static createId(){
        return `123`
    }
}//here we will use statis that will stop the access of method from instance of same class

const hitesh = new User("hitesh")
// console.log(hitesh.createId())
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());