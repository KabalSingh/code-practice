const user={
    username:"kabal",
    loginCount:9,
    signedIn:true,
    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, logicCount, isLoggedIn) {
    this.username=username;
    this.logicCount=logicCount;
    this.isLoggedIn=isLoggedIn
    this.geetings=function () {
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne=new User("Kabal",9,true)
const userTwo=new User("Chai Aur code",7,false)

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);

