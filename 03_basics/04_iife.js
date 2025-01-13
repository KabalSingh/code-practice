//Immediately Invoked Function Expressions(IIFE)

(function chaai(){
    console.log(`DB Connected`);
}());

// ( ()=>{
//     console.log(`DB Connected`);
// })()

( (name) => {
    console.log(`DB Connected ${name}`);
})('hello')