const user={
    username:"hello",
    price:254654,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username="hello"
//     console.log(this.username);
// }

// chai()

// const chai=function(){
//     let username="hello"
//     console.log(this.username);
// }

// chai()

const chai= () => {
    let username="hello"
    console.log(this);
}

// chai()




// const addtwo=(num1, num2) => {
//     return num1+num2
// }

// console.log(addtwo(4,8));




// const addtwo=(num1, num2) => num1+num2
// const addtwo=(num1, num2) => (num1+num2)
// const addtwo=(num1, num2) => {username: "hello"}   //not used like it
const addtwo=(num1, num2) => ({username: "hello"})
console.log(addtwo(4,8));