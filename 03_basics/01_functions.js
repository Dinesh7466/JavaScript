
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2)
// }

// addTwoNumbers(3,"4")


function addTwoNumbers(num1,num2){
    // let result = num1 +num2
    // return result
    return num1 + num2

}

// const result = addTwoNumbers(3,5)
// console.log("Result : ",result);

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please Enter a UserName");        
    }
    return `${username} just loggedIn`
}

// loginUserMessage("Dinesh")
// console.log(loginUserMessage("Dinesh"));
// console.log(loginUserMessage());


// function calculateCartPrice(num){
//     return num;
// }
function calculateCartPrice(...num){        // rest operator
    return num;
}

// console.log(calculateCartPrice(200, 500, 99))

const user = {
    username: "Dinesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username : "Ram",
    price : 599
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArr){
    return getArr[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2,3,45,5]));
