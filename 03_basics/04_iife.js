// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // NAMED IIFE 
    console.log(`DB CONNECTED`);
    
})  ()  ;

(  (name) => {
    // UNNAMED IIFE 
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ('KAI') 