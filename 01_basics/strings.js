
const name = "harsh" ;
const repocount = 50 ;

// console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('harsh-gc-com') ;

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt('2'));
console.log(gamename.indexOf('h'));

const newString = gamename.substring(0 , 4) ;
console.log(newString);

const anotherString = gamename.slice(-8 , 3) 
console.log(anotherString);

const newStringOne = "  harsh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harsh.com/harsh%20yadav"

console.log(url.replace('%20','-'));

console.log(gamename.split('-'));
