// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    
    }
    
}

let myArr = ["flash", "batman", "superman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
       
}

// break and continue

for (let index = 1; index <= 20; index++) {
    // if(index == 5){
    //     console.log(`Detected 5`);
    //     break
    // }
    if(index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);    
    
}