const user = {
    username : "Dinesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username);
    
// }

// chai()

// const chai = function (){
//         let username = "Hitesh"
//         console.log(this.username);       
// }

// const chai = () => {
//         let username = "Hitesh"
//         console.log(this);       
// }

// chai() 


// const addTwo = (num1, num2) => {     //curly bracket ke sath return use hoga 
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)    // parenthesis ke sath return use nhi hoga


const addTwo = (num1, num2) => ({username:"hitesh"}) 
console.log(addTwo(3,5));


// const myArr = [2,4,3,5,6]

// myArr.forEach(function () {})
// myArr.forEach()