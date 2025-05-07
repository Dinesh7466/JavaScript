// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE 
    console.log(`DB Connected`);
    
})();

((name) => {
    // unnamed IIFE 
    console.log(`DB Connected Two ${name}`);
    
})("Dinesh")