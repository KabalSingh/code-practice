// singleton


//object literals

const mySym=Symbol ("key1")

const JsUser={
    name: "hello",
    "full name":"Hello World",
    [mySym]:"mykey1",
    age:18,
    location:"Delhi",
    email:"hello@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser.mySym)
// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym]);

JsUser.email = "hello@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="hello@microsofts.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JsUser");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
