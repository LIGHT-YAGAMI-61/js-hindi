
    const coading = ["js" , "ruby" , "java" , "cpp" ] 

    // coading.forEach( function  (item) {
    //     console.log(item);
    // } )

    // coading.forEach( (item) => {
    //     console.log(item);
    // } )

    // function printMe(item) {
    //     console.log(item);
    // }

    // coading.forEach(printMe) 

    // coading.forEach( (item , index , arr) => {
    //     console.log(item , index , arr);
    // } )

    const mycoading = [
        {
            languageName : "javascript" , 
            languageFileName : "js" 
        } , 
        {
            languageName : "java" , 
            languageFileName : "java" 
        } , 
        {
            languageName : "python" ,
            languageFileName : "py"
        }
    ]

    mycoading.forEach( (item) => {

        console.log(item.languageName);
        
    } ) 