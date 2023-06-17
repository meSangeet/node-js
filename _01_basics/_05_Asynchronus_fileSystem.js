// -------- Asynchronus File System --------//

const fs = require('fs');

//when we will work asynchronusly we will have to add a call back function. The call back function is called when the main function is done
fs.writeFile('read.txt', "today is awesome day", (err)=>{
    console.log("files is created");
    //err is the error  it will contain the value of error if there is some and if there is no error then the value of err will be null
});

//we pass a function as an argument - a callback - that gets called when the task completes.
// the callback has an argument that tells you whether the operation is completed successfully.
//Now we need to say what to do when fs.writeFile has completed and start checking for errors.

// now to append data

fs.appendFile('read.txt', ' appended data', (err)=>{
    console.log('task completed');
})

// now reading file
//in the callback function when more than one parameter are passed the first one will always be an error. second in the below case will be the data collected from the file.
const dataRead = fs.readFile('read.txt', 'utf-8',(err, data)=>{
    console.log(data);
})