class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const kabal=new user("kabal")
// console.log(kabal.createId())

class Teacher extends user {
    constructor(username,email) {
        super(username)
        this.email=email
    }
}


const iphone=new Teacher("iphone","iphone@gmail.com")
// console.log(iphone);
// iphone.logMe()
console.log(iphone.createId());