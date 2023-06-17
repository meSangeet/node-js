// Module wrapper function ----------

/*
Every individual js file in the node js is called a module. And the functions and variables are private scoped for that module.

module wrapper function 
So why the functions and variables are private scoped for that module?

Actually when we write some code. Nodejs writes that code inside the wrapper funtion which is itself wrapped inside grouping operator ().

eg code - 

    const fs = require('fs);
    //random code
    module.exports.something = something.


it internally cahnges the code to the code wrtitten below.
*/   

(function(exports, require, module, __filename, __dirname){
    const fs = require('fs');
    /*
    random code
    */
   module.exports = {/*random functions and variables */}
})