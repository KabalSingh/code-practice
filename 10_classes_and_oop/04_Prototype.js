// let myName="kabal      "
// let mychannel="chai     "

// console.log(myName.trueLength);


let myHeros=["thor","spiderMan"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kabal=function () {
    console.log(`kabal is present in all objects`);
}

Array.prototype.heyKabal=function () {
    console.log(`Kabal says Hello`);
    
}

// heroPower.kabal()

// myHeros.kabal()
// myHeros.heyKabal()
// heroPower.heyKabal()

//inheritance

const User={
    name:"chai",
    email:"chai@gmail.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:`JS assignment`,
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiaurCode          "

String.prototype.truelength=function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
    
}

anotherUsername.truelength()

"Hello World".truelength()

