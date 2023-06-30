// we can add parameter while emitting the event.
// let's say we want to show the status code and a message while throwing a checkPage event.

const EventEmitter = require('events');
const event = new EventEmitter();

event.on("checkPage", (sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit('checkPage', 200, 'ok');