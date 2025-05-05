// const tinderUser = new Object()      // This type of object declaration called "Singleton Object"

const tinderUser = {}   // Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullName: {
        userFullName: {
            firstname : "Dinesh",
            lastname: "Kori"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstname);


// marge objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "t", 6: "d"}
 

// const obj = { obj1, obj2}
// const obj = Object.assign({}, obj1, obj2, obj3)

// const obj = {...obj1, ...obj2}      // Spread Operator

// console.log(obj);

const users = [
    {
        id:1,
        email:"d@gmail.com"
    },
    {
        id:2,
        email:"d2@gmail.com"
    },
    {
        id:3,
        email:"d3@gmail.com"
    },
    {
        id:4,
        email:"d4@gmail.com"
    },

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


// ========================== De-Structuring of Object ====================

const course = {
    course: "Js in Hindi",
    price: "999",
    courseInstructor: "Dinesh"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

