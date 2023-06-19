//------------------ JSON ------------------//

const fs = require('fs');
/*

JSON stands for Javascript Object Notation. JSON is a lightweight format for storing and transporting data.

JSON is often used whenn data is sent from a server to a web page.

*/

const bioData = {
    name:  "Tanya",
    age: 26,
    status: "crush"
}

console.log(bioData.status);

//JSON.stringify() -> used to convert a javascript object to JSON.
//in JSON both key is enclosed in double quotes
const jsonData = JSON.stringify(bioData);

console.log(jsonData);

//now we can't call the JSON properties like jsonData.status. There are various to do that which we will find out later.

//JSON.parse() -> used to convert to JSON to object

const obj = JSON.parse(jsonData);

console.log(obj);

//now let's say we want to store the JSON in the file as we want to save the data. then we can do it directly using the writeFile function.

// fs.writeFile('JSON data.txt', jsonData, (err)=>{
//     if(!err){
//         console.log('data has been sent to file system')
//     }else{
//         console.log(err);
//     }
// })


// now let's say we want to read the data and get it as the object.

const data = fs.readFile('JSON data.json', 'utf-8', (err,data)=>{
const orgobj = JSON.parse(data); //original object that we got from the files
console.log(data);
console.log(orgobj);
})

console.log(data); // this will give undefined as the nature in async. So do the reading and writing of the data inside the call back