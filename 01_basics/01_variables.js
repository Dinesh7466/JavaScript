const accountId =144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//  accountId =2        // Not Allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "bengaluru"


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.log([accountId,accountEmail,accountPassword,accountCity])
console.log(accountState)
