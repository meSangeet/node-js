// Events Module
// Node.js has a built-in module, called "Events",
//Where you can create-, fire- and listen for- your own events.

/*

eg1 - registering for the event to be fired only one time using once.

eg2 - create an event emitter instance and register a couple of callbacks.

eg3 - registering fot the event with callback parameters


*/

const EventEmitter = require("events");
//EventEmitter is a class in the module events which is imported to EventEmitter variable
const event = new EventEmitter();
//an instance of EventEmitter class is made called event
event.on("sayMyName", ()=>{
    console.log("Your name is Sangeet");
})
//The event.on() method is used to register a callback function that will be executed when the event named "sayMyName" is emitted.
//more event.on() function can be called for same event. i.e we can write multiple call backs for the same event.
event.emit("sayMyName");
//Finally, the event.emit() method is called to emit the "sayMyName" event. This triggers the execution of the callback function registered earlier, which logs the message "Your name is Sangeet" to the console.

//In summary, this code sets up an event listener using the EventEmitter class. When the event "sayMyName" is emitted, it triggers a callback function that prints the message "Your name is Sangeet" to the console.

//always write the callback for event before emitting the actual callback.

