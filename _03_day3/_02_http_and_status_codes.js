 //-------- HTTP and Status Codes ----------//

/*

HTTP (Hypertext Transfer Protocol) is the foundation of communication on the World Wide Web. It is an application protocol that allows the transfer of various types of data between web browsers and web servers. When a browser sends a request to a web server, the server responds with an HTTP status code, which provides information about the status of the request.

HTTP Status Codes are three-digit numbers that indicate the outcome of an HTTP request. They are grouped into different classes, each representing a specific category of response. Here are the five main classes of HTTP status codes:

Informational (1xx):

These codes indicate that the request has been received and the server is continuing to process it.
Examples: 100 Continue, 101 Switching Protocols.
Success (2xx):

These codes indicate that the request was successful and the server has successfully fulfilled the client's request.
Examples: 200 OK, 201 Created, 204 No Content.
Redirection (3xx):

These codes indicate that further action is needed to complete the request. They are used for redirecting the client to a different location or resource.
Examples: 301 Moved Permanently, 302 Found, 304 Not Modified.
Client Error (4xx):

These codes indicate that the client has made an error in the request, and the server cannot fulfill it.
Examples: 400 Bad Request, 403 Forbidden, 404 Not Found.
Server Error (5xx):

These codes indicate that the server encountered an error while processing the request, preventing it from fulfilling the request.
Examples: 500 Internal Server Error, 503 Service Unavailable.
These are just a few examples, and there are many more status codes available. Each status code provides a specific message to help diagnose and troubleshoot issues during the communication between clients and servers.

It's important to note that some common HTTP status codes include:

200 OK: The request was successful.
404 Not Found: The requested resource could not be found on the server.
500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
301 Moved Permanently: The requested resource has been permanently moved to a new location.
Understanding HTTP status codes is essential for web developers and administrators to identify and resolve issues related to web requests. By examining the status codes, it becomes easier to pinpoint problems and take appropriate actions to improve the browsing experience for users.

*/