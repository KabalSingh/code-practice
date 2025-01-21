// for of

// ["","",""]
// [{}{}{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}


const greetins="Hello World"
for (const greet of greetins) {
    // console.log(`Each Char is ${greet}`);
    
}


//Maps

const map=new Map()

map.set(`IN`,"India")
map.set(`Rus`,"Russia")
map.set(`Fr`,"France")
// map.set(`IN`,"India")

// console.log(map);


// for (const key of map) {
//     console.log(key);
    
// }
for (const [key, value] of map) {
    // console.log(key, ':-',value);
    
}




const myObject={
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-',value);
    
}