const fs = require('fs');

const data = fs.readFileSync('read.txt', "utf-8");
console.log(data);
console.log("after the data");

//  in the above code no matter how much time it takes the synchronus thing will take place first and the the text "after the data" will be printed. but if we have used the readFile function and also passed the callback function   then as it would have taken some time to read the data so the text "after the data" will be printed first.