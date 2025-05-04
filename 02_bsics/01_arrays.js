// Arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman","Iron-Man"]
// console.log(myHeros)

const arr2 = new Array(1,2,3,4)
// console.log(arr2[0])

// Array methods

// myArr.push(6)
// myArr.push(7)       // push() insert value at top
// console.log(myArr)
// myArr.pop()     // pop() remove value at top
// console.log(myArr);  // removed top value

// myArr.unshift(8)   // unshift() insert value at begining 
// console.log(myArr)

// myArr.shift()       // shift() remove value from begining
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice

console.log("A = ",myArr);

const myN1 = myArr.slice(1,3)
console.log(myN1);
console.log("B = ",myArr);

const myN2 = myArr.splice(1,3)
console.log(myN2);
console.log("C = ", myArr);
