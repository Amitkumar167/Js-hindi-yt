const accountId = 2003636
let account_email = "amit@google.com"
var account_Password = "112233"
accountcity = "Jammu"
let accountState;

// const changes not allowed
// variable can be changed
account_email = "amit@gmail.com"

/* avoid the use of var
 because of issue block scope and functional scope
*/
/*
 semicolons are optional 
*/ 
/* 
prefer the use of let only for variables 
*/



console.table([accountId, account_email, account_Password, accountcity, accountState]);