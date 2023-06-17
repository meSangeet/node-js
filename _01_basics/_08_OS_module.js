// --------------- OS module in node js ----------//

// using the OS module we can get information related to our local system's operating system.
//The os module provides operating system related utility methods and properties. 
// It can be accessed using

const os = require('os');

//or.arch()  -> tells us whether we are using 32 bit or 62 bit architecture

console.log(os.arch()); // mine is 64 bit :)

//os.freemem()

const freeMemory = os.freemem();

console.log(freeMemory); //gives us the free memory in bytes
// to get in gb

console.log(`${freeMemory/1024/1024/1024}`);

//getting total memory

const totalMemory = os.totalmem();
console.log(`The total memory is ${totalMemory/1024/1024/1024}`);

//to calculate memory from bytes to gb divide by 1024 3 times.

/*
other functions

os.type() -> returns which os we are using
os.hostname() -> 
os.platform()
*/