// Node.js Core Modules

/*
Consider modules to be the same as javascript libraries. A set of functions you want to include in your application.
Node.js has a set of built-in modules which you can use without any further installation.

for eg - fs
we need to require a module to use its functionality and store it into a constant
*/

const fs = require('fs');

fs.writeFileSync("test.txt", "trying the synchronous file writing function of the fs module");

//the above function creates a file if the file is not already present and if the file is already  their than the original text will be deleted and the new data will be written in the file   to append the data into an existing file, we have an exixsting function in the fs module.

fs.appendFileSync("test.txt","appended data");

//to read data 
// the function below will return buffer data
/*
Node.js includes an additional data type called buffer (not available in the browser's JavaScript). Buffer is mainly used to store binary data. While reading from a file or receiving packets over the network.
*/
let data = fs.readFileSync("test.txt");

console.log(data);

//now to convert the buffer data to string we can use toString function.

let bufTostr = data.toString();
console.log(bufTostr)

// now to rename the file.

fs.renameSync("test.txt", "renamed.txt");