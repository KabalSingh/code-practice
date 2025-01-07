//singleton object
// const tinderUser = new Object()

//non-singleton object
const tinderUser = {}

// console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hello",
            lastname:"World"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);


const users=[
    {
    id:1,
    email:"h@xyz.com"
    },
    {
    id:1,
    email:"h@xyz.com"
    },
    {
    id:1,
    email:"h@xyz.com"
    },
    {
    id:1,
    email:"h@xyz.com"
    },
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// console.log(course.courseInstructor);     // not to declare like it
// const {courseInstructor}=course
// console.log(courseInstructor);

const {courseInstructor : instructor}=course
console.log(instructor);