
    const coading = ["js" , "ruby" , "java" , "cpp" ] 

    // const values =  coading.forEach( (item) => {
    //      console.log(item);
    //     return item
    // } )

    // console.log(values);
    
    // Filter 
    // when we apply scope then it is neccessary to add return statement 
    // scope is this {} 
    
    const myNums = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]

    // const newnums =  myNums.filter( (num) => { 
    //    return  num > 4 
    // })

    const newnums = []

    myNums.forEach( (num) => {
        if ( num > 4 ) {
            newnums.push(num)
        }
    })
    console.log(newnums);
    