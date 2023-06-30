// now we are going to read data in chunks and as that one chunk is read we will display it on the web page. 
// So basically we will stream the data on the web page

const fs = require('fs');
const http = require('http');
const server = http.createServer();

const rstream = fs.createReadStream("_05_day5/readableFile.txt");
server.on('request', (req, res)=>{
    rstream.on("data", (chunk)=>{
        res.write(chunk);
    });
    rstream.on("end", ()=>{
        res.end();
    })
    rstream.on('error', (err)=>{
        console.log(err);
        res.end("file not found");
    })
})


server.listen(8000, "127.0.0.1");

/*

code explaination - 

The code creates a readable stream called rstream using the createReadStream() method from the fs module. It specifies the file path of the readable file to be served as "_05_day5/readableFile.txt".

The code sets up an event listener on the server's "request" event. Whenever a client makes a request to the server, this event is triggered, and the provided callback function is executed.

Inside the callback function, the rstream is listening for the "data" event. When data is available to be read from the readable file, the "data" event is triggered, and the provided callback function is executed.

The callback function for the "data" event writes the data chunk to the response object (res). This allows the server to send the file content to the client in chunks as it becomes available.

The code also sets up an event listener for the "end" event on the rstream. When the entire file has been read and there is no more data to read, the "end" event is triggered, and the provided callback function is executed. The callback function for the "end" event calls the res.end() method to signal the completion of the response to the client.

Additionally, an event listener for the "error" event is set up on the rstream. If an error occurs while reading the file, the "error" event is triggered, and the provided callback function is executed.

The callback function for the "error" event logs the error to the console and sends a response to the client with the message "file not found" using the res.end() method.


In summary, this code sets up a server that serves the contents of a readable file. When a client makes a request, the file is streamed in chunks to the client until the entire file is sent. If any errors occur during the process, an error message is sent instead.


*/