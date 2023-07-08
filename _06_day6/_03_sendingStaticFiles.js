//Serving static files in Express

// to serve static file such as images, CSS files, and javascript files , use the express.static built in middleware function in express

//code
//syntax -> 

const express = require('express');
const app = express();


//builtin middleware
app.use(express.static(saticPath));
//staticPath -> path of your static website


//listening to port
app.listen(8000, () => {
    console.log('listening to port 8000');
})