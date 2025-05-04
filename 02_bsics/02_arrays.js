const marvelHeros = ["Thor", "Ironman", "SpiderMan"]
const dc = ["SuperMan", "Flash", "BatMan"]

// marvelHeros.push(dc)
// console.log(marvelHeros);

// const newArr = marvelHeros.concat(dc)
// console.log(newArr)

// const all_new_heros = [...marvelHeros, ...dc]       // Spread Operator
// console.log("All New Heros", all_new_heros);

// const another_arr = [1,2,3,4,[5,6],7,[8,9,[4,5]]]

// const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));   // Interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




