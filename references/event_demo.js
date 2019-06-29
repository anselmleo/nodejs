const EventEmitter = require('events');

class MyEmitter extends EventEmitter
{}

const myEvent = new MyEmitter();

myEvent.on('anyevent', ()=>console.log('Event fired by myEmitter!'));

myEvent.emit('anyevent');
myEvent.emit('event');
myEvent.emit('anyevent');
myEvent.emit('event');