// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20 
    var c = 30 
    // console.log("Inner a: " ,a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Dinesh"

    function two(){
        const websites = "youtube"
        console.log(username);
        
    }
    // console.log(websites)

    two()
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username+website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// ========== Interesting====================
// addone(5)
console.log(addone(5));

function addone(num){
    return num + 1
}

// addone(5)

// addTwo(5)
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))