
// Singleton 

// objects literals 
    
    const mysym = Symbol("key1") ;

    const JSUser = {
        name : "Light",
        "full name" : "Light Yagami" ,
        [mysym] : "mykey1" ,
        age : 19 , 
        location : "alwar" ,
        email : "light@gmail.com" ,
        isLoggedIn : false , 
        lastLoginDays : ["Monday","Saturday"] 
    }

   // console.log(JSUser.email);
   // console.log(JSUser["email"]);
   // console.log(JSUser["full name"]);
   // console.log(JSUser[mysym]);
    
    JSUser.email = "light@chatgpt.com" ;
   // Object.freeze(JSUser)
    JSUser.email = "light@microsoft.com" ;
   // console.log(JSUser);

    JSUser.greeting = function() {
        console.log("Hello JS User");
    }
    JSUser.greetingTwo = function() {
        console.log(`Hello JS user , ${this.name}`);
    }
    
    console.log(JSUser.greeting());
    console.log(JSUser.greetingTwo());
    
    
    

    
    
    
