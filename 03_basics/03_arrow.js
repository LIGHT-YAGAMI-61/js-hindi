


        const user = {
            username :"KAI" , 
            price : 999 ,

            welcomeMessage : function () {
                console.log(`${this.username} ,  wecome to website `);
                
                console.log(this);
                
            }

        }

      //  user.welcomeMessage()
      //  user.username = "sam" 
      //  user.welcomeMessage() 
      //  console.log(this);

    //   function chai () {
    //     let username = "KAI"
    //     console.log(this.username);
        
    //   }
    //   chai ()

        // const chai = function () {
        //     let username = "KAI" 
        //     console.log(this.username);
        // }
        // chai ()

        const chai = () =>  {
             let username = "KAI" 
             console.log(this);
         }
        // chai ()

        // const addtwo = (num1 , num2) => {
        //     return num1 + num2 
        // }

        // const addtwo = (num1 , num2) =>  num1 + num2
        // const addtwo = (num1 , num2) => ( num1 + num2 )

             const addtwo = ( num1 , num2 ) => ({username : "kai"})
        
       console.log( addtwo(3 , 4));

       // const myarray = [2 , 5 , 3 , 7 , 8] 

      // myarray.forEach()
       

