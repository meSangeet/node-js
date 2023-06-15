// Challenge Time

//1: Create a folder named it Chal
//2: Create a file in it named bio.txt and add data into it.
//3: Add more data into the file at the end of the existing data
//4: Read the data without getting the buffer data at first.
//5: Rename the file name to myBio.txt
//6: now delete both the file and the folder.

// solutions

const fs = require('fs');

// // fs.mkdirSync("chal");
// fs.writeFileSync('chal/bio.txt', 'this is my bio')
// fs.appendFileSync('chal/bio.txt', '  Appended data')

// // so basically while reading data from the file when no encoding is specified than raw buffer is returned. So we need to a valid file encoding.

// // we can use utf-8 character encoding of utf-16 character encoding

// const data = fs.readFileSync('chal/bio.txt', 'utf-8');

// console.log(data);

// fs.renameSync('chal/bio.txt', 'chal/myBio.txt');
// fs.unlinkSync('chal/myBio.txt')
fs.rmdirSync('chal');