class User {
    constructor(username) {
    this.username = username 
}
logMe() {
    console.log(`USERNAME IS ${this.username}`);
    
   }
}

class Teacher extends User {
    constructor(username , email , password) {
        super(username)
        this.email = email 
        this.password = password 
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const harsh = new Teacher("kai" , "kai@gmail.com" , "567")

harsh.addCourse()
const hk = new User("xxx")

hk.logMe()

console.log(harsh instanceof User);
        // or
// console.log(harsh === hk);
