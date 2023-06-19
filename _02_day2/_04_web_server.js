// Creating our ow web server using Node.js--

//To access web pages of any web application, you need a web server. The web server will handle all the http requests for the web application.

//eg - IIS is a web server for ASP.NET web applications and Apache is a web server for PHP and Java web applications.

//Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously. 
// You can use Apache or IIS to run Node.js Application but it is recommended to use Node.js web server.

//The http.createServer() method includes request and response parameters in its callback function

// The request object can be used to get information about the current HTTP request eg - url, request header and data.

// The response object can be used to send a response for a current HTTP request.

//If the respnse from the HTTP server is supposed to be displayed as HTML, You should include an HTTP header with the correct content type :

const http = require('http'); //you need to require this module to create our own server

const server = http.createServer((req, res)=>{
    res.end('Hello from the other side');
})

//server.listen() method is used to listen to the requests

server.listen(8000, '127.0.0.1', ()=>{
    console.log("listening to the port no 8000");
})
//127.0.0.1 is the local host
/*



*/