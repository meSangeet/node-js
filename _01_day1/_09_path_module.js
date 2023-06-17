// ----------- path module in node.js --------------//


// The path module provides utilities for working with file and directory paths.

const path = require('path');
let pathName = 'C:/skills/node-js/_01_basics/_09_path_module.js';
console.log(path.dirname(pathName)); 
//dirname extracts the complete directory name.
console.log(path.extname(pathName));
//extname extracts the extension of the file from the path
console.log(path.basename(pathName));
//basename extracts the file name

//path.parse()  -. returns an object whose properties represent significant elements of the path.

const pathObj = path.parse(pathName);
console.log(pathObj);