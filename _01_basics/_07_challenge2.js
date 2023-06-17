// do the challenge 1 using the async features of javascript

const fs = require('fs');

fs.mkdir('chal', (err)=>{
    console.log('folder created');
});

fs.writeFile('chal/bio.txt', 'data entered the first time', (err)=>{
    console.log('the data has been entered the first time');
})

fs.appendFile('chal/bio.txt', '  appended data',(err)=>{
    console.log('data appended');
})

const data = fs.readFile('chal/bio.txt', 'utf-8', (err)=>{
    console.log('data has been entered into the data variable without getting any buffer input to the data variable');
})

fs.rename('chal/bio.txt', 'chal/myBio.txt', (err)=>{
    console.log('the file has been renamed');
})

fs.unlink('chal/myBio.txt', (err)=>{
    console.log('file has been deleted');
});
fs.rmdir('chal', (err)=>{
    console.log('directory has been deleted');
})
