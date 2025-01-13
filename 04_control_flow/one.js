//if

// const isUserLoggedIn = true

// if(2==="2"){
//     console.log("executed");
// }


//<,>,<=,>=,==,!=,===,!==


// if(2!==3){
//     console.log("executed");
// }







// const temp=12
// // if(temp<50){
// if(temp===50){
//     console.log("temprature is less than 50");
// }

// console.log("temprature is greater than 50");







// const temp=30
// if(temp===50){
//     console.log("temprature is less than 50");
// }else{
//     console.log("temprature is greater than 50");
// }

// console.log("execute");






// const score=567

// if(score >100){
//     let power="fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);





const bal=1000

// if (bal >500) console.log("test"),console.log("test2");

// if (bal <500) {
//     console.log("less than 500");
// }else if (bal <750) {
//     console.log("less than 750");
// }else if (bal <900) {
//     console.log("less than 900");
// }else if (bal <1200) {
//     console.log("less than 1200");
// }


const userLoggedIn =true
const debitCard=true
const loggedInFromGoogle=true
const guestUser=true
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

if(loggedInFromEmail || loggedInFromGoogle || guestUser){
    console.log("User logged in");
    
}
