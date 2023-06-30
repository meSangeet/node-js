 const http = require('http');

const server = http.createServer((req,res)=>{
    let url = req.url;
    /*
    / -> single forward slash is the normal home page
    */
    if(url == '/'){
    res.writeHead(200);
    res.end('This is the home page');
    }else if(url == '/about'){
        res.writeHead(200);
        res.end('this is about page');
    }else{
        res.writeHead(404);
        res.end('some other shit');
    }
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000");
})

/*

1. In Node.js, the response.writeHead() method is used to write the response headers to be sent back to the client in an HTTP server. It is part of the http.ServerResponse object that is passed to the request handler function when handling an incoming HTTP request.

Response headers are a part of the HTTP response sent by a server to a client (usually a web browser) after receiving and processing an HTTP request. Headers are used to convey additional information about the response and to instruct the client on how to handle the received data.

Here are a few commonly used response headers:

Content-Type:

This header specifies the media type of the response body. It informs the client about the format of the data being returned.
Example: Content-Type: application/json
Content-Length:

This header indicates the length of the response body in bytes. It helps the client determine the total size of the data.
Example: Content-Length: 1024
Cache-Control:

This header controls how the client and intermediate caches should handle caching of the response. It specifies directives for caching mechanisms to follow.
Example: Cache-Control: max-age=3600
Location:

This header is used for redirection. It provides the new URL to which the client should navigate.
Example: Location: https://example.com/new-page
Set-Cookie:

This header is used to set a cookie on the client's browser. It includes information about the cookie's name, value, expiration, and other attributes.
Example: Set-Cookie: sessionId=abc123; Expires=Sat, 18 Jun 2023 12:00:00 GMT
Server:

This header identifies the software or server platform being used to handle the request.
Example: Server: Apache/2.4.29 (Ubuntu)

In Node.js, you can set the response headers using the response.writeHead() method, as mentioned in the previous response. The headers are sent along with the response body to provide additional information and control how the client handles the response.

The response.writeHead() method takes two main arguments: statusCode and headers

response.writeHead(statusCode, headers);

statusCode (number): This argument represents the HTTP status code that will be included in the response. It indicates the status or outcome of the request.
headers (object): This argument contains key-value pairs representing the response headers that will be sent back to the client.

const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

*/