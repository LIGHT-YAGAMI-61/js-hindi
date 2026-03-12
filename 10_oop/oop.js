
    const user  ={
        username : "harsh" , 
        loginCount : 8 , 
        signedIn : true , 

        getUserDetails : function () {
            console.log("Got user details from database");
            console.log(`Username : ${this.username}`);
            console.log(this);
            
        }
    }

     // console.log(user.username);
    //   console.log(user.getUserDetails());
    //   console.log(this);
     
     function User(username , loginCount , isLoggedIn) {
        this.username = username // left hand side was variable and right hand side was parameter 
        this.loginCount = loginCount ; 
        this.isLoggedIn = isLoggedIn 

        this.greeting = function () {
            console.log(`Welcome ${this.username}`);
            
        }

         return this // it is already implicitly defined ( by default return no need to write return)
     }

     const userOne = new User("kai" , 12 , true) 
     const userTwo = new User("Chai aur code" , 11 , false) 
     console.log(userOne.constructor);
     console.log(userTwo);
     
     