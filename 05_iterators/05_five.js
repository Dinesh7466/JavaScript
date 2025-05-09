// for each loop

const coding = ["js", "ruby", "java", "python", "python"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// --------------------------------------

// coding.forEach( (value) => {
//     console.log(value);
    
// })

// ------------------------------------

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// --------------------------------------- 

// coding.forEach(  (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        languagename : "javascript",
        languageFileName : "js"
    },
    {
        languagename : "java",
        languageFileName : "java"
    },
    {
        languagename : "python",
        languageFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languagename);
    
})