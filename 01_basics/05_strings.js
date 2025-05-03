const name = "Dinesh"
const repoCount = 50

console.log(name + repoCount);

console.log(`Hello My name is ${name} and my Repo Count is ${repoCount}`)

// const gameName = new String("Car Racing")
const gameName = new String("hitesh-hc")

// console.log(gameName[0].__proto__)
// console.log(gameName.length) 
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
console.log(gameName.indexOf('c'))

const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "   hitesh    "
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20about-us"

console.log(url.replace('%20','-'))
