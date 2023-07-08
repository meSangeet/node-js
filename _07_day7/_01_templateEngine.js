//Adding dynamic content ni express js

// Template engine

// A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

//some popular template engines that work with express are pug, mustache and ejs.

//All these template engines are just like HTML with some more power. you need to install this from node package manager.

//lets say we are using hbs view engine

const express = require('express');
const app = express();

//we need to send the view engine, for that we have this specific syntax

app.set("view engine", "hbs");

//template engine route

app.get("/", (req,res) => {
    res.render('index', {
        variable1 : "value1",
        variable2 : "value2"
        //this is the dynamic content that we are sending this will replace the variable names in the hbs file to their corresponding values.
    });
    //.render function is used to render file. index is the file name "index.hbs"; it will find the index file inside view engine
})

app.listen(8000, ()=>{
    console.log('listening to port 8000');
})

