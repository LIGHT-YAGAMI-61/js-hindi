
const accountId = 142 
let accountEmail = "harsh@gmail.com"
var accountpassword = "12345" 
accountCity = "Jaipur"
let accountstate ;

   console.log(accountId);

accountEmail = "ahah"
accountpassword = "4355" 
accountCity = " raj " 

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/
console.table([accountId , accountEmail , accountpassword , accountCity , accountstate])
