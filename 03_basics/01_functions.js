function sayMyName() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
    
// }

// addTwoNumbers(5,9)
// addTwoNumbers(5,"6")
// addTwoNumbers(5,"a")
// addTwoNumbers(5,null)


// const result=addTwoNumbers(5,9)
// console.log(result);

// function addTwoNumbers(num1,num2){
//     // let result=num1+num2;
//     // return result;
//     return num1+num2
// }

// const result=addTwoNumbers(5,9)
// console.log("Result :" ,result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Hello World"));  
// console.log(loginUserMessage("")); 
// console.log(loginUserMessage());
 



// function loginUserMessage(username)
function loginUserMessage(username="sam"){
    // if(username === undefined)
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());   



// function calculateCartPrice(number1)
// function calculateCartPrice(...number1)
function calculateCartPrice(val1,val2,...number1){
    return number1
}

// console.log(calculateCartPrice(200,400,900));


const user={
    username: "hello world",
    price: 562
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
// handleObject({
//     username:"sam",
//     price:5346
// })



const myNewArray=[56465,516315,511561,66161,6661,61,6151]

function returnSecondValue(getArray){
    return getArray[3]
}


// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([56465,516315,511561,66161,6661,61,6151]));
