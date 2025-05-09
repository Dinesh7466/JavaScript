const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, curr_val) {
//     console.log(`acc : ${acc} and curr_val: ${curr_val}`);
    
//     return acc + curr_val
// }, 0)

const myTotal = myNums.reduce( (acc, curr_val) => acc+curr_val, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "py course",
        price : 5999
    },
    {
        itemName: "mobile dev course",
        price : 3999
    },
    {
        itemName: "data science course",
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce(  (acc, item) => acc + item.price, 0)

console.log(priceToPay);
