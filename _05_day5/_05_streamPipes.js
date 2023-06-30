// Node.js Streams - Pipe method

// Stream.pipe() -> This method is used to take a readable stream and connect it to a writable stream.

//using this function we can ease the work which we done in the previous module of reading and writing the chunk of data. (basically streaming the data).

const fs = require('fs');
const http = require('http');

const server = http.createServer();


/*

In Node.js, the .pipe() method is used to simplify the process of consuming data from a readable stream and writing it to a writable stream. It provides a convenient way to connect the output of one stream to the input of another stream, allowing data to flow seamlessly between them.

The syntax for using the .pipe() method is as follows:

readableStream.pipe(writableStream);

Here's how it works:

readableStream: This is the source readable stream from which data is read.

writableStream: This is the destination writable stream where the data is written.

By calling the .pipe() method on a readable stream and passing in a writable stream as an argument, the readable stream starts consuming data and automatically writes it to the writable stream. The process continues until the readable stream is ended or an error occurs.

The .pipe() method takes care of managing the flow of data between the two streams, handling backpressure efficiently. It ensures that the writable stream is not overwhelmed with data if it is unable to process it as quickly as the readable stream produces it.

*/
server.on('request', (req,res)=>{
    const rstream  = fs.createReadStream('_05_day5/readableFile.txt');
    rstream.pipe(res);
})

server.listen(8000, "127.0.0.1");


/*
code explaination - 

The code sets up an event listener on the server's "request" event. Whenever a client makes a request to the server, this event is triggered, and the provided callback function is executed.

Inside the callback function, a readable stream rstream is created using the createReadStream() method from the fs module. It specifies the file path of the readable file to be served as "_05_day5/readableFile.txt".

The .pipe() method is called on the rstream, passing in the res object as an argument. This connects the output of the rstream to the input of the response object (res), causing the data read from the file to be automatically written to the response and sent to the client.

By using .pipe(res), the contents of the readableFile.txt are streamed directly to the response object, which effectively sends the file's content to the client. This approach avoids the need to manually handle the chunks of data and ensures efficient data transfer with backpressure management.

In summary, this code sets up a server that serves the contents of a readable file to the client using the .pipe() method. When a client makes a request, the readable file is streamed directly to the response object, providing an efficient way to send large files over the network.

*/