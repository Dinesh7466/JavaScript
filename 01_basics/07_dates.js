// Dates 

const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);  // Object 

// const createMyDate = new Date(2023, 0, 23)  //Mon Jan 23 2023
// const createMyDate = new Date(2023, 0, 23)  //Thu Feb 23 2023
// console.log(createMyDate.toDateString());
// const createMyDate = new Date(2023, 0, 23, 5, 3) 
// const createMyDate = new Date("2023-01-11") 
const createMyDate = new Date("01-14-2023") 
// console.log(createMyDate.toLocaleString());

const myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createMyDate.getTime())

// console.log(Math.floor(Date.now()/1000));

const newDate = new Date();
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

const a = newDate.toLocaleString('default', {
    weekday: "long",
})

