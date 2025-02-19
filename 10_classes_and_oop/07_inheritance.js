class User {
    constructor(username) {
        this.username=username
    }

    logMe(){
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password) {
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new cousrse was added by ${this.username}`)
        
    }
}

const chai=new Teacher("chai","chai@teacher.com","123")

chai.addCourse()

const tea=new User("tea")

tea.logMe()


// console.log(chai === tea);
// console.log(chai === Teacher);
console.log(chai instanceof Teacher);
