const name="kabal"
const repocount=4

// console.log(name+repocount+"Value");      //not good to use

//console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String ('random')
// console.log(gameName[3]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));


const newString=gameName.substring(0,4);
// console.log(newString);

const anotherString=gameName.slice(-6,3);
// console.log(anotherString);

const newStringOne="   hello World    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url="https://google.com/%16random";
console.log(url.replace('%16','-'))

console.log(url.includes('ttp'));

console.log(url.split('-'));
