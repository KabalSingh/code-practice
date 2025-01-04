//dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate =new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate=new Date(2022,14,63,9,46)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date("2022-1-3")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));





