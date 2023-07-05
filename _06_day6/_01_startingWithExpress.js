//Express.js

//it is web framework for node js.
// use npm i express for installing it as a dependevy.

// code to start an express server


const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500


/*
API

get - read
post - create
put - update
delete - delete
*/

app.get('/', (req,res) => {
    // res.sendFile('./<html>fileaddress', {root: __dirname});

})

app.listen(8000, () => {
    console.log('server listening at the port 80000');
})