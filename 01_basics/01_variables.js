const accountId = 14453
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

//accountId = 2

accountEmail = "hcjh@klk.com"
accountPAssword = "231363131"
accountCity = "Rohtak"
let accountState;

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);

/*
Prefer not to use var
because of issue in block scope and functional scope  
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

