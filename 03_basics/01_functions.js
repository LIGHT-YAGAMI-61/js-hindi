

  function sayMyName () {
  console.log("K");
  console.log("A");
  console.log("I");

}

  // sayMyName = refrence 
  // () = execution 
  // sayMyName()

 // function addTwoNumbers(numsber1 , number2) { // <- parameters
  // console.log( numsber1 + number2);
    
 // }

 // addTwoNumbers(3 , 4)  // <- arguments 
  // addTwoNumbers(3 , "4")
 // addTwoNumbers(3 , "a")

     function addTwoNumbers(number1 , number2) { // <- parameters
   
        let result = number1 + number2 
       // return result 
      //  console.log("kai")
       return number1 + number2
        
  }

  const result  = addTwoNumbers(3 , 5) 
   // console.log("Result : ", result) ; 
   
    function loginUserMessage(username = "eren") {
        if ( !username) {
            console.log("Please enter a username");
            return 
        }
        return `${username} just logged in`
    }

    // *************************************************************
    
   // console.log(loginUserMessage("kai"));
    console.log(loginUserMessage());
    
    function calculateCartPrice(val1 , val2 , ...num1) {
        return num1 
    }

    // console.log(calculateCartPrice(200 , 400 , 500 , 2000 ));
    
    const user = {
        username : "Harsh" ,
        price : 199
    }
    function handleObject(anyobject) {
       // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
        
    }
    // handleObject(user) ;
    handleObject( {
        username : "kai" ,
        price : 399
    })

    const myNewArray = [200 , 400 , 100 , 600]

    function returnSecondValue(getArray) {
        return getArray[1] 
    }

   //  console.log(returnSecondValue(myNewArray));
    
   console.log(returnSecondValue([200 , 400 , 500 , 1000]));
   