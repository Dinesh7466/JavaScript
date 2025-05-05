// SingleTon
// object.create

// Object Literals

const mySym = Symbol("key1");
// console.log(mySym);

const jsUser = {
    name:"Hitesh",
    "full name" : "Hitesh Chaudhary",
    age: 18,
    [mySym]:"myKey1",               // Important 
    location : "Jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays : ["monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "hitesh123@gmail.com";

// console.log(jsUser["email"])
// Object.freeze(jsUser)
jsUser.email = "hitesh321@chatgpt.com"
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");   
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);   
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())
