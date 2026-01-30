
// Primitive 

// 7 types : String  , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100 ;
const isLoggedIn = false ; 
const outsideTemp = null ;
let userEmail ;

const id = Symbol('123') ;
const anotherId = Symbol('123') ;

// console.log(id == anotherId);

const bigNumber = 23425435356546n ;

// Refrence ( Non Primitive )

// Arrays , Objects , Functions , 

const heros = ["Shaktiman" , "naagraj" , "doga" ] 
 let myObj = {
    name : "harsh" ,
    age : 19 ,
}

 const myFunction = function(){
   // console.log("Hello world");
    
 }

 // console.log(typeof myFunction);
 
 // ***************************************************

 // Stack (primitive) , Heap (Non - Primitive) 

 let myYoutubename = "harshyadav" ;
 let anothername = myYoutubename ;
  anothername = "eren" ;

   console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
   email : "user@gamil.com" ,
   upi : "user@ybl" 
 }

 let userTwo = userOne ;

 userTwo.email = "harsh@google.com" 

 console.log(userOne.email);
 console.log(userTwo.email);
 
 
 