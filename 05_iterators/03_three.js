//  for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Eac char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")

// console.log(map);

for (const [key, value] of map) {    // es trah map ke uper itration nhi kiya ja sakta
    // console.log(key, ':-', value);
    
}

// const myObject = {
//     'game1':'nfs',
//     'game2':'Spiderman',
//     'game3': 'car Racing'
// }
const myObject = {
    game1:'nfs',
    game2:'Spiderman',
    game3: 'car Racing'
}
// for (const [key, value] of myObject) {  // myObject is not iterable
//     console.log(key, ':-', value);
// }