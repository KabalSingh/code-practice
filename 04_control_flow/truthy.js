// const userEmail="abc@xyz.com"
// const userEmail=""
const userEmail=[]


// if (userEmail){
//     console.log("got the email");
    
// }else{
//     console.log("Don't have any email");
    
// }

/*falsy values  - 
false,0,-0,BigInt(0n),"",null,undefined,NaN

truthy values - 
"<String>" or "0",'false'."",[],{},function(){}         */

// if(userEmail.length==0){
//     console.log("Array is empty");
    
// }

const emptyObj={}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}