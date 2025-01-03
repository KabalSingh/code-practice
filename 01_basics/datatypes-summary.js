/*   JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

Primitive :  
    7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/
    const score=100                   //number
    const scoreValue = 100.6          //number
    const isLoggedIn = false          //Boolean
    const outsideTemp = null          //object
    let userEmail;                    // undefined
    const id=Symbol('123')            //symbol
    const anotherId= Symbol('123')    //symbol

    // console.log(id=== anotherId);
    
    const bigNumber=5455555555555555555551515n    //bigInt


/*
    Reference (Non-Primitive):
    Array, Objects, Functions

*/

    const people = ["random1","random2","random3"];


    let myObj={
        name:"Random1",
        age:25,
    }

    const myFunction= function(){                 //objectFunction
        console.log("Hello World");
        
    }

    //console.log(typeof bigNumber);
    //console.log(typeof myFunction);
    


/********************************************************************************************** 
    Stack(Primitive),Heap(Non-Primitive)
*/

let youtube="Youtubedotcom"

let anothername=youtube
anothername="chataurcode"

console.log(youtube);
console.log(anothername);

let userOne= {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="usertwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);
